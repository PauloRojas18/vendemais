'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Check, ChevronDown } from 'lucide-react'

const NAV_LINKS = [
  { href: '/Shop', label: 'Loja' },
  { href: '/Sobre', label: 'Sobre-Nós' },
  { href: '/Contato', label: 'Contate-Nos' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  const [opcaoAberto, setOpcaoAberto] = useState(false)
  const [form, setForm] = useState({ opcao2: '' })
  const opcaoRef = useRef<HTMLDivElement>(null)

  const alternativas = ['Alternativa 1', 'Alternativa 2', 'Alternativa 3']

  function selecionarAlternativa(alternativa: string) {
    setForm({ opcao2: alternativa })
    setOpcaoAberto(false)
  }

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fecha menu ao navegar
  useEffect(() => {
    // sem mobile menu, mas mantido por consistência
  }, [pathname])

  const isHome = pathname === '/home'
  const solid = scrolled || !isHome

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 48px', height: 64,
      transition: 'background 0.4s, backdrop-filter 0.4s, border-color 0.4s',
      background: 'transparent',
      backdropFilter: solid ? 'blur(16px)' : 'none',
      borderBottom: solid ? '1px solid var(--nav-border)' : 'none',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
        <Link href="/home" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginRight: 24 }}>
          <span style={{ fontWeight: 700, fontSize: 17, color: 'var(--text-primary)', letterSpacing: -0.3 }}>VendeMais</span>
        </Link>

        {/* Nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>

            <div className="flex flex-col gap-1.5">
                <div ref={opcaoRef} className="relative">
                <button
                    type="button"
                    onClick={() => setOpcaoAberto((v) => !v)}
                    className="w-full flex items-center gap-2.5 pl-10 pr-4 py-3 text-sm text-left outline-none transition-all"
                    style={{
                    background: "var(--background)",
                    border: `1px solid ${opcaoAberto ? "var(--primary)" : "var(--border)"}`,
                    color: form.opcao2 ? "var(--foreground)" : "var(--muted-foreground)",
                    borderRadius: "var(--radius)",
                    cursor: "pointer",
                    }}
                >
                    <svg
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                    width="15" height="15" viewBox="0 0 24 24"
                    fill="none" stroke="var(--muted-foreground)" strokeWidth="2"
                    >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4" />
                    </svg>
                    <span className="flex-1">
                    {form.opcao2 || "Selecione uma opção..."}
                    </span>
                    <ChevronDown
                    className="h-4 w-4 flex-shrink-0 transition-transform duration-200"
                    style={{
                        color: "var(--muted-foreground)",
                        transform: opcaoAberto ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                    />
                </button>

                {opcaoAberto && (
                    <div
                    className="absolute top-full left-0 right-0 z-20 mt-1"
                    style={{
                        background: "color-mix(in srgb, var(--card) 96%, transparent)",
                        backdropFilter: "blur(16px)",
                        WebkitBackdropFilter: "blur(16px)",
                        border: "1px solid var(--border)",
                        borderRadius: "var(--radius)",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                        padding: "6px",
                    }}
                    >
                    {alternativas.map((alternativa) => {
                        const selecionado = form.opcao2 === alternativa;
                        return (
                        <button
                            key={alternativa}
                            type="button"
                            onClick={() => selecionarAlternativa(alternativa)}
                            className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm text-left rounded-md transition-colors"
                            style={{
                            background: selecionado ? "var(--secondary)" : "none",
                            border: "none",
                            cursor: "pointer",
                            color: "var(--foreground)",
                            fontWeight: selecionado ? 500 : 400,
                            }}
                            onMouseEnter={(e) => {
                            if (!selecionado) e.currentTarget.style.background = "var(--secondary)";
                            }}
                            onMouseLeave={(e) => {
                            if (!selecionado) e.currentTarget.style.background = "none";
                            }}
                        >
                            <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center">
                            {selecionado && <Check className="h-3.5 w-3.5" style={{ color: "var(--primary)" }} />}
                            </span>
                            {alternativa}
                        </button>
                        );
                    })}
                    </div>
                )}
                </div>
            </div>

          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link key={href} href={href} style={{
                padding: '6px 14px', borderRadius: 8,
                fontSize: 14, fontWeight: active ? 600 : 400,
                color: 'var(--text-primary)',
                background: active ? 'var(--nav-link-active-bg)' : 'transparent',
                textDecoration: 'none', transition: 'all 0.15s', letterSpacing: 0.1,
              }}>{label}</Link>
            )
          })}
        </div>
      </div>


      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      <Link href="/login" style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        background: 'var(--primary)',
        color: '#fff',
        borderRadius: 6,
        padding: '0.45rem 1rem',
        fontWeight: 'bold',
        fontSize: '0.8rem',
        letterSpacing: '0.04em',
        textDecoration: 'none',
        cursor: 'pointer',
      }}>
        Conectar-se
      </Link>
      </div>
    </nav>
  )
}