export default async function getAllArmas(idCategoria: number) {
  const token = process.env.STRAPI_TOKEN; // Reemplaza esto con tu token de acceso
  const apiUrl = `https://strapi-production-9fca.up.railway.app/api/armas?populate=%2A&filters%5Bcategoria%5D=${idCategoria}`;

  const res = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json", // Puedes ajustar los encabezados según tus necesidades
    },
  });

  if (!res.ok) throw new Error("failed to fetch data");

  return res.json();
}
