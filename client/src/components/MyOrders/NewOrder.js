import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios';
import {
  Box,
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Page from '../Page';
// import Date from '../components/Date';

const NewOrder = () => {
  const [product, setProduct] = useState({
    name: '',
    quantity: '',
    price: '',
    discountPrice: '',
    description: '',
  });

  const handleChange = ({ currentTarget: input }) => {
    setProduct({
      ...product,
      [input.name]: input.value,
    });
    console.log(product);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try{
    //     console.log(product)
    //     await axios
    //         .post("http://localhost:8080/api/yoga/addProduct", product)
    //         .then((res) => {
    //             console.log(res);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    //     setProduct({
    //         name: "",
    //         quantity: "",
    //         price: "",
    //         discountPrice: "",
    //         description: "",
    //     });
    //     alert("Product added successfully");
    // }catch(error){
    //     console.log(error);
    // }
  };

  return (
    <>
      
            <form onSubmit={handleSubmit}>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mb: 2 }}>
                <FormControl sx={{ width: '100%', mr: { md: 1 } }}>
                  <InputLabel id="demo-simple-select-autowidth-label">Service Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    label="Service Type"
                    variant="outlined"
                    fullWidth
                    name="name"
                    //   value={product.name}
                    //   onChange={handleChange}
                  >
                    <MenuItem value="Site Survey">Site Survey</MenuItem>
                    <MenuItem value="Kitchen Installation">Kitchen Installation</MenuItem>
                    <MenuItem value="Wardrobe Installation">Wardrobe Installation</MenuItem>
                    <MenuItem value="Product Service">Product Service</MenuItem>
                  </Select>
                </FormControl>
                <Box sx={{width:'100%', ml: { md: 1 }, mt: { xs: 2, md: 0 }}}>
                <Button variant="outlined" component="label" sx={{ width: '100%', height: '50px' }}>
                  Upload Drawings
                  <input hidden accept="image/*" type="file" />
                </Button>
                </Box>
              </Box>
              <Box sx={{ display: 'flex',flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <TextField
                  label="Face Area"
                  variant="outlined"
                  fullWidth
                  sx={{ mr: { md: 1 } }}
                  type="number"
                  name="quantity"
                  //   value={product.quantity}
                  //   onChange={handleChange}
                />
                <TextField
                  label="Floating Shelf"
                  variant="outlined"
                  fullWidth
                  type="text"
                  name="description"
                  //   value={product.description}
                  //   onChange={handleChange}
                  sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                />
              </Box>
              <Box sx={{ display: 'flex',flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <TextField
                  label="Spot Light"
                  variant="outlined"
                  fullWidth
                  sx={{ mr: { md: 1 } }}
                  type="number"
                  name="quantity"
                  //   value={product.quantity}
                  //   onChange={handleChange}
                />
                <TextField
                  label="Strip Light"
                  variant="outlined"
                  fullWidth
                  type="number"
                  name="description"
                  //   value={product.description}
                  //   onChange={handleChange}
                  sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                />
              </Box>
              <Box>
                <Typography variant="h6">Completion Target</Typography>
              </Box>
              <Box sx={{ display: 'flex',flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <Box sx={{ width: '100%', mr:{md:1} }}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      disableFuture
                      label="Expected Start Date"
                      openTo="year"
                      views={['year', 'month', 'day']}
                      // value={value}
                      // onChange={handleChange}
                      renderInput={(params) => <TextField {...params} fullWidth />}
                    />
                  </LocalizationProvider>
                </Box>
                <Box sx={{ width: '100%', ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      disableFuture
                      label="Expected End Date"
                      openTo="year"
                      views={['year', 'month', 'day']}
                      // value={value}
                      // onChange={handleChange}
                      renderInput={(params) => <TextField {...params} fullWidth />}
                    />
                  </LocalizationProvider>
                </Box>
              </Box>
                <Typography variant="h6">Working Hours</Typography>
              <Box sx={{ display: 'flex',flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <TextField
                  label="Start Time"
                  variant="outlined"
                  fullWidth
                  sx={{ mr: { md: 1 } }}
                  type="number"
                  name="quantity"
                  //   value={product.quantity}
                  //   onChange={handleChange}
                />
                <TextField
                  label="End Time"
                  variant="outlined"
                  fullWidth
                  type="number"
                  name="description"
                  //   value={product.description}
                  //   onChange={handleChange}
                  sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                />
              </Box>
              <Box sx={{ display: 'flex',flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <TextField
                  label="Break Start Time"
                  variant="outlined"
                  fullWidth
                  sx={{ mr: { md: 1 } }}
                  type="number"
                  name="quantity"
                  //   value={product.quantity}
                  //   onChange={handleChange}
                />
                <TextField
                  label="Break End Time"
                  variant="outlined"
                  fullWidth
                  type="number"
                  name="description"
                  //   value={product.description}
                  //   onChange={handleChange}
                  sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                />
              </Box>
              <Box sx={{ display: 'flex',flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
              <FormControl sx={{ width: '100%', mr: { md: 1 } }}>
                  <InputLabel id="demo-simple-select-autowidth-label">Site Condition</InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    label="Type of Product"
                    variant="outlined"
                    fullWidth
                    name="name"
                    //   value={product.name}
                    //   onChange={handleChange}
                  >
                    <MenuItem value="Site Survey">Site Survey</MenuItem>
                    <MenuItem value="Kitchen Installation">Kitchen Installation</MenuItem>
                    <MenuItem value="Wardrobe Installation">Wardrobe Installation</MenuItem>
                    <MenuItem value="Product Service">Product Service</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ width: '100%', ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
                  <InputLabel id="demo-simple-select-autowidth-label">Site Condition</InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    label="Work Phase"
                    variant="outlined"
                    fullWidth
                    name="workPhase"
                    //   value={product.name}
                    //   onChange={handleChange}
                  >
                    <MenuItem value={1} >1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
                </Box>
                <Box sx={{ display: 'flex',flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <Button variant="outlined" component="label" sx={{ width: '100%', mr: { md: 1 }, height: '50px' }}>
                  Upload Images
                  <input hidden accept="image/*" type="file" />
                </Button>
                <Button
                  variant="outlined"
                  component="label"
                  sx={{ width: '100%', ml: { md: 1 }, mt: { xs: 2, md: 0 }, height: '50px' }}
                >
                  Upload Videos
                  <input hidden accept="image/*" type="file" />
                </Button>
              </Box>
              <Box sx={{ display: 'flex',flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
              <FormControl sx={{ width: '100%', mr: { md: 1 } }}>
                  <InputLabel id="demo-simple-select-autowidth-label">Type of Product</InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    label="Type of Product"
                    variant="outlined"
                    fullWidth
                    name="name"
                    //   value={product.name}
                    //   onChange={handleChange}
                  >
                    <MenuItem value="Site Survey">Site Survey</MenuItem>
                    <MenuItem value="Kitchen Installation">Kitchen Installation</MenuItem>
                    <MenuItem value="Wardrobe Installation">Wardrobe Installation</MenuItem>
                    <MenuItem value="Product Service">Product Service</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ width: '100%', ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
                  <InputLabel id="demo-simple-select-autowidth-label">Work Phase</InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    label="Work Phase"
                    variant="outlined"
                    fullWidth
                    name="workPhase"
                    //   value={product.name}
                    //   onChange={handleChange}
                  >
                    <MenuItem value={1} >1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
                </Box>
                <Box sx={{ display: 'flex',flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <TextField
                  label="Locality"
                  variant="outlined"
                  fullWidth
                  sx={{ mr: { md: 1 } }}
                  type="text"
                  name="locality"
                  //   value={product.quantity}
                  //   onChange={handleChange}
                />
                <TextField
                  label="Pincode of Locality"
                  variant="outlined"
                  fullWidth
                  type="number"
                  name="pincodeOfLocality"
                  //   value={product.description}
                  //   onChange={handleChange}
                  sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                />
                </Box>
              <Box>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </Box>
            </form>
    </>
  );
};

export default NewOrder;
