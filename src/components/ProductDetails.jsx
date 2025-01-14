import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const ProductDetails = ({ product, onBack }) => {
  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4, p: 3, border: '1px solid #ddd', borderRadius: 2 }}>
      <Typography variant="h4" mb={2}>
        {product.title}
      </Typography>
      <Typography variant="body1" color="textSecondary" mb={1}>
        Price: ${product.price}
      </Typography>
      <Typography variant="body1" mb={2}>
        {product.description}
      </Typography>
      <img
        src={product.imageUrl || '/default-image.jpg'}
        alt={product.title}
        style={{ maxWidth: '100%', borderRadius: 8 }}
      />
      <Button variant="contained" color="primary" sx={{ mt: 3 }} onClick={onBack}>
        Back
      </Button>
    </Box>
  );
};

export default ProductDetails;
