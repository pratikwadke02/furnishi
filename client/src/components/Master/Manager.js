import React, {useState} from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const Manager = () => {
  const [managerInfo, setManagerInfo] = useState({
    name: '',
    firmName: '',
    firmAddress: '',
    emailId: '',
    contactOne: '',
    contactTwo: '',
    CordinatorName: '',
    CordinatorContact: '',
    projectName: '',
    projectCordinatorName: '',
    projectCordinatorContact: '',
    projectAddress: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
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
          label="Name"
          variant="outlined"
          fullWidth
          sx={{ mr: { md: 1 } }}
          type="text"
          name="name"
          value={managerInfo.name}
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
          value={managerInfo.firmName}
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
          value={managerInfo.firmAddress}
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
          value={managerInfo.emailId}
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
          value={managerInfo.contactOne}
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
          value={managerInfo.contactTwo}
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
          name="CordinatorName"
          value={managerInfo.CordinatorName}
          onChange={handleChange}
          sx={{ mr: { md: 1 } }}
        />
        <TextField
          required
          label="Cordinator Contact"
          variant="outlined"
          fullWidth
          sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
          type="number"
          name="CordinatorContact"
          value={managerInfo.CordinatorContact}
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
          value={managerInfo.projectName}
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
          value={managerInfo.projectCordinatorName}
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
          value={managerInfo.projectCordinatorContact}
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
          value={managerInfo.projectCordinatorEmail}
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

export default Manager;
