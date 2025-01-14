import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import { getProducts, addProduct, deleteProduct, updateProduct, getProductDetails } from "./api/api.js";

import AddProductForm from "./components/AddProductForm";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import ProductForm from "./components/ProductForm";

const App = () => {
  const [products, setProducts] = useState([]); // Store all products
  const [selectedProduct, setSelectedProduct] = useState(null); // View a specific product
  const [editingProduct, setEditingProduct] = useState(null); // Edit a product
  const [error, setError] = useState(""); // Error state for user feedback

  // Load products on component mount
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    } catch (err) {
      setError("Failed to fetch products. Please try again.");
      console.error(err);
    }
  };

  const handleAddProduct = async (product) => {
    try {
      const newProduct = await addProduct(product);
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    } catch (err) {
      setError("Failed to add product. Please try again.");
      console.error(err);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct(id);
      setProducts((prevProducts) => prevProducts.filter((p) => p.id !== id));
    } catch (err) {
      setError("Failed to delete product. Please try again.");
      console.error(err);
    }
  };

  const handleEditProduct = async (id) => {
    const product = await getProductDetails(id);
    if (!product) {
      alert("Failed to fetch product details. Please try again.");
      return;
    }
    setEditingProduct(product);
  };
  

  const handleSaveProduct = async (updatedProduct) => {
    try {
      const savedProduct = await updateProduct(updatedProduct);
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === savedProduct.id ? savedProduct : product
        )
      );
      setEditingProduct(null);
    } catch (err) {
      setError("Failed to update product. Please try again.");
      console.error(err);
    }
  };

  const handleViewDetails = async (id) => {
    try {
      const product = await getProductDetails(id);
      setSelectedProduct(product);
    } catch (err) {
      setError("Failed to load product details. Please try again.");
      console.error(err);
    }
  };

  const handleBack = () => {
    setSelectedProduct(null);
    setEditingProduct(null);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Product Management App
      </Typography>

      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      {!selectedProduct && !editingProduct && (
        <>
          <AddProductForm onAddProduct={handleAddProduct} />
          <ProductList
            products={products}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
            onViewDetails={handleViewDetails}
          />
        </>
      )}

      {selectedProduct && (
        <ProductDetails product={selectedProduct} onBack={handleBack} />
      )}

      {editingProduct && (
        <ProductForm product={editingProduct} onSave={handleSaveProduct} onBack={handleBack} />
      )}
    </Container>
  );
};

export default App;
