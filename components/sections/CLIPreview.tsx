'use client';

import React, { useState } from 'react';
import { Terminal } from 'lucide-react';

const cliExamples = [
  {
    title: "Create a database",
    command: "pgforge create --name myapp",
    output: `✓ Database "myapp" created successfully!

╭──────────────────────── 🐘 PostgreSQL ─────────────────────────╮
│                                                                 │
│   Database: myapp                                               │
│                                                                 │
│   Host:     your-server-ip                                      │
│   Port:     19001                                               │
│   User:     db_x7kj2m9p                                         │
│   Password: aB3kL9mNpQ2rS5tU8vW1xY4zA7cD0eF                     │
│   Database: myapp                                               │
│                                                                 │
│   Connection URL:                                               │
│   postgresql://db_x7kj2m9p:aB3k...@your-ip:19001/myapp         │
│                                                                 │
╰─────────────────────────────────────────────────────────────────╯`
  },
  {
    title: "List all databases",
    command: "pgforge list",
    output: `┌──────────────┬──────────┬────────┬─────────────────┐
│ Database     │ Status   │ Port   │ Created         │
├──────────────┼──────────┼────────┼─────────────────┤
│ production   │ running  │ 19001  │ 2 days ago      │
│ staging      │ running  │ 19002  │ 1 day ago       │
│ development  │ running  │ 19003  │ 3 hours ago     │
│ analytics    │ running  │ 19004  │ 1 hour ago      │
└──────────────┴──────────┴────────┴─────────────────┘

Total: 4 databases`
  },
  {
    title: "Import from Neon (one command)",
    command: "pgforge import --from neon --connection 'postgresql://...'",
    output: `🔄 Connecting to Neon database...
✓ Connection established

📊 Analyzing database...
  • Tables: 12
  • Size: 2.4 GB
  • Records: ~1.2M rows

🚀 Starting migration...
  [████████████████████████████████] 100%

✓ Migration complete!
  • Duration: 3m 24s
  • New database: production (port 19001)

Your Neon database is now running on PgForge 🎉`
  }
];

export const CLIPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Simple. Powerful. Fast.
          </h2>
          <p className="text-xl text-slate-600">
            Everything you need in a few commands
          </p>
        </div>

        {/* CLI Demo */}
        <div className="max-w-4xl mx-auto">

          {/* Tab Buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            {cliExamples.map((example, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === index
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {example.title}
              </button>
            ))}
          </div>

          {/* Terminal Window */}
          <div className="bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-800">

            {/* Terminal Header */}
            <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>
              <div className="flex-1 flex items-center justify-center gap-2">
                <Terminal className="w-4 h-4 text-slate-400" />
                <span className="text-sm text-slate-400 font-mono">terminal</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm">
              {/* Command */}
              <div className="mb-4">
                <span className="text-emerald-400 select-none">$ </span>
                <span className="text-slate-100">{cliExamples[activeTab].command}</span>
              </div>

              {/* Output */}
              <div className="text-slate-300 whitespace-pre-wrap leading-relaxed">
                {cliExamples[activeTab].output}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
