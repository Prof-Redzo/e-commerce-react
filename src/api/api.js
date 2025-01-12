const API_URL = "https://fakestoreapi.com/products";

let products = []; 

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    products = data;
    console.log(products); 
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });

export const getProducts = () => {
  return Promise.resolve(products); 
};

export const addProduct = (newProduct) => {
  newProduct.id = Date.now().toString(); 
  products.push(newProduct);
  return Promise.resolve(newProduct); 
};

export const deleteProduct = (productId) => {
  products = products.filter((product) => product.id !== productId);
  return Promise.resolve(productId); 
};

export const updateProduct = (updatedProduct) => {
  products = products.map((product) =>
    product.id === updatedProduct.id ? updatedProduct : product
  );
  return Promise.resolve(updatedProduct); 
};

export const getProductDetails = (productId) => {
  const product = products.find((product) => product.id === productId);
  return Promise.resolve(product); 
};
