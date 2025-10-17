// src/pages/DownloadPage.jsx
import React, { useState, useRef } from "react";
import { FaDownload, FaMobileAlt, FaDesktop } from "react-icons/fa";

/**
 * DownloadPage
 * - Two CTAs: download mobile APK and download CLI EXE
 * - Uses CSS variables from your theme/colors
 * - Default behavior: open direct S3 link (recommended for big files)
 * - Fallback: fetch with streaming to show progress (may use lots of memory for large files)
 *
 * IMPORTANT: Replace MOBILE_URL and CLI_URL with your S3 object or presigned URLs.
 */

const MOBILE_URL = "https://dermaai-model-classes-bucket.s3.amazonaws.com/DermaAiMobile.apk"; // replace
const CLI_URL = "https://dermaai-model-classes-bucket.s3.amazonaws.com/dermaai.exe"; // replace

const FILES = {
  mobile: {
    url: MOBILE_URL,
    name: "DermaAiMobile.apk",
    size: "227 MB",
    subtitle: "Android APK — install on Android devices",
    icon: <FaMobileAlt className="text-3xl" />,
  },
  cli: {
    url: CLI_URL,
    name: "dermaai.exe",
    size: "547 MB",
    subtitle: "Windows CLI installer — command-line tools",
    icon: <FaDesktop className="text-3xl" />,
  },
};

