import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addCordinator } from '../../actions/master/cordinator';

const ArchitectDesignerCordinator = () => {
  const [archtDesigrCordInfo, setArchtDesigrCordInfo] = React.useState({
    projectName: '',
    cordinatorName: '',
    cordinatorContact: '',
    cordinatorEmail: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(archtDesigrCordInfo);
      dispatch(addCordinator(archtDesigrCordInfo));
      setArchtDesigrCordInfo({
        projectName: '',
        cordinatorName: '',
        cordinatorContact: '',
        cordinatorEmail: '',
      });
      alert('Architect/Designer/Cordinator Added Successfully');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setArchtDesigrCordInfo({ ...archtDesigrCordInfo, [e.target.name]: e.target.value });
    console.log(archtDesigrCordInfo);
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
          value={archtDesigrCordInfo.projectName}
          onChange={handleChange}
        />
        <TextField
          label="Project Cordinator Name"
          required
          variant="outlined"
          fullWidth
          sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
          type="text"
          name="cordinatorName"
          value={archtDesigrCordInfo.cordinatorName}
          onChange={handleChange}
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
        <TextField
          required
          label="Project Cordinator Contact"
          variant="outlined"
          fullWidth
          sx={{ mr: { md: 1 } }}
          type="number"
          name="cordinatorContact"
          value={archtDesigrCordInfo.cordinatorContact}
          onChange={handleChange}
        />
        <TextField
          required
          label="Project Cordinator Email"
          variant="outlined"
          fullWidth
          sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
          type="email"
          name="cordinatorEmail"
          value={archtDesigrCordInfo.cordinatorEmail}
          onChange={handleChange}
        />
      </Box>

      <Box>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default ArchitectDesignerCordinator;
