import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const ArchitectDesignerCordinator = () => {
  const [archtDesigrCordInfo, setArchtDesigrCordInfo] = React.useState({
    name: '',
    firmName: '',
    firmAddress: '',
    emailId: '',
    contactOne: '',
    contactTwo: '',
    cordinatorName: '',
    cordinatorContact: '',
    projectName: '',
    projectCordinatorName: '',
    projectCordinatorContact: '',
    projectCordinatorEmail: '',
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      console.log(archtDesigrCordInfo);
      await axios.post('http://localhost:8080/api/wsb/addArchtDesigrCord', archtDesigrCordInfo).then((res) => {
        console.log(res);
      }
      );
    }catch(error){
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
          label="Name"
          variant="outlined"
          fullWidth
          sx={{ mr: { md: 1 } }}
          type="text"
          name="name"
          value={archtDesigrCordInfo.name}
          onChange={handleChange}
        />
        <TextField
          label="Firm Name"
          required
          variant="outlined"
          fullWidth
          sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
          type="text"
          name="firmName"
          value={archtDesigrCordInfo.firmName}
          onChange={handleChange}
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
        <TextField
          required
          label="Firm Address"
          variant="outlined"
          fullWidth
          sx={{ mr: { md: 1 } }}
          type="text"
          name="firmAddress"
          value={archtDesigrCordInfo.firmAddress}
          onChange={handleChange}
        />
        <TextField
          required
          label="Email Id"
          variant="outlined"
          fullWidth
          sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
          type="email"
          name="emailId"
          value={archtDesigrCordInfo.emailId}
          onChange={handleChange}
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mb: 2 }}>
        <TextField
          required
          label="Contact One"
          variant="outlined"
          fullWidth
          sx={{ mr: { md: 1 } }}
          type="number"
          name="contactOne"
          value={archtDesigrCordInfo.contactOne}
          onChange={handleChange}
        />
        <TextField
          required
          label="Contact Two"
          variant="outlined"
          fullWidth
          sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
          type="number"
          name="contactTwo"
          value={archtDesigrCordInfo.contactTwo}
          onChange={handleChange}
        />
      </Box>
      <Box sx={{ display: 'flex', mt: 2, mb: 2 }}>
      <TextField
          required
          label="Cordinator Name"
          variant="outlined"
          fullWidth
          type="text"
          name="cordinatorName"
          value={archtDesigrCordInfo.cordinatorName}
          onChange={handleChange}
          sx={{ mr: { md: 1 } }}
        />
        <TextField
          required
          label="cordinator Contact"
          variant="outlined"
          fullWidth
          sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
          type="number"
          name="cordinatorContact"
          value={archtDesigrCordInfo.cordinatorContact}
          onChange={handleChange}
        />
      </Box>
      <Box sx={{ width: '100%', mt: 2, mb: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Project Details
        </Typography>
      </Box>
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
          name="projectCordinatorName"
          value={archtDesigrCordInfo.projectCordinatorName}
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
          name="projectCordinatorContact"
          value={archtDesigrCordInfo.projectCordinatorContact}
          onChange={handleChange}
        />
        <TextField
          required
          label="Project Cordinator Email"
          variant="outlined"
          fullWidth
          sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
          type="email"
          name="projectCordinatorEmail"
          value={archtDesigrCordInfo.projectCordinatorEmail}
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
