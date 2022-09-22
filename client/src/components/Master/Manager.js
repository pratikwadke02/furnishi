import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addManager } from '../../actions/master/manager';

const Manager = () => {
  const [managerInfo, setManagerInfo] = useState({
    projectName: '',
    managerName: '',
    managerContact: '',
    managerEmail: '',
  });

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(managerInfo);
      dispatch(addManager(managerInfo));
      setManagerInfo({
        projectName: '',
        managerName: '',
        managerContact: '',
        managerEmail: '',
      });
      alert('Manager Added Successfully');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setManagerInfo({ ...managerInfo, [e.target.name]: e.target.value });
    console.log(managerInfo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mb: 2 }}>
        <TextField
          required
          label="Project Name"
          variant="outlined"
          fullWidth
          sx={{ mr: { md: 1 } }}
          type="text"
          name="projectName"
          value={managerInfo.projectName}
          onChange={handleChange}
        />
        <TextField
          label="Project Manager Name"
          required
          variant="outlined"
          fullWidth
          sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
          type="text"
          name="managerName"
          value={managerInfo.managerName}
          onChange={handleChange}
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
        <TextField
          required
          label="Project Manager Contact"
          variant="outlined"
          fullWidth
          sx={{ mr: { md: 1 } }}
          type="number"
          name="managerContact"
          value={managerInfo.managerContact}
          onChange={handleChange}
        />
        <TextField
          required
          label="Project Manager Email"
          variant="outlined"
          fullWidth
          sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
          type="email"
          name="managerEmail"
          value={managerInfo.managerEmail}
          onChange={handleChange}
        />
      </Box>

      <Box>
        <Button variant="contained" color="primary" type="submit">
          Add Manager
        </Button>
      </Box>
    </form>
  );
};

export default Manager;
