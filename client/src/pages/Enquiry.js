import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
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
  Tab,
  Tabs,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Iconify from '../components/Iconify';
import Page from '../components/Page';
import ArchitectDesigner from '../components/Master/Architect.Designer';
import ArchitectDesignerCordinator from '../components/Master/Architect.Designer.Cordinator';
import NewEnquiry from '../components/Enquiry/NewEnquiry';
import AllEnquiries from '../components/Enquiry/AllEnquiries';
import Manager from '../components/Master/Manager';
import Product from '../components/Master/Product';
import Customer from '../components/Master/Customer';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p:2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Enquiry = () => {

  const products = (useSelector(state => state.product.products));
  const managers = (useSelector(state => state.manager.managers));
  const cordinators = (useSelector(state => state.cordinator.cordinators));
  const archDesigrs = (useSelector(state => state.archtDesigr.archDesigrs));

  const [headTab, setHeadTab] = useState(0);
  const [subTab, setSubTab] = useState(0);


  const handleHeadTabChange = (event, newValue) => {
    setHeadTab(newValue);
  };

  return (
    <>
      <Page title="User">
        <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Enquiry
          </Typography>
          {/* <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Setting
          </Button> */}
        </Stack>
          <Card sx={{ p: 2 }}>
            <Box>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={headTab} onChange={handleHeadTabChange} aria-label="basic tabs example">
                  <Tab label="New Enquiry" {...a11yProps(0)} />
                  <Tab label="All Enquiries" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={headTab} index={0}>
                <NewEnquiry />
              </TabPanel>
              <TabPanel value={headTab} index={1}>
                <AllEnquiries />
              </TabPanel>
            </Box>
          </Card>
        </Container>
      </Page>
    </>
  );
};

export default Enquiry;
