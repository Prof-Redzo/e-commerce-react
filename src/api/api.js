const API_URL = "https://fakestoreapi.com/products";

// Dohvatanje svih proizvoda direktno sa API-ja
export const getProducts = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const products = await response.json();
    return products; // Vraća proizvode
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Vraća prazan niz ako dođe do greške
  }
};

// Dodavanje novog proizvoda (samo lokalno)
export const addProduct = (newProduct) => {
  newProduct.id = Date.now().toString(); // Generiše jedinstven ID
  products.push(newProduct); // Dodaje novi proizvod lokalno
  return Promise.resolve(newProduct); // Simulira asinhrono dodavanje
};

// Brisanje proizvoda (samo lokalno)
export const deleteProduct = (productId) => {
  products = products.filter((product) => product.id !== productId);
  return Promise.resolve(productId); // Simulira asinhrono brisanje
};

// Ažuriranje proizvoda (samo lokalno)
export const updateProduct = (updatedProduct) => {
  products = products.map((product) =>
    product.id === updatedProduct.id ? updatedProduct : product
  );
  return Promise.resolve(updatedProduct); // Simulira asinhrono ažuriranje
};

// Dohvatanje detalja proizvoda
export const getProductDetails = async (productId) => {
  try {
    const response = await fetch(`${API_URL}/${productId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product details");
    }
    const product = await response.json();
    return product;
  } catch (error) {
    console.error("Error fetching product details:", error);
    return null; // Vraća null ako dođe do greške
  }
};
