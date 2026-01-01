import React from 'react';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Install PgForge",
    description: "One command installs the CLI, adds it to your PATH, and you're ready to go.",
    code: "curl -fsSL https://raw.githubusercontent.com/LeetCraft/pgforge/main/install.sh | bash",
  },
  {
    number: "02",
    title: "Initialize",
    description: "Set up PgForge and verify all requirements are met.",
    code: "pgforge setup",
  },
  {
    number: "03",
    title: "Create a Database",
    description: "Spin up a production-ready PostgreSQL instance with connection pooling.",
    code: "pgforge create --name myapp",
    output: `✓ Database "myapp" created successfully!

╭──────────────────────── 🐘 PostgreSQL ─────────────────────────╮
│                                                                 │
│   Database: myapp                                               │
│                                                                 │
│   Host:     203.0.113.50                                        │
│   Port:     19001                                               │
│   User:     db_x7kj2m9p                                         │
│   Password: aB3kL9mNpQ2rS5tU8vW1xY4zA7cD0eF                     │
│   Database: myapp                                               │
│                                                                 │
│   Connection URL:                                               │
│   postgresql://db_x7kj2m9p:aB3k...@203.0.113.50:19001/myapp    │
│                                                                 │
╰─────────────────────────────────────────────────────────────────╯`
  },
  {
    number: "04",
    title: "Connect Your App",
    description: "Copy the connection URL and use it in your application. That's it.",
    code: `export DATABASE_URL="postgresql://db_x7kj2m9p:aB3k...@203.0.113.50:19001/myapp"`,
  }
];

export const QuickStart: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get Started in 30 Seconds
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From zero to production database in four simple commands.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-slate-200 -mb-12" />
              )}

              <div className="relative">
                {/* Step Number */}
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-500 text-white font-bold text-xl flex items-center justify-center shadow-lg">
                    {step.number}
                  </div>

                  <div className="flex-1">
                    {/* Title & Description */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-600">
                        {step.description}
                      </p>
                    </div>

                    {/* Code Block */}
                    <CodeBlock
                      code={step.code}
                      output={step.output}
                      copyable={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Message */}
        <div className="mt-16 bg-emerald-50 rounded-xl border border-emerald-200 p-8 text-center">
          <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-4" strokeWidth={2} />
          <h3 className="text-2xl font-semibold text-slate-900 mb-2">
            You&apos;re All Set!
          </h3>
          <p className="text-slate-600 max-w-xl mx-auto">
            Your database is running with connection pooling, automatic restarts, and backup capabilities.
            Start building your application.
          </p>
        </div>
      </div>
    </section>
  );
};
