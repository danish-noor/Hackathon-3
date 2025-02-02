export async function fetchProducts() {
  const url = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/production?query=${encodeURIComponent('*[_type == "product"]{_id, title, price, "imageUrl": image.asset->url}')}`;

  console.log("🛠️ Sanity API URL:", url); // ✅ Yeh dekho API URL sahi ban raha hai ya nahi

  try {
    const res = await fetch(url);
    const data = await res.json();

    console.log("📢 Sanity API Response:", data); // ✅ Yeh dekho API response aa raha hai ya nahi

    return data.result || [];
  } catch (error) {
    console.error(" Sanity Fetch Error:", error);
    return [];
  }
}



