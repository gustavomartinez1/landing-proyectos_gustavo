# Security — Veltrux Portfolio

## Security Headers

| Header | Value | Purpose |
|--------|-------|---------|
| `X-Frame-Options` | `DENY` | Prevents clickjacking — page cannot be embedded in iframes |
| `X-Content-Type-Options` | `nosniff` | Blocks MIME-type sniffing attacks |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Limits referrer info sent to external origins |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | Blocks access to sensitive device APIs |
| `Content-Security-Policy` | See below | Restricts resource loading to trusted sources |
| `X-DNS-Prefetch-Control` | `on` | Enables DNS prefetching for performance |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` | Forces HTTPS for 2 years, all subdomains |

## Content Security Policy (CSP)

```
default-src 'self'
script-src 'self' 'unsafe-inline' 'unsafe-eval'
style-src 'self' 'unsafe-inline'
img-src 'self' data: https: blob:
font-src 'self' data:
connect-src 'self'
frame-ancestors 'none'
base-uri 'self'
form-action 'self'
```

### CSP Directives Explained

- **`default-src 'self'`** — Fallback: only load from same origin
- **`script-src 'self' 'unsafe-inline' 'unsafe-eval'`** — Allows inline scripts and eval (needed for Next.js runtime). **Tighten in production** if possible by using nonces.
- **`style-src 'self' 'unsafe-inline'`** — Allows inline styles (required by Next.js and Tailwind)
- **`img-src 'self' data: https: blob:`** — Allows images from any HTTPS source, data URIs, and blobs
- **`font-src 'self' data:`** — Fonts only from same origin or data URIs
- **`connect-src 'self'`** — Only allow fetch/XHR to same origin (no external API calls)
- **`frame-ancestors 'none'`** — No embedding in iframes (defense in depth with X-Frame-Options)
- **`base-uri 'self'`** — Prevents `<base>` tag injection
- **`form-action 'self'`** — Forms can only submit to same origin

## How Headers Are Applied

- **`next.config.ts`** — Contains `headers()` for documentation and future server deployments
- **`public/_headers`** — **Actual source of truth** for Cloudflare Pages static export. Next.js `output: 'export'` does not apply custom headers at build time, so Cloudflare Pages reads this file directly.

## Security Checklist

### Always
- [ ] `X-Frame-Options: DENY` present
- [ ] `X-Content-Type-Options: nosniff` present
- [ ] `Strict-Transport-Security` configured with `includeSubDomains`
- [ ] `Permissions-Policy` blocks camera, microphone, geolocation
- [ ] No secrets or API keys in client-side code
- [ ] No `service_role` keys exposed
- [ ] Dependencies audited (`npm audit` clean)

### When Adding Integrations
- [ ] **Analytics** (GA4, Plausible, etc.): Add domain to `script-src` and `connect-src`
- [ ] **CDN images**: Add CDN domain to `img-src`
- [ ] **External fonts** (Google Fonts): Add `fonts.googleapis.com` and `fonts.gstatic.com` to `style-src` and `font-src`
- [ ] **Contact forms**: Add form endpoint to `form-action` and `connect-src`
- [ ] **Social embeds**: Add domains to `frame-src` and `script-src`
- [ ] **Webhooks/APIs**: Add backend domain to `connect-src`

### Before Deploy
- [ ] Run `npm audit` — fix HIGH/CRITICAL
- [ ] Verify `_headers` file exists in `out/` after build
- [ ] Test headers with `curl -I https://<domain>` or browser dev tools
- [ ] Run Lighthouse security audit
- [ ] Review CSP in browser console for blocked resources

## Future Hardening

1. **Remove `'unsafe-inline'` and `'unsafe-eval'`** from `script-src` by using CSP nonces
2. **Add `report-uri`** or `report-to` to CSP for violation reporting
3. **Add `Cross-Origin-Opener-Policy: same-origin`** for additional isolation
4. **Add `Cross-Origin-Resource-Policy: same-origin`** to prevent cross-origin reads
5. **Add `Cross-Origin-Embedder-Policy: require-corp`** for COOP/COEP isolation
6. **Subresource Integrity (SRI)** hashes on any external `<script>` or `<link>` tags
