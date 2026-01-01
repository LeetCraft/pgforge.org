import React from "react";
import { X, Check } from "lucide-react";

export const Pricing: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Comparison Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            The math is simple
          </h2>
          <p className="text-xl text-slate-600">Same features. 97% cheaper.</p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {/* Neon DB */}
          <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 relative">
            <div className="absolute -top-3 left-6 bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full">
              Expensive
            </div>

            <div className="mb-6">
              <div className="text-sm text-slate-500 mb-1">Neon DB & Co</div>
              <div className="text-5xl font-bold text-slate-900 mb-1">
                $300
                <span className="text-xl text-slate-500 font-normal">/mo</span>
              </div>
              <div className="text-sm text-slate-500">5 databases included</div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-emerald-500" />
                <span className="text-slate-700">Connection pooling</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-emerald-500" />
                <span className="text-slate-700">Auto-scaling</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-emerald-500" />
                <span className="text-slate-700">Backups</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <X className="w-4 h-4 text-red-400" />
                <span className="text-slate-400">Self-hosted</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <X className="w-4 h-4 text-red-400" />
                <span className="text-slate-400">Full control</span>
              </div>
            </div>

            <div className="text-right text-2xl font-bold text-red-600">
              $3,600/year
            </div>
          </div>

          {/* PgForge + Hetzner */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-blue-500 relative shadow-xl">
            <div className="absolute -top-3 left-6 bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Smart
            </div>

            <div className="mb-6">
              <div className="text-sm text-slate-500 mb-1">
                PgForge + Hetzner VPS
              </div>
              <div className="text-5xl font-bold text-slate-900 mb-1">
                $8
                <span className="text-xl text-slate-500 font-normal">/mo</span>
              </div>
              <div className="text-sm text-emerald-600 font-medium">
                20 databases included
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-emerald-500" />
                <span className="text-slate-700">Connection pooling</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-emerald-500" />
                <span className="text-slate-700">Auto-restart</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-emerald-500" />
                <span className="text-slate-700">
                  Easy S3 backups and restore
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-emerald-500" />
                <span className="text-slate-700">Self-hosted</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-emerald-500" />
                <span className="text-slate-700">Full control</span>
              </div>
            </div>

            <div className="text-right text-2xl font-bold text-emerald-600">
              $96/year
            </div>
          </div>
        </div>

        {/* Savings Highlight */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-emerald-100 text-emerald-900 px-8 py-4 rounded-full">
            <span className="text-lg font-medium">You save</span>
            <span className="text-3xl font-bold">$3,504/year</span>
          </div>
        </div>
      </div>
    </section>
  );
};
