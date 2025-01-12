import { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { getProducts, addProduct, deleteProduct, updateProduct, getProductDetails } from './api/api.js'; 

import AddProductForm from "./components/AddProductForm";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import ProductForm from "./components/ProductForm";

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);

  // Učitaj proizvode kada se komponenta montira
  useEffect(() => {
    getProducts().then((fetchedProducts) => setProducts(fetchedProducts));
  }, []);

  const handleAddProduct = (product) => {
    addProduct(product).then((newProduct) => {
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    });
  };

  const handleDeleteProduct = (id) => {
    deleteProduct(id).then(() => {
      setProducts((prevProducts) => prevProducts.filter((p) => p.id !== id));
    });
  };

  const handleEditProduct = (id) => {
    getProductDetails(id).then((product) => {
      setEditingProduct(product);
    });
  };

  const handleSaveProduct = (updatedProduct) => {
    updateProduct(updatedProduct).then((savedProduct) => {
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === savedProduct.id ? savedProduct : product
        )
      );
      setEditingProduct(null);
    });
  };

  const handleViewDetails = (id) => {
    getProductDetails(id).then((product) => {
      setSelectedProduct(product);
    });
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
        <ProductForm product={editingProduct} onSave={handleSaveProduct} />
      )}
    </Container>
  );
};

export default App;
