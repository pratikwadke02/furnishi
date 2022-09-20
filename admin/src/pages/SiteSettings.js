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
import Tools from '../components/siteSettings/Tools';
import LongService from '../components/LongService';
import ShortService from '../components/ShortService';
import AddOnService from '../components/addOnService';
import Page from '../components/Page';
import Date from '../components/Date';

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

const SiteSettings = () => {
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
            Site Settings
          </Typography>
          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Setting
          </Button>
        </Stack>
          <Card sx={{ p: 2 }}>
            <Box>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={headTab} onChange={handleHeadTabChange} aria-label="basic tabs example">
                  <Tab label="Tools" {...a11yProps(0)} />
                  <Tab label="Work Phase" {...a11yProps(1)} />
                  <Tab label="Self Declaration" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <TabPanel value={headTab} index={0}>
                <Tools />
              </TabPanel>
              <TabPanel value={headTab} index={1}>
                <ShortService />
              </TabPanel>
              <TabPanel value={headTab} index={2}>
                <AddOnService />
              </TabPanel>
            </Box>
          </Card>
        </Container>
      </Page>
    </>
  );
};

export default SiteSettings;
