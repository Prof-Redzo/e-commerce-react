import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {products.map((product) => (
        <Grid item key={product.id}>
          <ProductCard product={product} onEdit={onEdit} onDelete={onDelete} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
