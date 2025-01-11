import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import { fetchAllProducts, addProduct } from "./api/api";

const App = () => {
  const [products, setProducts] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchAllProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddProduct = async (newProduct) => {
    try {
      const addedProduct = await addProduct(newProduct);
      setProducts((prev) => [...prev, addedProduct]);
      setIsAdding(false);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>Product Management</h1>
        <button onClick={() => setIsAdding(true)}>Add New Product</button>
      </header>
      {isAdding ? (
        <ProductForm onSubmit={handleAddProduct} onCancel={() => setIsAdding(false)} />
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
};

export default App;
