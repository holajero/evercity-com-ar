# EverCity Tucumán Portal

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/holajero/evercity)

A stunning, illustrative real estate portal for EverCity Tucumán showcasing the Terralba development as a flagship case study. This visually immersive platform blends corporate reliability with a human-centric 'sketchbook' aesthetic, serving as a digital brochure and lead generation tool for the premier real estate developer in Tucumán, Argentina.

## Features

- **Illustrative Design System**: Hand-drawn SVG elements, brush-stroke typography (Playfair Display & Montserrat), and organic layouts with 'torn paper' dividers.
- **Homepage**: Storytelling hero with 'sketch-to-reality' animation, company values, and Terralba teaser.
- **Terralba Project Detail**: Interactive master plan map, sketched amenities icons, and location guide.
- **Contact & Leads**: Aesthetic form with office details (Virgen de la Merced 128, San Miguel de Tucumán; Tel: 3816212142; Email: evercitydi@gmail.com) and backend submission via Durable Objects.
- **Responsive & Accessible**: Fluid layouts, micro-interactions, and flawless mobile experience.
- **Lead CRM**: Lightweight inquiry storage using Cloudflare Durable Objects.
- **Performance Optimized**: Server-side rendering, fast loading, and smooth 60fps animations.

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS 3, shadcn/ui, React Router 6, Framer Motion, Lucide React, React Hook Form, Zod, TanStack Query, Sonner
- **Backend**: Hono, Cloudflare Workers, Durable Objects (GlobalDurableObject for persistence)
- **State Management**: Zustand, React Query
- **Utilities**: clsx, tailwind-merge, uuid, date-fns
- **Deployment**: Cloudflare Workers & Pages

## Quick Start

### Prerequisites

- [Bun](https://bun.sh/) (v1.0+)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) (latest)

### Installation

```bash
bun install
```

### Local Development

Start the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The dev server includes hot reload and Cloudflare Workers emulation.

### Build for Production

```bash
bun run build
```

Output is in `dist/`.

### Type Generation

Generate TypeScript types from Worker bindings:

```bash
bun run cf-typegen
```

## Usage

Navigate via React Router:

- `/` - Landing page with Terralba teaser
- `/terralba` - Project showcase (add route in `src/main.tsx`)
- `/contact` - Lead capture form

Submit leads via POST `/api/leads` (integrated with Durable Objects).

Example API response:
```json
{
  "success": true,
  "data": { "id": "uuid", "submittedAt": 1234567890 }
}
```

## Development

### Project Structure

```
├── src/              # React app
│   ├── pages/        # Route components (HomePage.tsx)
│   ├── components/ui # shadcn/ui primitives
│   └── lib/          # API client, utils
├── worker/           # Hono backend
│   ├── user-routes.ts # Add custom routes here
│   └── entities.ts   # Extend for Leads (e.g., LeadEntity)
├── shared/           # Shared types
└── tailwind.config.js # Custom colors (#E31E24, #1D3582, #2E8B57)
```

### Adding Routes (Frontend)

Edit `src/main.tsx`:

```tsx
const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <RouteErrorBoundary /> },
  { path: "/terralba", element: <TerralbaPage />, errorElement: <RouteErrorBoundary /> },
]);
```

### Adding API Routes (Backend)

Extend `worker/user-routes.ts` and `worker/entities.ts`:

```ts
// entities.ts
export class LeadEntity extends IndexedEntity<Lead> { /* ... */ }

// user-routes.ts
app.post('/api/leads', async (c) => {
  const lead = await LeadEntity.create(c.env, formData);
  return ok(c, lead);
});
```

**Do not modify** `worker/index.ts`, `worker/core-utils.ts`, or `wrangler.jsonc`.

### Styling

- Use Tailwind utilities and shadcn/ui components.
- Custom colors in `tailwind.config.js`.
- Root layout: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 lg:py-12`.

## Deployment

Deploy to Cloudflare Workers & Pages:

```bash
bun run deploy
```

This builds the frontend and deploys the Worker.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/holajero/evercity)

**Bindings**: Uses `GlobalDurableObject` (single DO for all entities). No additional config needed.

### Custom Domain

```bash
wrangler pages deploy dist --project-name your-project
wrangler pages domain add yourdomain.com
```

## Contributing

1. Fork the project
2. Create a feature branch (`bun run dev`)
3. Commit changes (`git commit -m 'feat: ...'`)
4. Push and open PR

Lint with `bun run lint`.

## License

MIT. See [LICENSE](LICENSE) for details.

## Contact

EverCity Tucumán  
**Website**: [www.EverCity.com.ar](http://www.EverCity.com.ar)  
**Phone**: 3816212142  
**Address**: Virgen de la Merced 128, San Miguel de Tucumán  
**Email**: evercitydi@gmail.com  

Built with ❤️ for rapid real estate lead generation.