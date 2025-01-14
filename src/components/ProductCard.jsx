import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

const ProductCard = ({ product, onEdit, onDelete }) => {
  const price = parseFloat(product.price); // Ensure price is a number

  return (
    <Card sx={{ maxWidth: 300, m: 2 }}>
      <CardMedia
        component="img"
        height="150"
        image={product.imageUrl || '/default-image.jpg'} // Local fallback image
        alt={product.title || 'Product Image'}
        onError={(e) => {
          e.target.onerror = null; // Prevent infinite loop
          e.target.src = '/default-image.jpg'; // Use local fallback
        }}
      />
      <CardContent>
        <Typography variant="h6">{product.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          ${!isNaN(price) ? price.toFixed(2) : 'N/A'} {/* Handle invalid price */}
        </Typography>
        <Typography variant="body2" mt={1}>
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => onEdit(product.id)}>
          Edit
        </Button>
        <Button size="small" color="secondary" onClick={() => onDelete(product.id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
