const DEFAULT_TIMEOUT = 10000;

export const apiFetch = async (url, options = {}) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), options.timeout || DEFAULT_TIMEOUT);
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: { 'Content-Type': 'application/json', ...options.headers },
    });
    if (!response.ok) throw new Error(`API Error: ${response.status} ${response.statusText}`);
    return await response.json();
  } catch (error) {
    if (error.name === 'AbortError') throw new Error('Request timed out');
    throw error;
  } finally {
    clearTimeout(timeout);
  }
};

export const apiGet = (url, options) => apiFetch(url, { method: 'GET', ...options });
export const apiPost = (url, data, options) => apiFetch(url, { method: 'POST', body: JSON.stringify(data), ...options });
