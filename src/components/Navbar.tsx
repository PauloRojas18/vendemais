'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Check, ChevronDown, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '/Shop', label: 'Branding' },
  { href: '/Sobre', label: 'Campanhas' },
  { href: '/Contato', label: 'Email Marketing' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [opcaoAberto, setOpcaoAberto] = useState(false)
  const [form, setForm] = useState({ opcao2: '' })
  const opcaoRef = useRef<HTMLDivElement>(null)

  const alternativas = ['Alternativa 1', 'Alternativa 2', 'Alternativa 3']

  function selecionarAlternativa(alternativa: string) {
    setForm({ opcao2: alternativa })
    setOpcaoAberto(false)
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpcaoAberto(false)
  }, [pathname])

  const isHome = pathname === '/'
  const solid = scrolled || !isHome
  const textColor = solid ? 'var(--text-secondary)' : '#ffffff'

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 48px', height: 64,
        transition: 'background 0.4s, backdrop-filter 0.4s, border-color 0.4s, color 0.4s',
        background: 'transparent',
        backdropFilter: solid ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: solid ? 'blur(16px)' : 'none',
        borderBottom: solid ? '1px solid var(--nav-border)' : 'none',
        boxSizing: 'border-box',
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
          <span style={{ fontWeight: 700, fontSize: 17, color: textColor, letterSpacing: -0.3, }}>
            VendeMais
          </span>
        </Link>

        {/* Nav central — apenas desktop */}
        <div className="nav-desktop-links">
          {/* Dropdown Serviços */}
          <div ref={opcaoRef} style={{ position: 'relative' }}>
            <button
              type="button"
              onClick={() => setOpcaoAberto((v) => !v)}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '6px 14px', borderRadius: 8,
                fontSize: 14, fontWeight: 400,
                color: textColor,
                background: opcaoAberto ? 'var(--nav-link-active-bg)' : 'transparent',
                border: 'none', cursor: 'pointer', transition: 'all 0.15s, color 0.4s',
              }}
            >
              {form.opcao2 || 'Serviços'}
              <ChevronDown
                size={14}
                style={{ transition: 'transform 0.2s, color 0.4s', transform: opcaoAberto ? 'rotate(180deg)' : 'rotate(0deg)', color: textColor }}
              />
            </button>

            {opcaoAberto && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 8px)', left: 0,
                minWidth: 180, zIndex: 200,
                background: 'var(--card)',
                backdropFilter: 'blur(16px)',
                border: '1px solid var(--nav-border)',
                borderRadius: 10,
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                padding: 6,
              }}>
                {alternativas.map((alternativa) => {
                  const selecionado = form.opcao2 === alternativa
                  return (
                    <button
                      key={alternativa}
                      type="button"
                      onClick={() => selecionarAlternativa(alternativa)}
                      style={{
                        width: '100%', display: 'flex', alignItems: 'center', gap: 8,
                        padding: '8px 12px', borderRadius: 6,
                        background: selecionado ? 'var(--surface)' : 'none',
                        border: 'none', cursor: 'pointer',
                        color: 'var(--text-secondary)', fontSize: 14,
                        fontWeight: selecionado ? 500 : 400, textAlign: 'left',
                      }}
                      onMouseEnter={(e) => { if (!selecionado) e.currentTarget.style.background = 'var(--surface)' }}
                      onMouseLeave={(e) => { if (!selecionado) e.currentTarget.style.background = 'none' }}
                    >
                      <span style={{ width: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {selecionado && <Check size={12} style={{ color: 'var(--primary)' }} />}
                      </span>
                      {alternativa}
                    </button>
                  )
                })}
              </div>
            )}
          </div>

          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link key={href} href={href} style={{
                padding: '6px 14px', borderRadius: 8,
                fontSize: 14, fontWeight: active ? 600 : 400,
                color: textColor,
                background: active ? 'var(--nav-link-active-bg)' : 'transparent',
                textDecoration: 'none', transition: 'all 0.15s, color 0.4s', letterSpacing: 0.1,
              }}>
                {label}
              </Link>
            )
          })}
        </div>

        {/* Direita */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <Link href="/login" style={{
            display: 'flex', alignItems: 'center', gap: 6,
            background: 'var(--primary)', color: '#fff',
            borderRadius: 6, padding: '0.45rem 1rem',
            fontWeight: 'bold', fontSize: '0.8rem',
            letterSpacing: '0.04em', textDecoration: 'none', cursor: 'pointer',
          }}>
            Conectar-se
          </Link>

          {/* Hambúrguer — apenas mobile */}
          <button
            className="nav-hamburger"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileOpen
              ? <X size={22} color={textColor} />
              : <Menu size={22} color={textColor} />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      {mobileOpen && (
        <div className="mobile-nav-menu">
          {/* Serviços dropdown mobile */}
          <div>
            <button
              type="button"
              onClick={() => setOpcaoAberto((v) => !v)}
              style={{
                width: '100%', display: 'flex', justifyContent: 'space-between',
                alignItems: 'center', padding: '12px 0',
                background: 'none', border: 'none',
                fontSize: 15, fontWeight: 500, color: 'var(--text-secondary)',
                cursor: 'pointer', borderBottom: '1px solid var(--border-subtle)',
              }}
            >
              {form.opcao2 || 'Serviços'}
              <ChevronDown
                size={16}
                style={{ transform: opcaoAberto ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
              />
            </button>
            {opcaoAberto && (
              <div style={{ paddingLeft: 16, paddingBottom: 4 }}>
                {alternativas.map((a) => (
                  <button
                    key={a}
                    type="button"
                    onClick={() => { selecionarAlternativa(a); setMobileOpen(false) }}
                    style={{
                      display: 'block', width: '100%', textAlign: 'left',
                      padding: '9px 0', background: 'none', border: 'none',
                      fontSize: 14, cursor: 'pointer',
                      color: form.opcao2 === a ? 'var(--primary)' : 'var(--text-secondary)',
                      fontWeight: form.opcao2 === a ? 600 : 400,
                    }}
                  >
                    {a}
                  </button>
                ))}
              </div>
            )}
          </div>

          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="mobile-nav-link"
              style={{ fontWeight: pathname === href ? 600 : 500, color: pathname === href ? 'var(--primary)' : 'var(--text-secondary)' }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}