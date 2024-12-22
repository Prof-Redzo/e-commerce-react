import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addProduct, getProductById, updateProduct } from '../api';

const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
  });

  useEffect(() => {
    if (id) {
      getProductById(id).then((response) => setFormData(response.data));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const action = id ? updateProduct(id, formData) : addProduct(formData);

    action.then(() => {
      navigate('/');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        required
      ></textarea>
      <input
        type="text"
        placeholder="Category"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={formData.image}
        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        required
      />
      <button type="submit">{id ? 'Update' : 'Add'} Product</button>
    </form>
  );
};

export default ProductForm;
