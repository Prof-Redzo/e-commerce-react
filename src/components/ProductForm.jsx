import React, { useState } from "react";

const ProductForm = ({ onSubmit, onCancel }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, price, description, image });
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <label>Title:</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} required />
      <label>Price:</label>
      <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" required />
      <label>Description:</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      <label>Image URL:</label>
      <input value={image} onChange={(e) => setImage(e.target.value)} required />
      <div className="form-buttons">
        <button type="submit">Add Product</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default ProductForm;
