export const trackPageView = (pageName) => {
  if (typeof window !== 'undefined') console.log(`[Analytics] Page View: ${pageName}`);
};

export const trackEvent = (category, action, label = '') => {
  if (typeof window !== 'undefined') console.log(`[Analytics] Event: ${category} > ${action}${label ? ` (${label})` : ''}`);
};

export const trackExternalLink = (url) => trackEvent('External Link', 'Click', url);
