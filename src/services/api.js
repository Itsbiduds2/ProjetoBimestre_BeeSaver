const API_URL = "http://localhost:5000/plantas";

export async function getPlantas() {
  const res = await fetch(`${API_URL}/`);
  return res.json();
}

export async function createPlanta(planta) {
  const res = await fetch(`${API_URL}/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(planta),
  });
  return res.json();
}

export async function updatePlanta(id, data) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deletePlanta(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
}
