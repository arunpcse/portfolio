// General utility helper functions

export const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const generateId = () => `id_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;

export const debounce = (fn, delayMs = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delayMs);
  };
};

export const throttle = (fn, interval = 200) => {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= interval) {
      lastCall = now;
      fn(...args);
    }
  };
};

export const truncate = (str, maxLength = 100) => {
  if (!str || str.length <= maxLength) return str;
  return str.slice(0, maxLength).trim() + '...';
};

export const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};
