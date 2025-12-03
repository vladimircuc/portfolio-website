export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-896N9JV6EX';

// Track page views
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track custom events if needed
export const event = ({ action, params }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, params);
  }
};

