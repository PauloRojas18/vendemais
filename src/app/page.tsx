'use client';

import Image from "next/image";
import { ArrowRight, Truck, ShieldCheck, Headphones, User } from "lucide-react";
import { useState } from "react";

const sec_info = [
  {
    icon: <Truck size={28} />,
    title: 'Entrega com Cuidado',
    description: 'Entregamos seus móveis com segurança em todo o Brasil. Equipe especializada em montagem disponível na sua cidade.',
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'Compra Garantida',
    description: 'Seus dados e pagamentos protegidos com criptografia de ponta. Garantia de reembolso e troca em até 30 dias.',
  },
  {
    icon: <Headphones size={28} />,
    title: 'Suporte 24/7',
    description: 'Nossa equipe está disponível a qualquer hora para tirar dúvidas sobre produtos, prazos ou assistência técnica.',
  },
]

const produtosCat = [
  { name: 'Cama', label: 'Camas' },
  { name: 'Mesas', label: 'Mesas' },
  { name: 'Sofá', label: 'Sofás' },
  { name: 'Cadeira', label: 'Cadeiras' },
]

const produtos = [
  { id: 1, name: 'PlayStation 5', price: 'R$ 3.999,90', category: 'Cama', image: '/produtos/ps5.png' },
  { id: 2, name: 'Cadeira Gamer Pro', price: 'R$ 1.249,90', category: 'Cadeira', image: '/produtos/cadeira1.png' },
  { id: 3, name: 'Cadeira Escritório Slim', price: 'R$ 749,90', category: 'Cadeira', image: '/produtos/cadeira2.png' },
  { id: 4, name: 'Cadeira Ergonômica', price: 'R$ 999,90', category: 'Cadeira', image: '/produtos/cadeira3.png' },
  { id: 5, name: 'Cadeira Mesh Plus', price: 'R$ 849,90', category: 'Cadeira', image: '/produtos/cadeira4.png' },
  { id: 6, name: 'Mesa Home Office', price: 'R$ 629,90', category: 'Mesas', image: '/produtos/ps5.png' },
  { id: 7, name: 'Sofá 3 Lugares', price: 'R$ 2.199,90', category: 'Sofá', image: '/produtos/ps5.png' },
]

const feedbacks = [
  {
    id: 1,
    name: 'Bang Upin',
    role: 'Pedagang Asongan',
    avatar: <User size={14} />,
    descricao: 'Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal',
    image: '/unsplash__HqHX3LBN18.png',
    estrelas: 4,
  },
  {
    id: 2,
    name: 'Ibuk Sukijan',
    role: 'Ibu Rumah Tangga',
    avatar: <User size={14} />,
    descricao: 'Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah',
    image: '/unsplash_h2_3dL9yLpU.png',
    estrelas: 4,
  },
  {
    id: 3,
    name: 'João Silva',
    role: 'Designer de Interiores',
    avatar: <User size={14} />,
    descricao: 'Produtos de altíssima qualidade, entrega rápida e atendimento excelente. Super recomendo!',
    image: '/unsplash_JaXs8Tk5Iww.png',
    estrelas: 5,
  },
]

