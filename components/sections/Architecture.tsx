import React from 'react';
import { ArrowDown, Globe, Database as DatabaseIcon, Lock } from 'lucide-react';

export const Architecture: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Clean Architecture
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Every database is a self-contained stack with connection pooling and security built in.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="max-w-2xl mx-auto">
          {/* Internet */}
          <div className="bg-white rounded-xl border-2 border-slate-300 p-6 text-center mb-6">
            <Globe className="w-8 h-8 text-slate-700 mx-auto mb-2" strokeWidth={2} />
            <h3 className="font-semibold text-slate-900">Internet</h3>
            <p className="text-sm text-slate-600 mt-1">Your application connects here</p>
          </div>

          <div className="flex justify-center mb-6">
            <ArrowDown className="w-6 h-6 text-slate-400" strokeWidth={2} />
          </div>

          {/* PgBouncer */}
          <div className="bg-blue-50 rounded-xl border-2 border-blue-200 p-6 text-center mb-6">
            <div className="inline-flex items-center gap-2 mb-2">
              <Lock className="w-6 h-6 text-blue-600" strokeWidth={2} />
              <h3 className="font-semibold text-slate-900 text-lg">PgBouncer</h3>
            </div>
            <p className="text-sm text-slate-600 mb-3">Connection Pooling Layer</p>
            <div className="bg-white rounded-lg p-3 text-xs font-mono text-slate-700 border border-blue-100">
              <div className="flex justify-between items-center mb-1">
                <span>Port:</span>
                <span className="font-semibold">19001-19999</span>
              </div>
              <div className="flex justify-between items-center mb-1">
                <span>Mode:</span>
                <span className="font-semibold">Transaction</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Max Connections:</span>
                <span className="font-semibold">1000</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <ArrowDown className="w-6 h-6 text-slate-400" strokeWidth={2} />
          </div>

          {/* PostgreSQL */}
          <div className="bg-emerald-50 rounded-xl border-2 border-emerald-200 p-6 text-center">
            <div className="inline-flex items-center gap-2 mb-2">
              <DatabaseIcon className="w-6 h-6 text-emerald-600" strokeWidth={2} />
              <h3 className="font-semibold text-slate-900 text-lg">PostgreSQL 16</h3>
            </div>
            <p className="text-sm text-slate-600 mb-3">Database Engine</p>
            <div className="bg-white rounded-lg p-3 text-xs font-mono text-slate-700 border border-emerald-100">
              <div className="flex justify-between items-center mb-1">
                <span>Network:</span>
                <span className="font-semibold">Internal Only</span>
              </div>
              <div className="flex justify-between items-center mb-1">
                <span>Data:</span>
                <span className="font-semibold">Persisted to Disk</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Isolation:</span>
                <span className="font-semibold">Docker Container</span>
              </div>
            </div>
          </div>

          {/* Key Points */}
          <div className="mt-12 grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg border border-slate-200 p-4 text-center">
              <div className="text-2xl font-bold text-blue-500 mb-1">999</div>
              <div className="text-sm text-slate-600">Max Databases</div>
            </div>
            <div className="bg-white rounded-lg border border-slate-200 p-4 text-center">
              <div className="text-2xl font-bold text-blue-500 mb-1">1000</div>
              <div className="text-sm text-slate-600">Connections per DB</div>
            </div>
            <div className="bg-white rounded-lg border border-slate-200 p-4 text-center">
              <div className="text-2xl font-bold text-blue-500 mb-1">0</div>
              <div className="text-sm text-slate-600">Configuration Files</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
