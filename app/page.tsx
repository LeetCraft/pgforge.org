import { Header } from '@/components/Header';
import { Hero } from '@/components/sections/Hero';
import { Pricing } from '@/components/sections/Pricing';
import { CLIPreview } from '@/components/sections/CLIPreview';
import { FeaturesSimple } from '@/components/sections/FeaturesSimple';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PgForge",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Linux",
    "description": "Production-ready PostgreSQL server CLI for self-hosting. Deploy and manage 20+ Postgres databases on Hetzner VPS for $8/month.",
    "offers": {
      "@type": "Offer",
      "price": "8.00",
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31"
    },
    "softwareVersion": "1.0",
    "url": "https://pgforge.org",
    "author": {
      "@type": "Organization",
      "name": "LeetCraft"
    },
    "keywords": "postgresql cli, postgres management, database cli tool, self-hosted postgres, docker postgresql"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main className="min-h-screen pt-16">
        <Hero />
        <div id="pricing">
          <Pricing />
        </div>
        <div id="features">
          <CLIPreview />
          <FeaturesSimple />
        </div>
        <Footer />
      </main>
    </>
  );
}
