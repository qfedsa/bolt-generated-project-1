// Event-Kategorien
export const EventCategory = {
  FORM: 'form',
  BUTTON: 'button',
  MODAL: 'modal',
  SCROLL: 'scroll',
  FAQ: 'faq',
  CALCULATOR: 'calculator'
} as const;

// Event-Aktionen
export const EventAction = {
  SUBMIT: 'submit',
  CLICK: 'click',
  OPEN: 'open',
  CLOSE: 'close',
  SCROLL: 'scroll',
  CALCULATE: 'calculate'
} as const;

// Event-Tracking Funktion
export function trackEvent(
  category: typeof EventCategory[keyof typeof EventCategory],
  action: typeof EventAction[keyof typeof EventAction],
  label?: string,
  value?: number
) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
}

// Scroll-Tracking
export function initScrollTracking() {
  if (typeof window === 'undefined') return;

  let lastScrollPercentage = 0;
  let ticking = false;

  function getScrollPercentage() {
    const h = document.documentElement;
    const b = document.body;
    const st = 'scrollTop';
    const sh = 'scrollHeight';
    
    return Math.floor(
      ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100
    );
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollPercentage = getScrollPercentage();
        const checkpoints = [25, 50, 75, 90, 100];
        
        checkpoints.forEach(checkpoint => {
          if (scrollPercentage >= checkpoint && lastScrollPercentage < checkpoint) {
            trackEvent(
              EventCategory.SCROLL,
              EventAction.SCROLL,
              `Scrolled_${checkpoint}%`
            );
          }
        });
        
        lastScrollPercentage = scrollPercentage;
        ticking = false;
      });

      ticking = true;
    }
  }, { passive: true });
}

// TypeScript Typen
declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params?: {
        event_category?: string;
        event_label?: string;
        value?: number;
        [key: string]: any;
      }
    ) => void;
  }
}
