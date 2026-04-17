'use client';

import Image from "next/image";
import { ArrowRight, Truck, ShieldCheck, Headphones } from "lucide-react";
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
  { name: 'Console', label: 'Consoles' },
  { name: 'Mesas', label: 'Mesas' },
  { name: 'Sofá', label: 'Sofás' },
  { name: 'Cadeira', label: 'Cadeiras' },
]

const produtos = [
  { id: 1, name: 'PlayStation 5', price: 'R$ 3.999,90', category: 'Console', image: '/produtos/ps5.png' },
  { id: 2, name: 'Cadeira Gamer Pro', price: 'R$ 1.249,90', category: 'Cadeira', image: '/produtos/cadeira1.png' },
  { id: 3, name: 'Cadeira Escritório Slim', price: 'R$ 749,90', category: 'Cadeira', image: '/produtos/cadeira2.png' },
  { id: 4, name: 'Cadeira Ergonômica', price: 'R$ 999,90', category: 'Cadeira', image: '/produtos/cadeira3.png' },
  { id: 5, name: 'Cadeira Mesh Plus', price: 'R$ 849,90', category: 'Cadeira', image: '/produtos/cadeira4.png' },
  { id: 6, name: 'Mesa Home Office', price: 'R$ 629,90', category: 'Mesas', image: '/produtos/ps5.png' },
  { id: 7, name: 'Sofá 3 Lugares', price: 'R$ 2.199,90', category: 'Sofá', image: '/produtos/ps5.png' },
]


