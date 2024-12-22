import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts, deleteProduct } from '../api';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((response) => setProducts(response.data));
  }, []);

  const handleDelete = (id) => {
    deleteProduct(id).then(() => {
      setProducts((prev) => prev.filter((product) => product.id !== id));
    });
  };

  return (
    <div>
      <h1>Products</h1>
      <Link to="/add-product">Add New Product</Link>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} width={50} />
            <p>{product.title}</p>
            <p>{product.price} $</p>
            <Link to={`/products/${product.id}`}>Details</Link>
            <Link to={`/edit-product/${product.id}`}>Edit</Link>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
