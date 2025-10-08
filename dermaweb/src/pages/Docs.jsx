import React, { useRef, useState, useEffect } from "react";
import { FaSearch, FaDownload } from "react-icons/fa";
// import { RiMobileDownloadFill } from "react-icons/ri";
// import { TbDeviceMobileSearch } from "react-icons/tb";
// import { MdInstallDesktop } from "react-icons/md";
// import { FaBrain } from "react-icons/fa6";

export default function Docs() {
  const [query, setQuery] = useState("");
  const [activeSection, setActiveSection] = useState("");
  const [selectedSection, setSelectedSection] = useState("");

  // Refs for scroll targets
  const mobileInstallRef = useRef(null);
  const mobileUsageRef = useRef(null);
  const cliInstallRef = useRef(null);
  const cliUsageRef = useRef(null);

  const sectionRefs = {
    mobileInstallRef,
    mobileUsageRef,
    cliInstallRef,
    cliUsageRef,
  };

  // Smooth scroll
  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Search
  const handleSearch = (e) => {
    e.preventDefault();
    const term = query.toLowerCase();
    if (term.includes("mobile") && term.includes("install"))
      handleScroll(mobileInstallRef);
    else if (term.includes("mobile") && term.includes("usage"))
      handleScroll(mobileUsageRef);
    else if (term.includes("cli") && term.includes("install"))
      handleScroll(cliInstallRef);
    else if (term.includes("cli") && term.includes("usage"))
      handleScroll(cliUsageRef);
  };

  // Track active section (for highlighting in sidebar)
  useEffect(() => {
    const handleScrollSpy = () => {
      const offsets = Object.entries(sectionRefs).map(([key, ref]) => ({
        key,
        top: ref.current?.getBoundingClientRect().top,
      }));

      const visible = offsets.find((o) => o.top > 0 && o.top < 300);
      if (visible) setActiveSection(visible.key);
    };
    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <div
      className="relative flex flex-col md:flex-row min-h-screen px-6 md:px-16 lg:px-24 py-16 transition-colors duration-500"
      style={{
        background:
          "linear-gradient(180deg, var(--color-surface) 0%, var(--color-bg) 100%)",
        color: "var(--color-text)",
      }}
    >
      {/* ---------- MAIN CONTENT ---------- */}
      <div className="flex-1 md:pr-20">
        {/* Page Title */}
        <h1
          className="text-4xl md:text-5xl font-bold mb-12"
          style={{ color: "var(--color-primary)" }}
        >
          Documentation
        </h1>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="relative mb-10 max-w-2xl">
          <FaSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-lg"
            style={{ color: "var(--muted)" }}
          />
          <input
            type="text"
            placeholder="Search (e.g., 'CLI installation' or 'Mobile usage')"
            className="w-full pl-12 pr-4 py-3 rounded-xl text-base outline-none transition-all duration-300"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              background: "var(--color-bg)",
              color: "var(--color-text)",
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              border: "1px solid rgba(0,0,0,0.08)",
            }}
          />
        </form>

        {/* Mobile Section Dropdown */}
        <div className="md:hidden mb-10">
          <select
            value={selectedSection}
            onChange={(e) => {
              setSelectedSection(e.target.value);
              handleScroll(sectionRefs[e.target.value]);
            }}
            className="w-full p-3 rounded-lg border text-base"
            style={{
              background: "var(--color-surface)",
              color: "var(--color-text)",
              borderColor: "rgba(0,0,0,0.1)",
            }}
          >
            <option value="">Jump to Section...</option>
            <option value="mobileInstallRef">📱 Mobile Installation</option>
            <option value="mobileUsageRef">📲 Mobile Usage</option>
            <option value="cliInstallRef">💻 CLI Installation</option>
            <option value="cliUsageRef">🧠 CLI Usage</option>
          </select>
        </div>

        {/* Documentation Sections */}
        <div className="space-y-20 text-base md:text-lg leading-relaxed">
          {/* Mobile App Installation */}
          <section ref={mobileInstallRef} id="mobile-install">
            <h2
              className="text-3xl font-semibold mb-4"
              style={{ color: "var(--color-primary)" }}
            >
              Mobile App Installation
            </h2>
            <p>
              To install the <strong>DermaAI Mobile App</strong>:
            </p>
            <ol className="list-decimal pl-6 space-y-2 mt-3">
              <li>
                Visit the official app page:{" "}
                <a
                  href="https://dermaai.com/download"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  DermaAI App
                </a>
              </li>
              <li>
                Tap <strong>Download</strong> and allow installation from
                trusted sources if prompted.
              </li>
              <li>
                Open the app and sign in using your DermaAI account or create a
                new one.
              </li>
            </ol>
          </section>

          {/* Mobile App Usage */}
          <section ref={mobileUsageRef} id="mobile-usage">
            <h2
              className="text-3xl font-semibold mb-4 mt-10"
              style={{ color: "var(--color-primary)" }}
            >
              Mobile App Usage
            </h2>
            <p>Once installed, follow these steps to use the DermaAI app:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Upload a clear photo of your skin lesion.</li>
              <li>Wait a few seconds while the AI analyzes your image.</li>
              <li>View your diagnosis and recommended next steps instantly.</li>
            </ul>
          </section>

          {/* CLI Installation */}
          <section ref={cliInstallRef} id="cli-install">
            <h2
              className="text-3xl font-semibold mb-4 mt-10"
              style={{ color: "var(--color-primary)" }}
            >
              CLI Installation
            </h2>
            <p>
              The DermaAI CLI allows developers and researchers to run
              detections directly from the command line.
            </p>
            <ol className="list-decimal pl-6 space-y-2 mt-3">
              <li>Ensure Python 3.8+ is installed on your system.</li>
              <li>
                Run:{" "}
                <code className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded text-white">
                  pip install dermaai
                </code>
              </li>
              <li>
                Verify installation:{" "}
                <code className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded text-white">
                  dermaai --version
                </code>
              </li>
            </ol>
          </section>

          {/* CLI Usage */}
          <section ref={cliUsageRef} id="cli-usage">
            <h2
              className="text-3xl font-semibold mb-4 mt-10"
              style={{ color: "var(--color-primary)" }}
            >
              CLI Usage
            </h2>
            <p>After installation, you can run predictions and export reports:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                Run prediction:
                <code className="block bg-gray-200 dark:bg-gray-800 px-2 py-1 mt-1 rounded text-white">
                  dermaai predict run --images-source test_images/ --output-format pdf
                </code>
              </li>
              <li>
                Check available models:
                <code className="block bg-gray-200 dark:bg-gray-800 px-2 py-1 mt-1 rounded text-white">
                  dermaai models list
                </code>
              </li>
              <li>Export results in JSON, CSV, or PDF formats.</li>
            </ul>
          </section>
        </div>
      </div>

      {/* ---------- SIDEBAR NAVIGATION ---------- */}
      <aside
        className="hidden md:flex flex-col gap-3 fixed right-12 top-36 p-5 rounded-2xl shadow-md w-60"
        style={{
          background: "var(--color-surface)",
          border: "1px solid rgba(0,0,0,0.1)",
          color: "var(--color-text)",
        }}
      >
        <h3
          className="font-semibold text-lg mb-3"
          style={{ color: "var(--color-primary)" }}
        >
          Sections
        </h3>

        {[
          { ref: mobileInstallRef, label: "📱 Mobile Installation", key: "mobileInstallRef" },
          { ref: mobileUsageRef, label: "📲 Mobile Usage", key: "mobileUsageRef" },
          { ref: cliInstallRef, label: "💻 CLI Installation", key: "cliInstallRef" },
          { ref: cliUsageRef, label: "🧠 CLI Usage", key: "cliUsageRef" },
        ].map(({ ref, label, key }) => (
          <button
            key={key}
            onClick={() => handleScroll(ref)}
            className={`text-left text-sm py-1 transition-all duration-200 ${
              activeSection === key
                ? "font-semibold underline"
                : "hover:underline opacity-90"
            }`}
          >
            {label}
          </button>
        ))}
      </aside>
    </div>
  );
}