export default function Home() {
  const [categoria, setCategoria] = useState('Console');

  const filtered = produtos.filter(p => p.category === categoria);

  return (
    <div style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
        <section
          className="hero-section"
          style={{ position: 'relative', overflow: 'hidden'}}
        >
            <Image
              src="/vector.png"
              alt="Hero Background"
              height={960}
              width={1920}
              priority
              style={{ objectFit: 'cover' , objectPosition: 'center' }}
            />

            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', height: '100%', color: '#fff', textAlign: 'center', gap: 20, padding: '10rem 1rem', maxWidth: 1200, margin: '0 auto' }}>
                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
                  <h1 style={{ fontSize: '4rem', fontWeight: 'bold' }}>Móveis que transformam</h1>
                  <h1 style={{ fontSize: '4rem', fontWeight: 'bold' }}>o seu espaço</h1>
                </div>
                <p style={{ fontSize: '1.25rem', maxWidth: 600, fontFamily: "'DM Mono', monospace" }}>Sofás, mesas, cadeiras e muito mais — com design moderno, qualidade garantida e entrega para todo o Brasil.</p>
                <div style={{
                  position: 'relative',
                  zIndex: 50,
                  display: 'flex',
                  alignItems: 'center',
                  background: 'transparent',
                  backdropFilter: 'blur(16px)',
                  borderRadius: 30,
                  border: '1px solid rgba(255,255,255,0.3)',
                  padding: '0.3rem 0.3rem 0.3rem 1.5rem',
                  gap: 40,
                }}>
                  <input
                    type="text"
                    placeholder="Pesquisar sofás, mesas, cadeiras e mais..."
                    style={{
                      width: 320,
                      flex: 1,
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      color: '#fff',
                      fontWeight: 400,
                      fontSize: '1rem',
                      letterSpacing: '0.04em',
                      pointerEvents: 'auto',
                      cursor: 'text',
                    }}
                  />
                  <button style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 34,
                    height: 34,
                    background: '#f28900',
                    borderRadius: '50%',
                    border: 'none',
                    cursor: 'pointer',
                    flexShrink: 0,
                    color: '#fff',
                  }}>
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <circle cx="11" cy="11" r="8"/>
                      <path strokeLinecap="round" d="m21 21-4.35-4.35"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div style={{ position: 'absolute', inset: 0, background: 'var(--hero-grad-bottom)' }} />
        </section>

      {/* ─── POR QUE NOS ESCOLHER ─────────────────────────────────── */}
      <section className="content-section" style={{ minWidth: 1280, margin: '0 auto', padding: '3.5rem 5rem', color: 'var(--bg-primary)' }}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 30 }}>
          <div style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            background: 'var(--bg-secondary)', padding: '1.75rem 1.5rem',
            borderRadius: 12, minWidth: 200, flexShrink: 0, gap: 6,
          }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--text-secondary)', fontWeight: 'bold' }}>Por que</h2>
            <h2 style={{ fontSize: '2rem', color: 'var(--text-secondary)', fontWeight: 'bold' }}>nos escolher?</h2>
          </div>

          {sec_info.map((item, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 20, width: 300 }}>
              <div style={{ color: 'var(--primary)', marginBottom: 4 }}>{item.icon}</div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', fontWeight: 'bold' }}>{item.title}</h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontFamily: "'DM Mono', monospace" }}>{item.description}</p>
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

        <section className="content-section" style={{ minWidth: 1280, margin: '0 auto', padding: '3.5rem 5rem', color: 'var(--text-secondary)', background: 'var(--bg-secundary)' }}>
          <div style={{ display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '3rem 1rem', gap: 30, background: 'var(--bg-secundary)' }}> 
            <h2 style={{ fontSize: '2.3rem', fontWeight: 'bold' }}>Produtos mais vendidos</h2>
            <div style={{
              width: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0,0,0, 0.05)',
                backdropFilter: 'blur(16px)',
                borderRadius: 30,
                border: '1px solid rgba(255,255,255,0.3)',
                padding: '0.3rem 0.3rem',
                gap: 10,
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
                  textDecoration: 'none', transition: 'all 0.15s', letterSpacing: 0.1,
                }}>{cat.label}</button>
              )
            })}
            </div>
            <div style={{
              marginTop: 20,
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              gap: 20,
            }}>
              {filtered.map((produto) => (
                <div key={produto.id} style={{
                  width: 240,
                  borderRadius: 20,
                  background: '#f8f8f8',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                  <div style={{
                    height: 180,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#f1f1f1',
                  }}>
                    <Image
                      src={produto.image}
                      alt={produto.name}
                      width={160}
                      height={160}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>

                  <div style={{
                    padding: 16,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 6,
                  }}>
                    <span style={{ fontSize: 12, color: '#888' }}>
                      {produto.category}
                    </span>

                    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1a2b3c' }}>
                      {produto.name}
                    </h3>

                    <div style={{ color: '#f5a623', fontSize: 14 }}>
                      ★★★★☆
                    </div>

                    <div style={{
                      marginTop: 10,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                      <span style={{ fontWeight: 700, fontSize: 18, color: '#1a2b3c' }}>
                        {produto.price}
                      </span>

                      <button style={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        background: '#0f1f3d',
                        color: '#fff',
                        border: 'none',
                        fontSize: 20,
                        cursor: 'pointer',
                      }}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{ marginTop: 30, display: 'flex', justifyContent: 'center' }}>
            <button style={{
                  alignSelf: 'flex-start',
                  marginTop: 4,
                  background: 'var(--primary)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 6,
                  padding: '0.45rem 1rem',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  letterSpacing: '0.04em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
              }}>
              Ver todos
              <ArrowRight size={16} />
            </button>
            </div>
          </div>
        </section>

        <section className="content-section" style={{ minWidth: 1280, margin: '0 auto', padding: '3.5rem 5rem', color: 'var(--text-secondary)', background: 'var(--bg-primary)' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 60,
          width: '100%',
          marginTop: 120,
        }}>
          <div style={{
            position: 'relative',
            width: 420,
            height: 360,
            flexShrink: 0,
          }}>
            <div style={{
              position: 'absolute',
              top: 40,
              left: 0,
              background: 'var(--secondary)',
              borderRadius: 12,
              height: 340,
              width: 300,
              zIndex: 5,
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            }} />
            <div style={{
              position: 'absolute',
              top: 0,
              left: 80,
              background: 'var(--secondary)',
              borderRadius: 12,
              height: 300,
              width: 340,
              zIndex: 10,
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
            }} />
          </div>

          <div style={{ maxWidth: 500 }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--primary)', fontFamily: "'DM Mono', monospace" }}>Sobre nós</h3>
            <h1 style={{ fontSize: '2.3rem', fontWeight: 'bold' }}>Nossa Missão</h1>
            <p style={{
              marginTop: 20,
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              fontFamily: "'DM Mono', monospace"
            }}>
              Nascemos para levar ambientes bem decorados a cada lar brasileiro. Ajudamos famílias e empresas a encontrar móveis com qualidade, estilo e preço justo — direto na tela, sem complicação.
            </p>
            <button style={{
              marginTop: 20,
              background: 'var(--primary)',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              padding: '0.45rem 1rem',
              fontWeight: 600,
              fontSize: '0.8rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}>
              Conheça nossa história
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 120,
          width: '100%',
          marginTop: 120,
        }}>
          <div style={{ maxWidth: 500 }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--primary)', fontFamily: "'DM Mono', monospace" }}>Sobre nós</h3>
            <h1 style={{ fontSize: '2.3rem', fontWeight: 'bold' }}>Nossa Visão</h1>
            <p style={{
              marginTop: 20,
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              fontFamily: "'DM Mono', monospace"
            }}>
              Ser a maior referência em móveis online no Brasil, unindo design acessível, logística eficiente e atendimento humanizado para que cada cliente encontre o ambiente perfeito para viver e trabalhar.
            </p>
            <button style={{
              marginTop: 20,
              background: 'var(--primary)',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              padding: '0.45rem 1rem',
              fontWeight: 600,
              fontSize: '0.8rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}>
              Saiba mais
              <ArrowRight size={16} />
            </button>
          </div>

          <div style={{
            position: 'relative',
            width: 420,
            height: 360,
            flexShrink: 0,
          }}>
            <div style={{
              position: 'absolute',
              top: 40,
              left: 0,
              background: 'var(--secondary)',
              borderRadius: 12,
              height: 340,
              width: 300,
              zIndex: 5,
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            }} />
            <div style={{
              position: 'absolute',
              top: 0,
              left: 80,
              background: 'var(--secondary)',
              borderRadius: 12,
              height: 300,
              width: 340,
              zIndex: 10,
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
            }} />
          </div>
        </div>
        </section>
    </div>
  );
}