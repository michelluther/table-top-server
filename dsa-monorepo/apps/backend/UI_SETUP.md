# shadcn/ui + Tailwind CSS Setup

## Overview

The DSA Cockpit admin UI uses **shadcn/ui** components built on top of **Tailwind CSS** and **Radix UI** primitives. This provides a modern, accessible, and customizable component library that integrates seamlessly with Next.js.

## Architecture

```
┌─────────────────────────────────────────────┐
│            shadcn/ui Components              │
│         (Button, Card, Input, Label)         │
├─────────────────────────────────────────────┤
│                                              │
│  ┌──────────────────────────────────────┐  │
│  │   Radix UI Primitives                │  │
│  │   (Accessible, unstyled components)  │  │
│  └──────────────────────────────────────┘  │
│                  ↓                          │
│  ┌──────────────────────────────────────┐  │
│  │   Tailwind CSS                       │  │
│  │   (Utility-first styling)            │  │
│  └──────────────────────────────────────┘  │
│                  ↓                          │
│  ┌──────────────────────────────────────┐  │
│  │   CSS Variables (Theme)              │  │
│  │   (Light/dark mode support)          │  │
│  └──────────────────────────────────────┘  │
│                                              │
└─────────────────────────────────────────────┘
```

## File Structure

```
apps/backend/
├── tailwind.config.ts              # Tailwind configuration
├── postcss.config.js                # PostCSS configuration
├── components.json                  # shadcn/ui configuration
├── src/
│   ├── app/
│   │   ├── globals.css             # Global styles + Tailwind directives
│   │   ├── layout.tsx              # Root layout with Inter font
│   │   ├── page.tsx                # Root page (redirects to admin/signin)
│   │   ├── auth/
│   │   │   └── signin/
│   │   │       ├── page.tsx        # Sign-in page
│   │   │       └── signin-form.tsx # Sign-in form component
│   │   └── admin/
│   │       └── page.tsx            # Admin dashboard
│   ├── components/
│   │   └── ui/
│   │       ├── button.tsx          # Button component
│   │       ├── card.tsx            # Card component
│   │       ├── input.tsx           # Input component
│   │       └── label.tsx           # Label component
│   └── lib/
│       └── utils.ts                # cn() utility for merging classes
```

## Dependencies

### Core Dependencies

```json
{
  "tailwindcss": "^3.x",
  "postcss": "^8.x",
  "autoprefixer": "^10.x",
  "tailwindcss-animate": "^1.x",
  "class-variance-authority": "^0.7.x",
  "clsx": "^2.x",
  "tailwind-merge": "^2.x",
  "lucide-react": "^0.x"
}
```

### Radix UI Primitives

```json
{
  "@radix-ui/react-slot": "^1.x",
  "@radix-ui/react-label": "^2.x",
  "@radix-ui/react-dialog": "^1.x",
  "@radix-ui/react-dropdown-menu": "^2.x",
  "@radix-ui/react-select": "^2.x"
}
```

## Theme Configuration

### Colors

The theme uses HSL color format with CSS variables for easy customization:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96.1%;
  --destructive: 0 84.2% 60.2%;
  --muted: 210 40% 96.1%;
  --accent: 210 40% 96.1%;
  --border: 214.3 31.8% 91.4%;
  --radius: 0.5rem;
}
```

### Dark Mode

Dark mode is supported via the `.dark` class:

```css
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 217.2 91.2% 59.8%;
  /* ... */
}
```

### Typography

The app uses the **Inter** font from Google Fonts:

```typescript
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
```

## Components

### Button

Versatile button component with multiple variants and sizes:

```tsx
import { Button } from '@/components/ui/button';

<Button>Default</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Cancel</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon">🔥</Button>
```

**Variants:**
- `default` - Primary blue button
- `destructive` - Red button for dangerous actions
- `outline` - Outlined button
- `secondary` - Secondary gray button
- `ghost` - Transparent button
- `link` - Link-styled button

**Sizes:**
- `default` - Standard height (40px)
- `sm` - Small height (36px)
- `lg` - Large height (44px)
- `icon` - Square button for icons (40x40px)

### Card

Container component for grouping related content:

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Input

Form input component with consistent styling:

```tsx
import { Input } from '@/components/ui/input';

<Input type="text" placeholder="Enter text" />
<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password" />
<Input disabled placeholder="Disabled input" />
```

### Label

Accessible form label component:

```tsx
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="Email" />
</div>
```

## Utility Functions

### cn() - Class Name Utility

Merges Tailwind classes with proper precedence handling:

```tsx
import { cn } from '@/lib/utils';

