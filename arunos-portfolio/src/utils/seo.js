// SEO utility functions

export const setPageTitle = (pageTitle) => {
  document.title = pageTitle ? `${pageTitle} | Arun P Portfolio` : 'Arun P | Portfolio';
};

export const setMetaTag = (name, content) => {
  let meta = document.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

export const setSEO = ({ title, description }) => {
  setPageTitle(title);
  if (description) setMetaTag('description', description);
};
