import React from "react";

const ProductCard = ({ product }) => {
  const handleEdit = () => {
    console.log("Edit product:", product.id);
  };

  const handleDelete = () => {
    console.log("Delete product:", product.id);
  };

  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <span className="product-price">${product.price}</span>
      <div className="card-actions">
        <button className="edit-button" onClick={handleEdit}>
          Edit
        </button>
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
