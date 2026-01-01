"use client";

import React, { useState, useEffect } from "react";
import { Check, Copy } from "lucide-react";

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const installCommand =
    "curl -fsSL https://raw.githubusercontent.com/LeetCraft/pgforge/main/install.sh | bash";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Animated terminal output
  const terminalLines = [
    { delay: 0, text: "$ pgforge setup", className: "text-emerald-400" },
    { delay: 800, text: "✓ Docker installed", className: "text-slate-300" },
    { delay: 1200, text: "✓ Requirements met", className: "text-slate-300" },
    { delay: 1600, text: "", className: "" },
    {
      delay: 2000,
      text: "$ pgforge create --name production",
      className: "text-emerald-400",
    },
    {
      delay: 2800,
      text: '✓ Database "production" created!',
      className: "text-emerald-400",
    },
    { delay: 3200, text: "  Port: 19001", className: "text-slate-400" },
    { delay: 3500, text: "  Status: running", className: "text-slate-400" },
    { delay: 3800, text: "", className: "" },
    { delay: 4200, text: "$ pgforge list", className: "text-emerald-400" },
    {
      delay: 4800,
      text: "  production  running  19001",
      className: "text-slate-300",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev < terminalLines.length - 1) {
          return prev + 1;
        }
        return 0; // Loop back
      });
    }, 500);

    return () => clearInterval(timer);
  }, [terminalLines.length]);

  return (
    <section className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Value Prop + Install */}
          <div>
            {/* Main Headline */}
            <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-none">
              Stop paying{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                $300/month
              </span>
              <span className="block mt-2">for your databases</span>
            </h1>

            {/* Subheadline */}
            <p className="text-2xl md:text-3xl text-slate-600 mb-4 font-light">
              Self-host 20 databases for{" "}
              <span className="font-semibold text-slate-900">$8/month</span>
            </p>

            <p className="text-lg text-slate-500 mb-12">
              Production-ready PostgreSQL in seconds on your Hetzner VPS.
            </p>

            {/* Install Command Bar */}
            <div className="mb-12">
              <div className="relative group">
                <div className="relative bg-slate-950 rounded-lg border border-slate-800 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                  <div className="flex items-center">
                    <div className="flex-1 px-4 py-3 font-mono text-sm text-slate-100 overflow-x-auto">
                      <span className="text-slate-500 select-none">$ </span>
                      <span className="text-slate-200">{installCommand}</span>
                    </div>
                    <button
                      onClick={handleCopy}
                      className="flex-shrink-0 px-4 py-3 hover:bg-slate-800/50 text-slate-400 hover:text-slate-100 transition-all duration-150 border-l border-slate-800"
                      aria-label="Copy to clipboard"
                    >
                      {copied ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-1">20</div>
                <div className="text-sm text-slate-500">Databases</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-1">$8</div>
                <div className="text-sm text-slate-500">per month</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-1">
                  30s
                </div>
                <div className="text-sm text-slate-500">to setup</div>
              </div>
            </div>
          </div>

          {/* Right: Asciinema-style Terminal */}
          <div className="lg:block">
            <div className="bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-800">
              {/* Terminal Header */}
              <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-sm text-slate-400 font-mono">
                    pgforge demo
                  </span>
                </div>
              </div>

              {/* Terminal Content - Animated */}
              <div className="p-6 font-mono text-sm h-80 overflow-hidden">
                {terminalLines.slice(0, currentLine + 1).map((line, index) => (
                  <div key={index} className={`mb-1 ${line.className}`}>
                    {line.text}
                  </div>
                ))}
                {/* Blinking cursor */}
                <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse ml-1"></span>
              </div>
            </div>

            {/* Note under terminal */}
            <p className="text-sm text-slate-500 mt-4 text-center">
              Setup tutorial - Live demo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
