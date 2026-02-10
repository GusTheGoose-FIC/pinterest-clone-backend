const API_URL = "https://pinterest-clone-backend-bzqp.onrender.com";

export async function getPins() {
  const res = await fetch(`${API_URL}/api/pins`);
  return res.json();
}
