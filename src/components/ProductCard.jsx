import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <Card sx={{ maxWidth: 300, m: 2 }}>
      <CardMedia
        component="img"
        height="150"
        image={product.imageUrl || 'https://via.placeholder.com/150'}
        alt={product.title}
      />
      <CardContent>
        <Typography variant="h6">{product.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          ${product.price}
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

