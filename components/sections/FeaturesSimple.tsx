import React from 'react';
import { Globe, Zap, Download, Lock, RotateCcw, Boxes } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: "Web Management Panel",
    description: "Visual dashboard to create, monitor, and manage databases. No terminal required."
  },
  {
    icon: Download,
    title: "One-Click Import",
    description: "Migrate from Neon, Supabase, or any PostgreSQL provider in minutes with automatic schema copying."
  },
  {
    icon: Zap,
    title: "PgBouncer Pooling",
    description: "Handle 1000+ connections per database. Perfect for serverless Next.js and Vercel deployments."
  },
  {
    icon: RotateCcw,
    title: "Auto-Restart",
    description: "Server reboots? All databases automatically restart. Zero maintenance required."
  },
  {
    icon: Lock,
    title: "Secure by Default",
    description: "PostgreSQL runs on internal networks. Only PgBouncer is exposed with encrypted connections."
  },
  {
    icon: Boxes,
    title: "Isolated Containers",
    description: "Each database in its own Docker container. Perfect isolation, dedicated resources."
  }
];

export const FeaturesSimple: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Production-ready features
          </h2>
          <p className="text-xl text-slate-600">
            Everything you need. Nothing you don&apos;t.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white rounded-xl border-2 border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                  <Icon className="w-6 h-6 text-blue-600" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
