import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addNewProduct } from '../../actions/master/product';


const Product = () => {
  const [productInfo, setProductInfo] = useState({
    name: '',
    details: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(productInfo);
      dispatch(addNewProduct(productInfo));
      setProductInfo({
        name: '',
        details: '',
      });
      alert('Product Added Successfully');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setProductInfo({ ...productInfo, [e.target.name]: e.target.value });
    console.log(productInfo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mb: 2 }}>
        <TextField
          required
          label="Product Name"
          variant="outlined"
          fullWidth
          sx={{ mr: { md: 1 } }}
          type="text"
          name="name"
          value={productInfo.name}
          onChange={handleChange}
        />
        <TextField
          label="Product Details"
          required
          variant="outlined"
          fullWidth
          sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
          type="text"
          name="details"
          value={productInfo.details}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <Button variant="contained" color="primary" type="submit">
          Add Product
        </Button>
      </Box>
    </form>
  );
};

export default Product;
