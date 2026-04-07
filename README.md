# Veltrux Portfolio

Portfolio personal de Gustavo Martínez — construido con Next.js 14 App Router y SSG, desplegado en Cloudflare Pages.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4
- **Animaciones**: GSAP + Framer Motion
- **Build**: Static Site Generation (`output: 'export'`)
- **Deploy**: Cloudflare Pages

## 📋 Requisitos

- Node.js 20+
- npm

## 🛠️ Desarrollo Local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Abrir http://localhost:3000
```

## 🏗️ Build

```bash
npm run build
```

El output se genera en el directorio `out/` como archivos estáticos.

## 🌐 Deploy

### Automático (CI/CD)

Cada push a `main` dispara el workflow de GitHub Actions:

1. Checkout → Install → Lint → Build
2. Deploy a Cloudflare Pages via `wrangler-action`

### Manual con Wrangler

```bash
# Instalar wrangler si no lo tienes
npm install -g wrangler

# Login a Cloudflare
npx wrangler login

# Deploy
npx wrangler pages deploy ./out --project-name=veltrux-portfolio
```

## ⚙️ Configuración

### Secrets de GitHub (Settings → Secrets and variables → Actions)

| Secret | Descripción |
|--------|-------------|
| `CLOUDFLARE_API_TOKEN` | API token de Cloudflare con permisos de Pages |
| `CLOUDFLARE_ACCOUNT_ID` | ID de la cuenta de Cloudflare |

### Variables de GitHub (Settings → Secrets and variables → Actions → Variables)

| Variable | Valor |
|----------|-------|
| `CF_PROJECT_NAME` | `veltrux-portfolio` |

## 📁 Estructura

```
├── .github/workflows/    # CI/CD (GitHub Actions)
├── public/               # Assets estáticos
├── src/
│   ├── app/              # Next.js App Router (pages, layout)
│   ├── features/         # Feature modules (about, contact, hero, projects)
│   ├── shared/           # Shared utilities, hooks, UI components
│   └── widgets/          # Page-level widget compositions
├── out/                  # Build output (static files)
├── wrangler.toml         # Cloudflare Pages config
├── next.config.ts        # Next.js config (SSG export)
└── package.json
```

## 🔒 Security Headers

El proyecto incluye headers de seguridad configurados en `next.config.ts`:
- Content-Security-Policy
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Strict-Transport-Security
- Referrer-Policy
- Permissions-Policy

## 📝 Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build estático |
| `npm run start` | Servidor de producción (no aplicable en SSG) |
| `npm run lint` | ESLint |

## 📄 License

Private — Todos los derechos reservados.
