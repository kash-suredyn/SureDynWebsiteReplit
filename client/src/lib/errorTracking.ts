import * as Sentry from '@sentry/react';

export function initErrorTracking() {
  if (import.meta.env.VITE_SENTRY_DSN) {
    Sentry.init({
      dsn: import.meta.env.VITE_SENTRY_DSN,
      environment: import.meta.env.MODE,
      integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration({
          maskAllText: false,
          blockAllMedia: false,
        }),
      ],
      tracesSampleRate: import.meta.env.DEV ? 1.0 : 0.1,
      replaysSessionSampleRate: import.meta.env.DEV ? 1.0 : 0.1,
      replaysOnErrorSampleRate: 1.0,
      beforeSend(event) {
        // Filter out known non-critical errors
        if (event.exception) {
          const error = event.exception.values?.[0];
          if (error?.type === 'ChunkLoadError' || 
              error?.value?.includes('Loading chunk') ||
              error?.value?.includes('Loading CSS chunk')) {
            return null; // Don't send chunk loading errors
          }
        }
        return event;
      },
    });
  }
}

// Error boundary component
export const SentryErrorBoundary = Sentry.ErrorBoundary;

// Manual error reporting
export function reportError(error: Error, context?: any) {
  if (import.meta.env.VITE_SENTRY_DSN) {
    Sentry.withScope((scope) => {
      if (context) {
        scope.setContext('additional_context', context);
      }
      Sentry.captureException(error);
    });
  }
  
  // Also log to console in development
  if (import.meta.env.DEV) {
    console.error('Error reported:', error, context);
  }
}

// Performance monitoring
export function trackPerformance(name: string, fn: () => void | Promise<void>) {
  return Sentry.startSpan({ name }, fn);
}

// User context for error tracking
export function setUserContext(user: { id: string; email?: string; company?: string }) {
  if (import.meta.env.VITE_SENTRY_DSN) {
    Sentry.setUser(user);
  }
}