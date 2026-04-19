'use client';

import Link from "next/link";
import { ExternalLink } from "lucide-react";

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const services = ['Email Marketing', 'Campanhas', 'Branding'];
const furniture = ['Sofás', 'Cadeiras', 'Mesas'];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-secundary)', width: '100%' }}>
      <div style={{ minWidth: 1280, margin: '0 auto', padding: '4rem 5rem 2rem' }}>

        {/* Topo */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 48, marginBottom: 48 }}>

          {/* Marca */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 340 }}>
            <span style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
              VendeMais
            </span>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.7,
              color: 'var(--text-muted)',
              fontFamily: "'DM Mono', monospace",
              margin: 0,
            }}>
              A vantagem de escolher a VendeMais é ter conforto, qualidade e design moderno — entregues até você em todo o Brasil.
            </p>
          </div>

          {/* Colunas de links */}
          <div style={{ display: 'flex', gap: 64 }}>

            {/* Serviços */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--primary)' }}>
                Serviços
              </span>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {services.map((s) => (
                  <Link key={s} href="#" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textDecoration: 'none' }}>
                    {s}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Móveis */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--primary)' }}>
                Móveis
              </span>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {furniture.map((f) => (
                  <Link key={f} href="#" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textDecoration: 'none' }}>
                    {f}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Redes sociais */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--primary)' }}>
                Siga-nos
              </span>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { icon: <FacebookIcon />, label: 'Facebook' },
                  { icon: <TwitterIcon />, label: 'Twitter' },
                  { icon: <InstagramIcon />, label: 'Instagram' },
                ].map(({ icon, label }) => (
                  <Link key={label} href="#" style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    fontSize: '0.9rem', color: 'var(--text-secondary)', textDecoration: 'none',
                  }}>
                    {icon}
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

          </div>
        </div>

        {/* Divisória */}
        <hr style={{ border: 'none', borderTop: '1px solid var(--border-subtle)', margin: '0 0 20px' }} />

        {/* Bottom bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: "'DM Mono', monospace" }}>
            Copyright © 2025 VendeMais
          </span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: "'DM Mono', monospace" }}>
            Créditos do design ao <a href="https://www.figma.com/design/mBr4FOZ5kgnZjqy04dHxrX/Panto---Furniture-Landing-Page-Design--Community-?node-id=131-1408&p=f&t=kgHoqVNBQWL3XnbH-0" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }} >
                Figma Community <ExternalLink size={14} style={{ display: 'inline-block', verticalAlign: 'middle'}} />
            </a> 
          </span>
          <div style={{ display: 'flex', gap: 28 }}>
            {['Termos de Uso', 'Política de Privacidade'].map((item) => (
              <Link key={item} href="#" style={{
                fontSize: '0.85rem', color: 'var(--text-secondary)',
                fontWeight: 500, textDecoration: 'none',
              }}>
                {item}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}