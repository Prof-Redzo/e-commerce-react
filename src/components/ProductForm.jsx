import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const ProductForm = ({ product, onSave }) => {
  const [formData, setFormData] = React.useState(product);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4, p: 3, border: '1px solid #ddd', borderRadius: 2 }}>
      <Typography variant="h5" mb={2}>
        Edit Product
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          name="title"
          fullWidth
          margin="normal"
          value={formData.title}
          onChange={handleChange}
        />
        <TextField
          label="Price"
          name="price"
          type="number"
          fullWidth
          margin="normal"
          value={formData.price}
          onChange={handleChange}
        />
        <TextField
          label="Description"
          name="description"
          multiline
          rows={4}
          fullWidth
          margin="normal"
          value={formData.description}
          onChange={handleChange}
        />
        <TextField
          label="Image URL"
          name="imageUrl"
          fullWidth
          margin="normal"
          value={formData.imageUrl}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Save Changes
        </Button>
      </form>
    </Box>
  );
};

export default ProductForm;
