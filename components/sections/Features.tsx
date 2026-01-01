import React from 'react';
import { Terminal, Gauge, Lock, RotateCcw, Globe, Boxes } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { CodeBlock } from '@/components/ui/CodeBlock';

const features = [
  {
    icon: Terminal,
    title: "Simple CLI",
    description: "Intuitive commands that feel natural. Create, manage, and monitor databases without leaving your terminal.",
    code: "pgforge create --name myapp"
  },
  {
    icon: Gauge,
    title: "Connection Pooling",
    description: "Built-in PgBouncer handles 1000+ connections per database. Perfect for serverless functions that spawn connections rapidly.",
    code: null
  },
  {
    icon: Lock,
    title: "Secure by Default",
    description: "PostgreSQL runs on internal networks only. PgBouncer is the only exposed service, minimizing attack surface.",
    code: null
  },
  {
    icon: RotateCcw,
    title: "Auto-Restart",
    description: "System reboots? No problem. All databases automatically restart on boot via systemd. Zero maintenance required.",
    code: null
  },
  {
    icon: Globe,
    title: "Web Management",
    description: "Built-in web panel for visual database management. View metrics, create databases, and monitor resources at a glance.",
    code: "pgforge web enable"
  },
  {
    icon: Boxes,
    title: "Isolated Environments",
    description: "Each database runs in its own Docker container with dedicated resources. No noisy neighbors, guaranteed isolation.",
    code: null
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Production-grade features built in. No plugins, no extensions, no extra services to configure.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} hover className="flex flex-col">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-500" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                {feature.code && (
                  <div className="mt-auto pt-4">
                    <CodeBlock code={feature.code} copyable={false} />
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
