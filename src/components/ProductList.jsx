import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import AddProductForm from "./AddProductForm";
import { fetchAllProducts } from "../api/api.js";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchAllProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [newProduct, ...prevProducts]);
  };

  return (
    <div className="product-list-container">
      <button
        className="add-product-button"
        onClick={() => setShowAddForm((prev) => !prev)}
      >
        {showAddForm ? "Close Form" : "Add New Product"}
      </button>
      {showAddForm && <AddProductForm onAddProduct={handleAddProduct} />}
      <div className="product-cards">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