export default function Home() {
  const [categoria, setCategoria] = useState('Cama');
  const filtered = produtos.filter(p => p.category === categoria);

  return (
    <div style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src="/vector.png"
          alt="Hero Background"
          height={960}
          width={1920}
          priority
          style={{ objectFit: 'cover', objectPosition: 'center', width: '100%' }}
        />

        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
          <div
            className="hero-content-inner"
            style={{
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
              alignItems: 'center', height: '100%', color: '#fff', textAlign: 'center',
              gap: 20, padding: '10rem 1rem', maxWidth: 1200, margin: '0 auto',
              boxSizing: 'border-box',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
              <h1 className="hero-title" style={{ fontSize: '4rem', fontWeight: 'bold', margin: 0 }}>
                Móveis que transformam
              </h1>
              <h1 className="hero-title" style={{ fontSize: '4rem', fontWeight: 'bold', margin: 0 }}>
                o seu espaço
              </h1>
            </div>
            <p
              className="hero-subtitle"
              style={{ fontSize: '1.25rem', maxWidth: 600, fontFamily: "'DM Mono', monospace", margin: 0 }}
            >
              Sofás, mesas, cadeiras e muito mais — com design moderno, qualidade garantida e entrega para todo o Brasil.
            </p>
            <div
              className="hero-search-bar"
              style={{
                position: 'relative', zIndex: 50,
                display: 'flex', alignItems: 'center',
                background: 'transparent',
                backdropFilter: 'blur(16px)',
                borderRadius: 30,
                border: '1px solid rgba(255,255,255,0.3)',
                padding: '0.3rem 0.3rem 0.3rem 1.5rem',
                gap: 40,
              }}
            >
              <input
                type="text"
                placeholder="Pesquisar sofás, mesas, cadeiras..."
                style={{
                  width: 320, flex: 1,
                  background: 'transparent', border: 'none', outline: 'none',
                  color: '#fff', fontWeight: 400, fontSize: '1rem',
                  letterSpacing: '0.04em', cursor: 'text',
                }}
              />
              <button style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 34, height: 34, flexShrink: 0,
                background: '#f28900', borderRadius: '50%',
                border: 'none', cursor: 'pointer', color: '#fff',
              }}>
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="11" cy="11" r="8" />
                  <path strokeLinecap="round" d="m21 21-4.35-4.35" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'var(--hero-grad-bottom)' }} />
      </section>

      {/* ─── POR QUE NOS ESCOLHER ─────────────────────────────── */}
      <section
        className="content-section"
        style={{ maxWidth: 1280, margin: '0 auto', padding: '3.5rem 5rem', color: 'var(--bg-primary)' }}
      >
        <div className="why-us-grid">
          <div style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            background: 'var(--bg-secondary)', padding: '1.75rem 1.5rem',
            borderRadius: 12, minWidth: 200, flexShrink: 0, gap: 6,
          }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--text-secondary)', fontWeight: 'bold', margin: 0 }}>Por que</h2>
            <h2 style={{ fontSize: '2rem', color: 'var(--text-secondary)', fontWeight: 'bold', margin: 0 }}>nos escolher?</h2>
          </div>

          {sec_info.map((item, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 20, flex: 1, minWidth: 200 }}>
              <div style={{ color: 'var(--primary)', marginBottom: 4 }}>{item.icon}</div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', fontWeight: 'bold', margin: 0 }}>{item.title}</h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontFamily: "'DM Mono', monospace", margin: 0 }}>{item.description}</p>
              <button style={{
                alignSelf: 'flex-start', marginTop: 4, background: 'var(--primary)',
                color: '#fff', border: 'none', borderRadius: 6,
                padding: '0.45rem 1rem', fontWeight: 600, fontSize: '0.8rem',
                cursor: 'pointer', letterSpacing: '0.04em',
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                saiba mais <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PRODUTOS MAIS VENDIDOS ───────────────────────────── */}
      <section
        className="content-section"
        style={{ maxWidth: 1280, margin: '0 auto', padding: '3.5rem 5rem', color: 'var(--text-secondary)', background: 'var(--bg-secundary)' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '3rem 1rem', gap: 30, background: 'var(--bg-secundary)' }}>
          <h2 style={{ fontSize: '2.3rem', fontWeight: 'bold', margin: 0 }}>Produtos mais vendidos</h2>

          {/* Filtros */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(0,0,0, 0.05)', backdropFilter: 'blur(16px)',
            borderRadius: 30, border: '1px solid rgba(255,255,255,0.3)',
            padding: '0.3rem 0.3rem', gap: 10, flexWrap: 'wrap',
          }}>
            {produtosCat.map((cat) => {
              const selecionado = cat.name === categoria;
              return (
                <button key={cat.name} onClick={() => setCategoria(cat.name)} style={{
                  padding: '6px 14px', borderRadius: 30,
                  fontSize: 14, fontWeight: 600,
                  color: selecionado ? 'var(--primary)' : 'var(--text-secondary)',
                  background: selecionado ? 'var(--bg)' : 'transparent',
                  border: 'none', cursor: 'pointer',
                  transition: 'all 0.15s', letterSpacing: 0.1,
                }}>
                  {cat.label}
                </button>
              )
            })}
          </div>

          {/* Grid de produtos — scroll horizontal no mobile */}
          <div className="products-scroll" style={{ marginTop: 20 }}>
            {filtered.map((produto) => (
              <div key={produto.id} style={{
                width: 240, minWidth: 220,
                borderRadius: 20, background: '#f8f8f8',
                overflow: 'hidden', display: 'flex',
                flexDirection: 'column', justifyContent: 'space-between',
                flexShrink: 0,
              }}>
                <div style={{
                  height: 180, display: 'flex',
                  alignItems: 'center', justifyContent: 'center', background: '#f1f1f1',
                }}>
                  <Image src={produto.image} alt={produto.name} width={160} height={160} style={{ objectFit: 'contain' }} />
                </div>
                <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <span style={{ fontSize: 12, color: '#888' }}>{produto.category}</span>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1a2b3c', margin: 0 }}>{produto.name}</h3>
                  <div style={{ color: '#f5a623', fontSize: 14 }}>★★★★☆</div>
                  <div style={{ marginTop: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 700, fontSize: 18, color: '#1a2b3c' }}>{produto.price}</span>
                    <button style={{
                      width: 40, height: 40, borderRadius: '50%',
                      background: '#0f1f3d', color: '#fff',
                      border: 'none', fontSize: 20, cursor: 'pointer',
                    }}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 30, display: 'flex', justifyContent: 'center' }}>
            <button style={{
              background: 'var(--primary)', color: '#fff', border: 'none',
              borderRadius: 6, padding: '0.45rem 1rem',
              fontWeight: 600, fontSize: '0.8rem', cursor: 'pointer',
              letterSpacing: '0.04em', display: 'flex', alignItems: 'center', gap: 6,
            }}>
              Ver todos <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ─── SOBRE NÓS ────────────────────────────────────────── */}
      <section
        className="content-section"
        style={{ maxWidth: 1280, margin: '0 auto', padding: '3.5rem 5rem', color: 'var(--text-secondary)', background: 'var(--bg-primary)' }}
      >

        {/* Nossa Missão */}
        <div className="sobre-row">
          <div className="sobre-image-block">
            {/* Painéis decorativos — escondidos no mobile via CSS */}
            <div
              className="sobre-panel-back"
              style={{
                position: 'absolute', top: 40, left: 0,
                background: 'var(--bg-secundary)', borderRadius: 12,
                height: 340, width: 300, zIndex: 5,
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              }}
            />
            <div
              className="sobre-panel-back"
              style={{
                position: 'absolute', top: 0, left: 80,
                background: 'var(--bg-secundary)', borderRadius: 12,
                height: 300, width: 340, zIndex: 10,
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              }}
            />
            <Image
              src="/Rectangle 1446.png"
              alt="Nossa Missão"
              width={400} height={400}
              style={{ objectFit: 'cover', borderRadius: 12, zIndex: 15, position: 'absolute', top: 40, left: 20, maxWidth: '100%' }}
            />
          </div>

          <div style={{ maxWidth: 500, flex: 1 }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--primary)', fontFamily: "'DM Mono', monospace", margin: 0 }}>Sobre nós</h3>
            <h1 style={{ fontSize: '2.3rem', fontWeight: 'bold', margin: '8px 0 0' }}>Nossa Missão</h1>
            <p style={{ marginTop: 20, fontSize: '1rem', color: 'var(--text-secondary)', fontFamily: "'DM Mono', monospace" }}>
              Nascemos para levar ambientes bem decorados a cada lar brasileiro. Ajudamos famílias e empresas a encontrar móveis com qualidade, estilo e preço justo — direto na tela, sem complicação.
            </p>
            <button style={{
              marginTop: 20, background: 'var(--primary)', color: '#fff',
              border: 'none', borderRadius: 6, padding: '0.45rem 1rem',
              fontWeight: 600, fontSize: '0.8rem', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              Conheça nossa história <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Nossa Visão */}
        <div className="sobre-row-reverse">
          <div style={{ maxWidth: 500, flex: 1 }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--primary)', fontFamily: "'DM Mono', monospace", margin: 0 }}>Sobre nós</h3>
            <h1 style={{ fontSize: '2.3rem', fontWeight: 'bold', margin: '8px 0 0' }}>Nossa Visão</h1>
            <p style={{ marginTop: 20, fontSize: '1rem', color: 'var(--text-secondary)', fontFamily: "'DM Mono', monospace" }}>
              Ser a maior referência em móveis online no Brasil, unindo design acessível, logística eficiente e atendimento humanizado para que cada cliente encontre o ambiente perfeito para viver e trabalhar.
            </p>
            <button style={{
              marginTop: 20, background: 'var(--primary)', color: '#fff',
              border: 'none', borderRadius: 6, padding: '0.45rem 1rem',
              fontWeight: 600, fontSize: '0.8rem', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              Saiba mais <ArrowRight size={16} />
            </button>
          </div>

          <div className="sobre-image-block">
            <div
              className="sobre-panel-back"
              style={{
                position: 'absolute', top: 40, left: 0,
                background: 'var(--bg-secundary)', borderRadius: 12,
                height: 340, width: 300, zIndex: 5,
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              }}
            />
            <div
              className="sobre-panel-back"
              style={{
                position: 'absolute', top: 0, left: 80,
                background: 'var(--bg-secundary)', borderRadius: 12,
                height: 300, width: 340, zIndex: 10,
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              }}
            />
            <div style={{ position: 'relative', top: 40, left: 40, borderRadius: 12, height: 360, width: 340, zIndex: 15 }}>
              <Image
                src="/Rectangle 1446 (1).png" alt="Nossa Visão"
                width={400} height={400}
                style={{ objectFit: 'cover', borderRadius: 12, position: 'absolute', top: -20, left: 40 }}
              />
              <Image
                src="/Group 48095419.png" alt=""
                width={160} height={160}
                style={{ objectFit: 'cover', borderRadius: 12, position: 'absolute', top: 130, left: -130 }}
              />
              <Image
                src="/Group 48095417.png" alt=""
                width={160} height={160}
                style={{ objectFit: 'cover', borderRadius: 12, position: 'absolute', top: -18, left: -130 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEEDBACKS ────────────────────────────────────────── */}
      <section
        className="content-section"
        style={{ maxWidth: 1280, margin: '0 auto', padding: '3.5rem 5rem', background: 'var(--bg-primary)' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40, marginTop: 120, marginBottom: 200 }}>
          <div style={{ textAlign: 'center', lineHeight: 1.2 }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--primary)', margin: 0 }}>Testemunhos</h2>
            <h2 style={{ fontSize: '2.3rem', fontWeight: 'bold', color: 'var(--text-secondary)', margin: '4px 0 0' }}>Nossos Feedbacks</h2>
          </div>

          <div className="feedbacks-scroll">
            {feedbacks.map((f) => (
              <div key={f.id} style={{
                width: 330, minWidth: 280, height: 450,
                borderRadius: 20, overflow: 'hidden',
                position: 'relative', flexShrink: 0,
                background: `url(${f.image})`,
                boxShadow: '0px 20px 25px rgba(242,137,0,0.3)',
                backgroundSize: 'cover', backgroundPosition: 'center',
              }}>
                <div style={{
                  position: 'absolute', bottom: 10, left: '6%', width: '88%',
                  background: 'white', borderRadius: '20px 20px 14px 14px',
                  padding: '40px 20px 24px',
                  boxShadow: '0 -8px 40px rgba(0,0,0,0.1)',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', gap: 6, textAlign: 'center',
                }}>
                  <div style={{
                    position: 'absolute', top: -20, left: '50%', transform: 'translateX(-50%)',
                    background: 'white', width: 46, height: 46,
                    borderRadius: '50%', overflow: 'hidden', border: '4px solid white', flexShrink: 0,
                  }}>
                    <div style={{
                      width: '100%', height: '100%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: '#f0f0f0', color: '#888', borderRadius: '50%',
                    }}>
                      {f.avatar}
                    </div>
                  </div>
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111' }}>{f.name}</span>
                  <span style={{ fontSize: '0.82rem', color: '#999' }}>{f.role}</span>
                  <p style={{ fontSize: 12, color: '#555', fontFamily: "'DM Mono', monospace", lineHeight: 1, marginTop: 6 }}>
                    {f.descricao}
                  </p>
                  <div style={{ display: 'flex', gap: 4, marginTop: 6 }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} style={{ fontSize: 20, color: i < f.estrelas ? '#f59e0b' : '#e5e7eb' }}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}