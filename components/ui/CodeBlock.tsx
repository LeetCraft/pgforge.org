'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  output?: string;
  copyable?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'bash',
  output,
  copyable = true
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className="bg-slate-900 text-slate-50 font-mono text-sm p-6 rounded-xl border border-slate-800 overflow-x-auto">
        <div className="flex items-start gap-3">
          {language === 'bash' && <span className="text-emerald-400 select-none">$</span>}
          <code className="flex-1">{code}</code>
        </div>
        {output && (
          <div className="mt-4 pt-4 border-t border-slate-700">
            <pre className="text-slate-300 text-xs whitespace-pre-wrap">{output}</pre>
          </div>
        )}
      </div>
      {copyable && (
        <button
          onClick={handleCopy}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400
                     hover:bg-slate-700 hover:text-slate-200 transition-all duration-150
                     opacity-0 group-hover:opacity-100"
          aria-label="Copy code"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
      )}
    </div>
  );
};
