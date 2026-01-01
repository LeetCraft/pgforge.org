import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PgForge - PostgreSQL CLI Tool | Self-Host Postgres Databases for $8/month",
  description: "Production-ready PostgreSQL server CLI for self-hosting. Deploy and manage 20+ Postgres databases on Hetzner VPS for $8/month. Open-source Docker-based PostgreSQL management tool with PgBouncer pooling, automated backups, and web panel.",
  keywords: [
    "postgresql cli",
    "postgres cli tool",
    "postgresql server cli",
    "postgres management cli",
    "self-hosted postgresql",
    "postgres docker cli",
    "postgresql database tool",
    "postgres server management",
    "postgresql automation",
    "postgres vps hosting",
    "postgresql hetzner",
    "postgres deployment tool",
    "postgresql container management",
    "postgres command line",
    "pgbouncer cli",
    "postgresql backup tool",
    "neon alternative",
    "supabase alternative",
    "postgres self-hosting",
    "cheap postgres hosting",
  ],
  authors: [{ name: "LeetCraft" }],
  openGraph: {
    title: "PgForge - PostgreSQL CLI Tool | Self-Host Postgres for $8/month",
    description: "Production-ready PostgreSQL server CLI. Deploy and manage 20+ Postgres databases on Hetzner VPS for $8/month with automated backups and PgBouncer pooling.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PgForge - PostgreSQL CLI Tool | Self-Host Postgres for $8/month",
    description: "Production-ready PostgreSQL server CLI. Deploy and manage 20+ Postgres databases on Hetzner VPS for $8/month with automated backups and PgBouncer pooling.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
