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
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Iconify from '../components/Iconify';
import Page from '../components/Page';
import ArchitectDesigner from '../components/Master/Architect.Designer';
import ArchitectDesignerCordinator from '../components/Master/Architect.Designer.Cordinator';
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

const Master = () => {
  const [rateMasterData, setRateMasterData] = useState({
    state: '',
    district: '',
    pincode: '',
    serviceType: '',
    serviceName: '',
    installationType: '',
    installableArea: '',
    lightConnection: '',
    floatingShelf: '',
  });

  const [headTab, setHeadTab] = useState(0);
  const [subTab, setSubTab] = useState(0);


  const handleHeadTabChange = (event, newValue) => {
    setHeadTab(newValue);
  };

  const handleSubtabChange = (event, newValue) => {
    setSubTab(newValue);
  };

  const handleChange = ({ currentTarget: input }) => {
    setRateMasterData({ ...rateMasterData, [input.name]: input.value });
    console.log(rateMasterData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Page title="User">
        <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Master
          </Typography>
          {/* <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Setting
          </Button> */}
        </Stack>
          <Card sx={{ p: 2 }}>
            <Box>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={headTab} onChange={handleHeadTabChange} aria-label="basic tabs example">
                  <Tab label="Architect/Designer" {...a11yProps(0)} />
                  <Tab label="Architect/Designer Cordinator" {...a11yProps(1)} />
                  <Tab label="Manager" {...a11yProps(2)} />
                  <Tab label="Product" {...a11yProps(3)} />
                  <Tab label="Customer" {...a11yProps(4)} />
                </Tabs>
              </Box>
              <TabPanel value={headTab} index={0}>
                <ArchitectDesigner />
              </TabPanel>
              <TabPanel value={headTab} index={1}>
                <ArchitectDesignerCordinator />
              </TabPanel>
              <TabPanel value={headTab} index={2}>
                <Manager />
              </TabPanel>
              <TabPanel value={headTab} index={3}>
                <Product />
              </TabPanel>
              <TabPanel value={headTab} index={4}>
                <Customer />
              </TabPanel>
            </Box>
          </Card>
        </Container>
      </Page>
    </>
  );
};

export default Master;