function Toast({ toasts, onClose }) {
  // simple toast stack fixed bottom-right
  return (
    <div
      aria-live="polite"
      className="fixed z-50 right-4 bottom-6 flex flex-col gap-3 max-w-xs"
      style={{ pointerEvents: "none" }}
    >
      {toasts.map((t) => (
        <div
          key={t.id}
          role="status"
          className="shadow-lg rounded-xl p-3 pr-4"
          style={{
            background: "var(--color-surface)",
            borderLeft: `4px solid var(--color-primary)`,
            color: "var(--color-text)",
            pointerEvents: "auto",
            boxShadow: "0 6px 18px rgba(10, 61, 145, 0.12)",
          }}
        >
          <div className="flex items-start gap-3">
            <div className="flex-none mt-0.5">
              <FaDownload style={{ color: "var(--color-primary-2)" }} />
            </div>
            <div className="flex-1 text-sm">
              <div className="font-semibold text-sm">{t.title}</div>
              <div className="text-xs mt-1 text-[var(--muted)]">{t.message}</div>
            </div>
            <button
              aria-label="dismiss"
              onClick={() => onClose(t.id)}
              className="ml-3 text-xs font-medium opacity-80"
              style={{ color: "var(--muted)" }}
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function DownloadPage() {
  const [toasts, setToasts] = useState([]);
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const currentAbortRef = useRef(null);

  function pushToast(title, message, ttl = 8000) {
    const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
    setToasts((s) => [{ id, title, message }, ...s]);
    if (ttl > 0) setTimeout(() => removeToast(id), ttl);
    return id;
  }
  function removeToast(id) {
    setToasts((s) => s.filter((t) => t.id !== id));
  }

  // Recommended: open direct link. This allows the browser to handle download efficiently (resume, stream, minimal memory)
  const startDirectDownload = (file) => {
    pushToast("Download started", `Preparing ${file.name} (${file.size})...`);
    // Create an anchor and click it
    const a = document.createElement("a");
    a.href = file.url;
    // download attribute is optional and may be ignored cross-origin; still helps filename suggestion
    a.setAttribute("download", file.name);
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Fallback: fetch and stream with progress (note: may consume memory for very large files)
  const startFetchDownload = async (file) => {
    try {
      setDownloading(true);
      setProgress(0);
      const toastId = pushToast("Downloading", `${file.name} — starting...`, 0);

      // Abort controller so user can cancel later (if you add UI)
      const controller = new AbortController();
      currentAbortRef.current = controller;

      const res = await fetch(file.url, { signal: controller.signal });
      if (!res.ok) throw new Error(`Download failed: ${res.status}`);

      const contentLength = res.headers.get("content-length");
      const total = contentLength ? parseInt(contentLength, 10) : null;

      const reader = res.body?.getReader();
      if (!reader) throw new Error("Streaming not available in this browser");

      const chunks = [];
      let received = 0;
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        received += value.length;
        if (total) setProgress(Math.round((received / total) * 100));
        else setProgress((prev) => Math.min(99, prev + 3)); // rough progress when no length
      }

      // build blob and trigger download
      const blob = new Blob(chunks);
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = file.name;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);

      removeToast(toastId);
      pushToast("Download complete", `${file.name} has been downloaded.`);
    } catch (err) {
      console.error(err);
      pushToast("Download failed", (err && err.message) || "Unknown error");
    } finally {
      setDownloading(false);
      setProgress(0);
      currentAbortRef.current = null;
    }
  };

  // UI handler that prefers direct link but falls back to fetch if user wants progress (or CORS prevents direct link)
  const handleDownload = async (which, opts = { method: "direct" }) => {
    const file = FILES[which];
    if (!file) return;

    // show immediate toast
    pushToast("Starting download", `${file.name} (${file.size})`, 4000);

    if (opts.method === "fetch") {
      await startFetchDownload(file);
      return;
    }

    // try direct by default
    try {
      startDirectDownload(file);
    } catch (err) {
      // fallback to fetch
      pushToast("Fallback", "Direct link failed — using browser fetch fallback", 5000);
      await startFetchDownload(file);
    }
  };

  return (
    <div
      className="min-h-screen p-6 md:p-12 flex flex-col items-center"
      style={{
        background: "linear-gradient(180deg, var(--color-surface) 0%, var(--color-bg) 100%)",
        color: "var(--color-text)",
      }}
    >
      <div className="w-full max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--color-primary)" }}>
          Download DermaAI
        </h1>
        <p className="text-base md:text-lg mb-8" style={{ color: "var(--muted)" }}>
          Choose your preferred distribution. Click a button to start the download — we recommend using the direct link so the browser can handle large files efficiently.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(FILES).map(([key, file]) => (
            <div
              key={key}
              className="rounded-2xl p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-4"
              style={{
                background: "var(--color-surface)",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <div className="flex-none w-full md:w-20 flex items-center justify-center rounded-lg p-3" style={{ background: "rgba(10,61,145,0.06)" }}>
                {file.icon}
              </div>

              <div className="flex-1 w-full">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-semibold text-lg" style={{ color: "var(--color-primary)" }}>
                      {file.name == "DermaAiMobile.apk"? "Mobile App": "CLI App"}
                    </div>
                    <div className="text-sm mt-1" style={{ color: "var(--muted)" }}>
                      {file.subtitle} • {file.size}
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleDownload(key, { method: "direct" })}
                        className="px-4 py-2 rounded-xl font-medium flex items-center gap-2"
                        style={{
                          background: "var(--color-primary)",
                          color: "#fff",
                          boxShadow: "0 6px 20px rgba(10,61,145,0.12)",
                        }}
                        aria-label={`Download ${file.name} (direct link)`}
                      >
                        <FaDownload />
                        Download
                      </button>

                      <button
                        onClick={() => handleDownload(key, { method: "fetch" })}
                        className="px-3 py-2 rounded-xl font-medium border"
                        style={{
                          background: "transparent",
                          borderColor: "rgba(0,0,0,0.06)",
                          color: "var(--color-text)",
                        }}
                        aria-label={`Download ${file.name} (fetch with progress)`}
                        title="Use fetch-based download (shows progress, may use more memory)"
                      >
                        Progress
                      </button>
                    </div>

                    <div className="text-xs text-[var(--muted)]">Tip: use the 'Download' button for faster, browser-managed transfer.</div>
                  </div>
                </div>

                {/* progress bar area (visible only during fetch) */}
                {downloading && (
                  <div className="mt-4">
                    <div className="text-sm mb-1">Downloading: {progress}%</div>
                    <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
                      <div
                        className="h-full"
                        style={{
                          width: `${progress}%`,
                          background: "linear-gradient(90deg, var(--color-primary), var(--color-primary-2))",
                          transition: "width 300ms linear",
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        
      </div>

      <Toast toasts={toasts} onClose={removeToast} />
    </div>
  );
}
