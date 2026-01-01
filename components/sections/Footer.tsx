import React from 'react';
import { Database, Github, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Database className="w-8 h-8 text-blue-400" strokeWidth={2} />
              <span className="text-2xl font-bold text-white">PgForge</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm">
              Serverless PostgreSQL databases made simple. Production-ready instances in seconds.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/LeetCraft/pgforge"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors duration-150"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" strokeWidth={2} />
              </a>
              <a
                href="https://twitter.com/leetcraft"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors duration-150"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" strokeWidth={2} />
              </a>
              <a
                href="mailto:hello@pgforge.org"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors duration-150"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://github.com/LeetCraft/pgforge#readme" className="hover:text-white transition-colors duration-150">
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://github.com/LeetCraft/pgforge" className="hover:text-white transition-colors duration-150">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://github.com/LeetCraft/pgforge/releases" className="hover:text-white transition-colors duration-150">
                  Releases
                </a>
              </li>
              <li>
                <a href="https://github.com/LeetCraft/pgforge/issues" className="hover:text-white transition-colors duration-150">
                  Issues
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">LeetCraft</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://leetcraft.net" className="hover:text-white transition-colors duration-150">
                  About
                </a>
              </li>
              <li>
                <a href="https://github.com/LeetCraft" className="hover:text-white transition-colors duration-150">
                  Open Source
                </a>
              </li>
              <li>
                <a href="mailto:hello@pgforge.org" className="hover:text-white transition-colors duration-150">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} LeetCraft. Licensed under MIT.
          </p>
          <p className="text-sm">
            Built with Next.js · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
};
