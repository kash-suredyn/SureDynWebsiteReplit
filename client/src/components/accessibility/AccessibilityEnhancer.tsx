import { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  announcements?: string[];
  skipLinks?: boolean;
}

export default function AccessibilityEnhancer({
  announcements = [],
  skipLinks = true
}: AccessibilityEnhancerProps) {

  useEffect(() => {
    // Add skip links for keyboard navigation
    if (skipLinks) {
      addSkipLinks();
    }

    // Enhance keyboard navigation
    enhanceKeyboardNavigation();
    
    // Add ARIA live regions for announcements
    addLiveRegions();
    
    // Improve focus management
    improveFocusManagement();

    // Add screen reader enhancements
    addScreenReaderEnhancements();

    // Monitor and fix accessibility issues
    monitorAccessibility();

  }, [skipLinks]);

  // Announce content changes to screen readers
  useEffect(() => {
    if (announcements.length > 0) {
      announceToScreenReader(announcements[announcements.length - 1]);
    }
  }, [announcements]);

  return (
    <>
      {/* Live regions for screen reader announcements */}
      <div
        id="aria-live-polite"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />
      <div
        id="aria-live-assertive"
        aria-live="assertive"
        aria-atomic="true"
        className="sr-only"
      />
      
      {/* Skip navigation links */}
      {skipLinks && (
        <div className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4" style={{zIndex: 9999}}>
          <a
            href="#main-content"
            className="bg-suredyn-orange text-white px-4 py-2 rounded focus:ring-2 focus:ring-white focus:outline-none"
          >
            Skip to main content
          </a>
          <a
            href="#navigation"
            className="bg-suredyn-orange text-white px-4 py-2 rounded ml-2 focus:ring-2 focus:ring-white focus:outline-none"
          >
            Skip to navigation
          </a>
        </div>
      )}
    </>
  );
}

function addSkipLinks() {
  // Ensure main content has proper ID
  const main = document.querySelector('main');
  if (main && !main.id) {
    main.id = 'main-content';
  }

  // Ensure navigation has proper ID
  const nav = document.querySelector('nav');
  if (nav && !nav.id) {
    nav.id = 'navigation';
  }
}

function enhanceKeyboardNavigation() {
  // Add proper focus indicators
  const style = document.createElement('style');
  style.textContent = `
    .focus-visible {
      outline: 2px solid #ff6b35 !important;
      outline-offset: 2px !important;
    }
    
    button:focus-visible,
    a:focus-visible,
    input:focus-visible,
    textarea:focus-visible,
    select:focus-visible {
      outline: 2px solid #ff6b35 !important;
      outline-offset: 2px !important;
    }
  `;
  document.head.appendChild(style);

  // Trap focus in modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      const modal = document.querySelector('[role="dialog"][aria-modal="true"]');
      if (modal) {
        trapFocusInModal(modal as HTMLElement, e);
      }
    }
  });
}

function addLiveRegions() {
  // Ensure live regions exist
  if (!document.getElementById('aria-live-polite')) {
    const politeRegion = document.createElement('div');
    politeRegion.id = 'aria-live-polite';
    politeRegion.setAttribute('aria-live', 'polite');
    politeRegion.setAttribute('aria-atomic', 'true');
    politeRegion.className = 'sr-only';
    document.body.appendChild(politeRegion);
  }

  if (!document.getElementById('aria-live-assertive')) {
    const assertiveRegion = document.createElement('div');
    assertiveRegion.id = 'aria-live-assertive';
    assertiveRegion.setAttribute('aria-live', 'assertive');
    assertiveRegion.setAttribute('aria-atomic', 'true');
    assertiveRegion.className = 'sr-only';
    document.body.appendChild(assertiveRegion);
  }
}

function improveFocusManagement() {
  // Manage focus for single-page applications
  const originalTitle = document.title;
  
  // Announce page changes
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList' && mutation.target === document.head) {
        const titleElement = document.querySelector('title');
        if (titleElement && titleElement.textContent !== originalTitle) {
          announceToScreenReader(`Page changed to ${titleElement.textContent}`);
        }
      }
    });
  });

  observer.observe(document.head, { childList: true, subtree: true });
}

function addScreenReaderEnhancements() {
  // Add helpful labels and descriptions
  const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
  buttons.forEach((button) => {
    if (!button.textContent?.trim()) {
      const icon = button.querySelector('i[class*="fa-"], svg');
      if (icon) {
        button.setAttribute('aria-label', getIconDescription(icon));
      }
    }
  });

  // Enhance form labels
  const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
  inputs.forEach((input) => {
    const inputElement = input as HTMLInputElement;
    const label = document.querySelector(`label[for="${inputElement.id}"]`);
    if (!label && inputElement.placeholder) {
      inputElement.setAttribute('aria-label', inputElement.placeholder);
    }
  });
}

function monitorAccessibility() {
  // Check for common accessibility issues
  setTimeout(() => {
    const issues: string[] = [];
    
    // Check for images without alt text
    const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
    if (imagesWithoutAlt.length > 0) {
      issues.push(`${imagesWithoutAlt.length} images missing alt text`);
    }

    // Check for buttons without accessible names
    const buttonsWithoutNames = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttonsWithoutNames.forEach((button) => {
      if (!button.textContent?.trim()) {
        issues.push('Button without accessible name found');
      }
    });

    // Check for form inputs without labels
    const inputsWithoutLabels = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
    inputsWithoutLabels.forEach((input) => {
      const hasLabel = document.querySelector(`label[for="${input.id}"]`);
      if (!hasLabel) {
        issues.push('Form input without label found');
      }
    });

    if (issues.length > 0) {
      console.warn('Accessibility issues detected:', issues);
    } else {
      console.log('No major accessibility issues detected');
    }
  }, 1000);
}

function announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite') {
  const region = document.getElementById(`aria-live-${priority}`);
  if (region) {
    region.textContent = message;
    
    // Clear after announcement
    setTimeout(() => {
      region.textContent = '';
    }, 1000);
  }
}

function trapFocusInModal(modal: HTMLElement, event: KeyboardEvent) {
  const focusableElements = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  if (event.shiftKey) {
    if (document.activeElement === firstElement) {
      lastElement.focus();
      event.preventDefault();
    }
  } else {
    if (document.activeElement === lastElement) {
      firstElement.focus();
      event.preventDefault();
    }
  }
}

function getIconDescription(icon: Element): string {
  const classList = Array.from(icon.classList);
  
  // Map common Font Awesome icons to descriptions
  const iconMap: { [key: string]: string } = {
    'fa-phone': 'Phone',
    'fa-email': 'Email',
    'fa-envelope': 'Email',
    'fa-search': 'Search',
    'fa-menu': 'Menu',
    'fa-close': 'Close',
    'fa-times': 'Close',
    'fa-arrow-right': 'Arrow right',
    'fa-arrow-left': 'Arrow left',
    'fa-check': 'Check',
    'fa-download': 'Download',
    'fa-external-link': 'External link'
  };

  for (const className of classList) {
    if (iconMap[className]) {
      return iconMap[className];
    }
  }

  return 'Button';
}