const API_URL = "https://fakestoreapi.com/products";

// Fetch all products from the API
export const getProducts = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Add a new product to the API
export const addProduct = async (newProduct) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });
    return await response.json();
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};

// Delete a product from the API
export const deleteProduct = async (productId) => {
  try {
    await fetch(`${API_URL}/${productId}`, { method: "DELETE" });
    return productId;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};

// Update a product in the API
export const updateProduct = async (updatedProduct) => {
  try {
    const response = await fetch(`${API_URL}/${updatedProduct.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    });
    return await response.json();
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

// Fetch product details by ID
export const getProductDetails = async (productId) => {
  try {
    const response = await fetch(`${API_URL}/${productId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch product details: ${response.status}`);
    }
    const text = await response.text(); // Read the response as text
    if (!text) {
      throw new Error("Product details response is empty.");
    }
    const product = JSON.parse(text); // Parse the text as JSON
    return product;
  } catch (error) {
    console.error("Error fetching product details:", error);
    return null; // Return null to indicate failure
  }
};

