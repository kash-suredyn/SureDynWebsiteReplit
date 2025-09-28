# SureDyn Business Solutions - Microsoft Dynamics 365 Website

## Overview

This project is a high-conversion business website for SureDyn Business Solutions, a Microsoft Dynamics 365 consulting firm. The website specializes in implementation, migration, Business Central project rescue, and support services. Its primary purpose is to attract and convert leads by showcasing SureDyn's expertise in Microsoft Dynamics 365 solutions. The site features a comprehensive design system, expanded navigation covering all Dynamics 365 products, detailed service offerings, and content sections like a Blog and Case Studies. It is built as a React.js component library with modern responsive design and is heavily optimized for SEO, Core Web Vitals, and conversion rates. The project aims for significant improvements in local search rankings and overall user experience, positioning SureDyn as a leader in Microsoft Dynamics 365 services, particularly in Business Central project rescue.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React SPA**: Component-based architecture using functional components and hooks.
- **Routing**: Lightweight client-side routing with Wouter.
- **UI Framework**: shadcn/ui components built on Radix UI primitives for accessibility.
- **Styling**: Tailwind CSS with a custom design system.
- **State Management**: TanStack Query for server state.
- **Form Handling**: React Hook Form with Zod validation.
- **Animations**: Custom scroll-triggered animations using Intersection Observer API.
- **Performance**: Code splitting, lazy loading, and Core Web Vitals optimization (LCP, FID, CLS).
- **Accessibility**: WCAG 2.1 AA compliance with features like skip navigation, keyboard navigation, ARIA live regions, and focus management.
- **Design System**: Implemented a comprehensive design system with features like Dark Mode Toggle with persistence and smooth transitions.
- **Conversion Rate Optimization (CRO)**: Integrated components for optimized CTAs, urgency banners, exit intent popups, and multi-step contact forms with trust signals.
- **SEO Enhancements**: Dynamic breadcrumbs with JSON-LD, automated meta tag management, comprehensive schema markup (local business, service-specific, FAQ), and Open Graph/Twitter Card metadata.

### Backend Architecture
- **Runtime**: Node.js with Express.js.
- **Language**: TypeScript with ES modules.
- **API Design**: RESTful API with structured error handling.
- **Storage**: In-memory storage, designed for future PostgreSQL integration.
- **Validation**: Zod schemas for request validation.
- **Development**: Vite integration for HMR.

### Data Layer
- **ORM**: Drizzle ORM configured for PostgreSQL.
- **Schema**: Shared TypeScript schemas between frontend and backend.
- **Database**: PostgreSQL (via Neon serverless) is configured but currently uses in-memory storage.
- **Migrations**: Drizzle migrations in a dedicated directory.
- **Type Safety**: End-to-end type safety from database to frontend.

### Component Architecture
- **Atomic Design Principles**: Components organized for reusability (atoms, molecules, organisms).
- **Layout**: Standardized Header (responsive) and Footer components.
- **Common Components**: Reusable `AnimatedSection` and validated `ContactForm`.
- **Page Components**: Route-based organization for business sections.
- **UI Components**: Utilizes a complete `shadcn/ui` component library.

### Development Architecture
- **Monorepo Structure**: Shared code, client, and server separated into distinct directories.
- **Type Safety**: End-to-end TypeScript with shared types and validation.
- **Path Aliases**: Configured for clean imports.
- **Development Tools**: Hot reload and error overlay.

## External Dependencies

### Database & Storage
- **@neondatabase/serverless**: PostgreSQL serverless database connection.
- **drizzle-orm**: Type-safe ORM.
- **drizzle-kit**: Database migration tools.

### Frontend Libraries
- **React Ecosystem**: React 18+ for UI development.
- **@tanstack/react-query**: Server state management.
- **wouter**: Lightweight client-side routing.
- **react-hook-form**: Form state management.
- **@hookform/resolvers**: Zod integration for form validation.

### UI & Styling
- **Radix UI**: Accessible UI primitives.
- **Tailwind CSS**: Utility-first CSS framework.
- **shadcn/ui**: Pre-built component library.
- **class-variance-authority**: Type-safe component variants.
- **embla-carousel-react**: Carousel component.

### Development & Build Tools
- **Vite**: Frontend build tool and dev server.
- **esbuild**: Backend bundling.
- **TypeScript**: For type safety across the application.

### Utilities & Validation
- **zod**: Runtime type validation.
- **date-fns**: Date manipulation.
- **clsx & tailwind-merge**: Conditional class name utilities.
- **nanoid**: Unique ID generation.

### External Services Integration
- **Google Fonts**: Inter font family.
- **Font Awesome**: Icon library.
- **Unsplash**: External image hosting.
- **Social Media**: LinkedIn, Twitter, Facebook integration points.