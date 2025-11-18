const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

async function request(path, options = {}) {
  const url = `${BASE_URL}${path}`;
  try {
    const res = await fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    });

    if (!res.ok) {
      let errBody = null;
      try { errBody = await res.json(); } catch(e){}
      const errorMessage = errBody?.message || `${res.status} ${res.statusText}`;
      throw new Error(errorMessage);
    }

    if (res.status === 204) return null;
    return await res.json();

  } catch (err) {
    throw err;
  }
}

export const getPlantas = () => request('/plantas', { method: 'GET' });
export const getPlanta = (id) => request(`/plantas/${id}`, { method: 'GET' });
export const createPlanta = (planta) =>
  request('/plantas', { method: 'POST', body: JSON.stringify(planta) });
export const updatePlanta = (id, planta) =>
  request(`/plantas/${id}`, { method: 'PUT', body: JSON.stringify(planta) });
export const deletePlanta = (id) =>
  request(`/plantas/${id}`, { method: 'DELETE' });
