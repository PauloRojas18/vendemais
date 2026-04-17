# 🛋️ VendeMais

> E-commerce de móveis moderno, construído com Next.js 16 e React 19 — focado em design limpo, navegação fluida e experiência de compra sem atrito.

---

## 📸 Visão Geral

O **VendeMais** é uma plataforma de e-commerce especializada em mobília, voltada para famílias e empresas que buscam móveis com qualidade, estilo e preço justo. A plataforma conta com catálogo filtrável por categoria, landing page institucional com seções de missão e visão, e sistema de autenticação.

---

## 🚀 Stack

| Tecnologia | Versão |
|---|---|
| Next.js | 16.2.3 |
| React | 19.2.4 |
| TypeScript | ^5 |
| Tailwind CSS | ^4 |
| Zustand | ^5 |
| React Hook Form | ^7 |
| Zod | ^4 |
| Axios | ^1.15 |
| Lucide React | ^1.8 |

---

## ✨ Funcionalidades

- **Landing page** com hero section, barra de pesquisa e gradiente dinâmico
- **Catálogo de produtos** com filtro interativo por categoria (Consoles, Mesas, Sofás, Cadeiras)
- **Seção institucional** com Missão e Visão da empresa
- **Seção "Por que nos escolher?"** com destaques de entrega, garantia e suporte 24/7
- **Navbar responsiva** com efeito blur ao rolar a página
- **Página de login** integrada ao fluxo de autenticação

---

## 📁 Estrutura do Projeto

```
vendemais/
├── public/
│   ├── logo.png
│   ├── vector.png
│   └── produtos/          # Imagens dos produtos
├── src/
│   ├── app/
│   │   ├── globals.css    # Design system via CSS variables
│   │   ├── layout.tsx
│   │   ├── page.tsx       # Landing page principal
│   │   └── login/
│   │       └── page.tsx
│   └── components/
│       └── Navbar.tsx
```

---

## 🎨 Design System

O projeto utiliza um sistema de design baseado em **CSS Variables**, facilitando a manutenção de temas e consistência visual:

```css
--primary: #f28900;        /* Laranja principal */
--bg-primary: #FFFFFF;
--text-secondary: #0a0a10;
--nav-bg-scrolled: rgba(238,238,244,0.96);
```

Tipografia com **Inter** como fonte base e **DM Mono** para elementos descritivos.

---

## 👨‍💻 Autor

Desenvolvido por **Paulo Rojas**

- Portfólio: [rojasdev.vercel.app](https://rojasdev.vercel.app)
- GitHub: [@PauloRojas18](https://github.com/PauloRojas18)
- Email: paulootaviogalala@gmail.com
