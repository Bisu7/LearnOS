# LearnOS

LearnOS is an intelligent, futuristic student learning dashboard designed to track active courses, maintain learning streaks, and visualize weekly progress seamlessly.

## Tech Stack
| Technology | Description |
| --- | --- |
| Next.js 14 | App Router for modern React server/client architecture |
| Supabase | PostgreSQL database and backend-as-a-service |
| Tailwind CSS | Utility-first styling with custom theme palette |
| Framer Motion | Smooth, GPU-accelerated micro-interactions |
| TypeScript | Strict type safety across the entire application |

## Architecture Decisions

- **Server vs Client Components**: `CourseGrid` is a React Server Component (RSC) that securely fetches data directly from Supabase without exposing credentials to the browser. Conversely, components like `CourseCard` are Client Components because they utilize Framer Motion, which requires access to browser-level APIs (DOM, `window`).
- **@supabase/ssr**: Used in favor of the legacy auth-helpers package. The newer SSR package securely hooks into the Next.js App Router using the asynchronous `cookies()` API.
- **Suspense Boundary**: To achieve optimal perceived performance, `CourseGridSkeleton` renders immediately on the client while the server-side Supabase fetch dynamically resolves in the background.

## Local Setup

1. **Clone the repository.**
2. **Setup environment variables:**
   ```bash
   cp .env.example .env.local
   ```
3. **Fill in Supabase keys**: Add your URL and Anon Key into `.env.local`.
4. **Initialize database**: Run the `supabase/schema.sql` file in your Supabase SQL editor to create tables, enable RLS, and insert seed data.
5. **Install dependencies and run:**
   ```bash
   pnpm install
   pnpm dev
   ```

## Supabase Setup
- Create a new project in the Supabase Dashboard.
- Copy the provided `Project URL` and `anon key` into your `.env.local`.
- Paste and execute the contents of `supabase/schema.sql` into the SQL editor.

## Deployment
LearnOS is optimized for deployment on Vercel. Ensure that `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are added to your environment variables within the Vercel dashboard prior to deployment.

## Challenges & Solutions
- **Performant Animations**: A major focus was keeping Framer Motion animations strictly on `transform` (scale, x, y) and `opacity` properties. This successfully prevents expensive DOM reflows and cumulative layout shifts. The sidebar width transition explicitly utilizes `will-change: width` to stay hardware accelerated.
- **Dynamic Icons**: Rendering dynamic Lucide icons efficiently required bypassing dynamic imports in favor of a static lookup map, preserving server/client boundary integrity.