// Basic usage
<div className={cn('px-4 py-2', 'text-red-500')} />

// Conditional classes
<div className={cn('px-4 py-2', isActive && 'bg-blue-500')} />

// Override classes (later classes override earlier ones)
<div className={cn('px-4', 'px-8')} /> // Results in px-8

// Merge with props
<div className={cn('px-4 py-2', className)} />
```

## Example Pages

### Sign-In Page

Located at `/auth/signin`:

```tsx
// src/app/auth/signin/page.tsx
import { SignInForm } from './signin-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>DSA Cockpit</CardTitle>
        </CardHeader>
        <CardContent>
          <SignInForm />
        </CardContent>
      </Card>
    </div>
  );
}
```

### Admin Dashboard

Located at `/admin`:

```tsx
// src/app/admin/page.tsx
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default async function AdminDashboard() {
  const session = await auth();

  if (!session) {
    redirect('/auth/signin');
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <h1>DSA Cockpit Admin</h1>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Welcome {session.user.username}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Dashboard content here</p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
```

## Tailwind Configuration

### Content Paths

```typescript
// tailwind.config.ts
content: [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
],
```

### Theme Extensions

```typescript
theme: {
  extend: {
    colors: {
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))',
      },
      // ... more colors
    },
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)',
    },
  },
},
```

### Plugins

```typescript
plugins: [require('tailwindcss-animate')],
```

## Dark Mode

### Enabling Dark Mode

Add the `dark` class to the root `<html>` element:

```tsx
<html lang="en" className="dark">
  <body>{children}</body>
</html>
```

### Dark Mode Styles

Use the `dark:` prefix for dark mode styles:

```tsx
<div className="bg-white dark:bg-slate-900 text-black dark:text-white">
  Content adapts to light/dark mode
</div>
```

## Customization

### Changing Primary Color

Edit the CSS variables in `globals.css`:

```css
:root {
  /* Change from blue to green */
  --primary: 142.1 76.2% 36.3%; /* HSL for green */
  --primary-foreground: 355.7 100% 97.3%;
}
```

### Changing Border Radius

```css
:root {
  /* More rounded */
  --radius: 1rem;

  /* Less rounded */
  --radius: 0.25rem;
}
```

### Adding Custom Colors

```typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      brand: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        // ... more shades
        900: '#0c4a6e',
      },
    },
  },
},
```

## Adding More Components

### Using shadcn/ui CLI

To add more components from shadcn/ui:

```bash
# Add a dialog component
npx shadcn-ui@latest add dialog

# Add a dropdown menu
npx shadcn-ui@latest add dropdown-menu

# Add a table component
npx shadcn-ui@latest add table
```

### Manual Component Addition

1. Copy component code from [ui.shadcn.com](https://ui.shadcn.com)
2. Place in `src/components/ui/[component-name].tsx`
3. Install required dependencies
4. Import and use in your pages

## Best Practices

### 1. Use Semantic HTML

```tsx
// Good
<button type="button">Click me</button>

// Bad
<div onClick={handleClick}>Click me</div>
```

### 2. Leverage Composition

```tsx
// Compose components for complex UIs
<Card>
  <CardHeader>
    <CardTitle>Settings</CardTitle>
  </CardHeader>
  <CardContent>
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" />
      </div>
      <Button type="submit">Save</Button>
    </form>
  </CardContent>
</Card>
```

### 3. Use Consistent Spacing

Use Tailwind's spacing scale consistently:

```tsx
<div className="space-y-4">  {/* Vertical spacing */}
  <div className="space-x-2">  {/* Horizontal spacing */}
    <Button>Cancel</Button>
    <Button>Save</Button>
  </div>
</div>
```

### 4. Responsive Design

Use Tailwind's responsive prefixes:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Responsive grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
</div>
```

### 5. Accessibility

Always include labels for form inputs:

```tsx
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" required />
</div>
```

## Resources

- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/primitives/docs/overview/introduction)
- [Tailwind CSS Best Practices](https://tailwindcss.com/docs/reusing-styles)
- [Next.js Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)

## Next Steps

- **Phase 6.5:** Setup testing infrastructure (Vitest, test database, helpers)
- **Phase 7:** Migrate read-only REST endpoints with tests
- **Phase 12:** Add more admin UI pages (character management, adventure management, etc.)
- **Phase 13:** Add dark mode toggle
- **Phase 13:** Add more shadcn/ui components as needed
