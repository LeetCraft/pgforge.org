import React from 'react';
import { Card } from '@/components/ui/Card';

interface Command {
  command: string;
  description: string;
  category: 'Database' | 'Management' | 'System';
}

const commands: Command[] = [
  { command: 'pgforge setup', description: 'Initialize and check requirements', category: 'System' },
  { command: 'pgforge create --name <name>', description: 'Create a new database', category: 'Database' },
  { command: 'pgforge list', description: 'List all databases', category: 'Database' },
  { command: 'pgforge connect', description: 'Show all connection URLs', category: 'Database' },
  { command: 'pgforge inspect --name <name>', description: 'Detailed database info', category: 'Database' },
  { command: 'pgforge stop --name <name>', description: 'Stop a database', category: 'Management' },
  { command: 'pgforge start --name <name>', description: 'Start a stopped database', category: 'Management' },
  { command: 'pgforge backup --name <name>', description: 'Backup a database', category: 'Management' },
  { command: 'pgforge restore --name <name>', description: 'Restore from backup', category: 'Management' },
  { command: 'pgforge destroy --name <name>', description: 'Delete a database permanently', category: 'Management' },
  { command: 'pgforge web enable', description: 'Start the web management panel', category: 'System' },
  { command: 'pgforge web disable', description: 'Stop the web panel', category: 'System' },
  { command: 'pgforge update', description: 'Update PgForge to latest version', category: 'System' },
  { command: 'pgforge uninstall', description: 'Completely remove PgForge', category: 'System' },
];

const categories = ['Database', 'Management', 'System'] as const;

export const Commands: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Complete Command Reference
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Every command you need to manage PostgreSQL databases at your fingertips.
          </p>
        </div>

        {/* Commands by Category */}
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                {category}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {commands
                  .filter(cmd => cmd.category === category)
                  .map((cmd, index) => (
                    <Card key={index} className="p-6">
                      <code className="text-sm font-mono text-blue-600 bg-blue-50 px-3 py-1 rounded border border-blue-100">
                        {cmd.command}
                      </code>
                      <p className="text-slate-600 mt-3">
                        {cmd.description}
                      </p>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Example Use Case */}
        <div className="mt-16 bg-white rounded-xl border border-slate-200 p-8">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            Common Workflow
          </h3>
          <div className="space-y-2 font-mono text-sm text-slate-700">
            <div className="flex items-start gap-4">
              <span className="text-emerald-500 select-none">$</span>
              <span>pgforge create --name production</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-emerald-500 select-none">$</span>
              <span>pgforge backup --name production</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-emerald-500 select-none">$</span>
              <span>pgforge web enable</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-emerald-500 select-none">$</span>
              <span>pgforge list</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
