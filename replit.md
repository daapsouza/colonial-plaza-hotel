# Colonial Plaza Hotel - Website Moderno

## Visão Geral
Site moderno e responsivo para o Colonial Plaza Hotel, localizado em Pindamonhangaba, SP, entre a Serra da Mantiqueira e Serra do Mar. O site apresenta as acomodações, gastronomia, áreas de lazer, espaços para eventos e informações de contato do hotel.

## Arquitetura

### Frontend (React + TypeScript)
- **Framework:** React com Vite
- **Estilização:** Tailwind CSS com tema customizado (cores quentes/terra)
- **Componentes UI:** Shadcn/UI
- **Animações:** Framer Motion
- **Roteamento:** Wouter
- **Formulários:** React Hook Form + Zod validation

### Backend (Node.js + Express)
- **Server:** Express.js
- **Storage:** In-memory storage (MemStorage)
- **API:** REST endpoints para formulário de contato

## Estrutura de Arquivos

```
client/src/
├── components/
│   ├── ui/                    # Componentes Shadcn
│   ├── about-section.tsx      # Seção "O Hotel"
│   ├── accommodations-section.tsx  # Acomodações
│   ├── contact-section.tsx    # Formulário de contato
│   ├── cta-section.tsx        # Call-to-action
│   ├── events-section.tsx     # Eventos
│   ├── footer.tsx             # Rodapé
│   ├── gallery-section.tsx    # Galeria com lightbox
│   ├── gastronomy-section.tsx # Gastronomia
│   ├── hero-section.tsx       # Hero banner
│   ├── leisure-section.tsx    # Áreas de lazer
│   ├── navigation.tsx         # Navegação responsiva
│   ├── theme-provider.tsx     # Dark/Light mode
│   └── theme-toggle.tsx       # Botão toggle tema
├── pages/
│   ├── home.tsx               # Página principal
│   └── not-found.tsx          # 404
└── App.tsx                    # Root component

server/
├── routes.ts                  # API endpoints
├── storage.ts                 # Data storage
└── index.ts                   # Server entry

shared/
└── schema.ts                  # TypeScript types + Zod schemas
```

## API Endpoints

### POST /api/contact
Envia mensagem de contato.

**Request Body:**
```json
{
  "name": "string (min 2 chars)",
  "email": "string (valid email)",
  "phone": "string (optional)",
  "message": "string (min 10 chars)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Mensagem enviada com sucesso!",
  "id": "uuid"
}
```

## Features

1. **Navegação Responsiva** - Header fixo com transição de transparente para sólido no scroll
2. **Hero Section** - Imagem em tela cheia com animação Ken Burns
3. **Seções Temáticas** - Hotel, Acomodações, Gastronomia, Lazer, Eventos
4. **Galeria Interativa** - Grid com lightbox para visualização ampliada
5. **Formulário de Contato** - Validação em tempo real com feedback visual
6. **Dark Mode** - Toggle entre tema claro e escuro
7. **Mobile-First** - Design totalmente responsivo

## Design System

- **Fonte Principal:** Playfair Display (serif, headings)
- **Fonte Secundária:** Inter (sans-serif, body)
- **Cores Primárias:** Tons terrosos (marrom/dourado)
- **Cores de Destaque:** Verde (accent)

## Comandos

```bash
npm run dev     # Inicia servidor de desenvolvimento
npm run build   # Build para produção
```

## Mudanças Recentes

- **09/12/2024:** Criação inicial do site moderno
  - Implementação completa do frontend com todas as seções
  - Backend com API de contato
  - Imagens geradas por IA para o hotel
  - Suporte a dark mode
  - Design responsivo mobile-first
