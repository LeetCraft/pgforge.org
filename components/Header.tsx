import React from 'react';
import Image from 'next/image';
import { Github } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-[20%] overflow-hidden shadow-sm">
              <Image
                src="/logo.svg"
                alt="PgForge"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-semibold text-slate-950 tracking-tight">
              pgForge
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#pricing"
              className="text-sm text-slate-600 hover:text-slate-950 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#features"
              className="text-sm text-slate-600 hover:text-slate-950 transition-colors"
            >
              Features
            </a>
            <a
              href="https://github.com/LeetCraft/pgforge#readme"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-600 hover:text-slate-950 transition-colors"
            >
              Docs
            </a>
            <a
              href="https://github.com/LeetCraft/pgforge"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-950 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </nav>

          {/* Mobile GitHub Link */}
          <a
            href="https://github.com/LeetCraft/pgforge"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden flex items-center gap-2 px-4 py-2 bg-slate-950 text-white text-sm font-medium rounded-lg"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};
