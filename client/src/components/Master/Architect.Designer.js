import React from 'react';
import { Box, TextField, Button, Typography, Select, FormControl, InputLabel, MenuItem } from '@mui/material';
import axios from 'axios';

const ArchitectDesigner = (props) => {

  const {cordinators} = props;

  const [archtDesigrInfo, setArchtDesigrInfo] = React.useState({
    name: '',
    firmName: '',
    firmAddress: '',
    emailId: '',
    contactOne: '',
    contactTwo: '',
    cordinatorName: '',
    cordinatorContact: '',
    cordinatorEmail: '',
    projectName: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(archtDesigrInfo);
      await axios.post('http://localhost:8080/api/wsb/addArchtDesigr', archtDesigrInfo).then((res) => {
        console.log(res);
      });
      setArchtDesigrInfo({
        name: '',
        firmName: '',
        firmAddress: '',
        emailId: '',
        contactOne: '',
        contactTwo: '',
        cordinatorName: '',
        cordinatorContact: '',
        cordinatorEmail: '',
        projectName: '',
      });
      alert('Architect/Designer Added Successfully');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setArchtDesigrInfo({ ...archtDesigrInfo, [e.target.name]: e.target.value });
    console.log(archtDesigrInfo);
  };

  const handleCordinatorChange = (e) => {
    cordinators.map((cordinator) => {
      if(cordinator.id === e.target.value){
        setArchtDesigrInfo({ ...archtDesigrInfo, cordinatorName: cordinator.cordinatorName, cordinatorContact: cordinator.cordinatorContact, cordinatorEmail: cordinator.cordinatorEmail, projectName: cordinator.projectName });
      }
      return null;
    })
    console.log(archtDesigrInfo);
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
          value={archtDesigrInfo.name}
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
          value={archtDesigrInfo.firmName}
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
          value={archtDesigrInfo.firmAddress}
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
          value={archtDesigrInfo.emailId}
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
          value={archtDesigrInfo.contactOne}
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
          value={archtDesigrInfo.contactTwo}
          onChange={handleChange}
        />
      </Box>
      <Box sx={{ width: '100%', mt: 2, mb: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Cordinator Details
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
        <FormControl fullWidth sx={{ mr: { md: 1 } }}>
          <InputLabel id='demo-simple-select-label'>Cordinator Name</InputLabel>
        <Select
          required
          labelId='demo-simple-select-label'
          label="Cordinator Name"
          variant="outlined"
          fullWidth
          type="text"
          name="cordinatorName"
          value={cordinators.cordinatorName}
          onChange={handleCordinatorChange}
        >
          {
            cordinators.map((cordinator, index) => {
              return <MenuItem key={index} value={cordinator.id}>{cordinator.cordinatorName}</MenuItem>
            })
          }
        </Select>
        </FormControl>
        {
          archtDesigrInfo.cordinatorName !== '' ? (
            <TextField
            required
            label="Project Name"
            variant="outlined"
            fullWidth
            sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
            type="text"
            name="projectName"
            value={archtDesigrInfo.projectName}
            onChange={handleChange}
          />
          ) : <Box sx={{width:'100%', ml:1}}/>
        }
      </Box>
      {
        archtDesigrInfo.cordinatorName !== '' ? (
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
        <TextField
          required
          label="Project Cordinator Contact"
          variant="outlined"
          fullWidth
          sx={{ mr: { md: 1 } }}
          type="number"
          name="projectCordinatorContact"
          value={archtDesigrInfo.cordinatorContact}
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
          value={archtDesigrInfo.cordinatorEmail}
          onChange={handleChange}
        />
      </Box> 
        ) : null
      }
      <Box>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default ArchitectDesigner;
