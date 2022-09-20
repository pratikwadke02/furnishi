import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
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
  Modal,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  FormLabel,
  FormControlLabel,
  FormGroup,
  
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
// import { getSurveyById } from '../actions/survey';
import Page from '../components/Page';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '100%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 800,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 1,
  p: 2,
};

const WorkPartnerDetails = () => {
  const { id } = useParams();
  const intId = parseInt(id, 10);
  //   console.log(intId);

  const dispatch = useDispatch();

  const [workPartnerInfo, setworkPartnerInfo] = useState([]);

  useEffect(() => {
    const getWorkPartnerData = async () => {
      const { data } = await axios.get(`http://localhost:8080/api/wsb/getWorkPartnerById/${intId}`);
      //   console.log(data);
      setworkPartnerInfo(data);
      console.log(workPartnerInfo);
    };
    getWorkPartnerData();
  }, []);

  
  const tools = [
    'Electric Cutter',
    'Electric Drill Machine',
    'Hammer Machine',
    'Router',
    'Paper Cutter',
    'Allen Key Set',
    'Drills - 2.5',
    'Drills - 3',
    'Drills - 5',
    'Drills - 8',
    'Drills - 10',
    'Drills - 15',
    'Drills - 18',
    'Drills - 19',
    'Drills - 20',
    'Drills - 30',
    'Drills - 32',
    'Drills - 35',
    'Screw Driver Bit PH 2',
    'Screw Driver Bit Pz 3',
    'Screw Driver Bit Flat',
    'Complete Screw Driver Bit Set',
    'Blue',
    'Thread',
    'Water Level',
    'Spirit Level',
  ]

  const typedOfSurvey = ['Kitchen', 'Wardrobe','Bed', 'Vanity'];

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
    };
  }

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const [personName, setPersonName] = React.useState([]);

  

  const theme = useTheme();
  
  const [workPartnerAdminInfo, setworkPartnerAdminInfo] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    workPlace: '',
    email: '',
    mobileNumber: '',
    presentAddress: '',
    permanentAddress: '',
    tools: [],
    typeOfSurvey: [],
    workExperience: '',
    knowledgeOfElectrical: '',
    knowledgeOfPlumbing: '',
    smartPhone: '',
    companiesWorked: '',
    teamMembers: '',
    aadharFileNames: [],
    panFileNames: [],
    policeVerificationFileNames : [],
    aadharFiles: [],
    panFiles: [],
    policeVerificationFiles: [],
    companyName: '',
    accountNumber: '',
    ifscCode: '',
    holderName: '',
    panNumber: '',
    gstNumber: '',
    selfDeclaration: false,
  });


  const [survey, setSurvey] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    presentAddress: '',
    permanentAddress: '',
    workPlace: '',
  });

  const handleChangeMultiSelect = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    setworkPartnerAdminInfo({
      ...workPartnerAdminInfo,
      tools: value,
    });
  };

  const handleChange = ({ currentTarget: input }) => {
    setworkPartnerAdminInfo({
      ...workPartnerAdminInfo,
      [input.name]: input.value,
    });
    console.log(workPartnerAdminInfo);
  };

  const [declarations, setDeclarations] = useState({
    tobacco: false,
    alcohol: false,
    smoking: false,
    dress: false,
  });

  const handleChangeCheckBox = (event) => {
    setDeclarations({ ...declarations, [event.target.name]: true });
    let check = 0;
    Object.keys(declarations).forEach((key) => {
      if(key === true){
        check += 1;
        if(check === 4){
          setworkPartnerAdminInfo({
            ...workPartnerAdminInfo,
            selfDeclaration: true,
          });
        }
      }
    });
  };

  const handleSubmit = async (e) => {
    try {
      console.log(survey);
      await axios
        .post('http://localhost:8080/api/wsb/addSurvey', survey)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      setSurvey({
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        presentAddress: '',
        permanentAddress: '',
        workPlace: '',
      });
      alert('Survey added successfully');
    } catch (error) {
      console.log(error);
    }
  };

  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
    handleCloseModal();
  };

  return (
    <>
      <Page title="User">
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              Work Partner Details
            </Typography>
          </Stack>
          <Card sx={{ p: 2 }}>
            <form>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mb: 2 }}>
                <TextField
                  label={workPartnerAdminInfo.firstName === "" ? "" : "First Name"}
                  variant="outlined"
                  fullWidth
                  sx={{ mr: { md: 1 } }}
                  name="firstName"
                  value={workPartnerAdminInfo.firstName === "" ? (workPartnerInfo.firstName) : (workPartnerAdminInfo.firstName)}
                  onChange={handleChange}
                />
                <TextField
                  required
                  label={workPartnerAdminInfo.middleName === "" ? "" : "Middle Name"}
                  variant="outlined"
                  fullWidth
                  sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                  type="text"
                  name="middleName"
                  value={workPartnerAdminInfo.middleName === "" ? (workPartnerInfo.middleName) : (workPartnerAdminInfo.middleName)}
                  onChange={handleChange}
                />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <TextField
                  required
                  label={workPartnerAdminInfo.lastName === "" ? "" : "Last Name"}
                  variant="outlined"
                  fullWidth
                  sx={{ mr: { md: 1 } }}
                  type="text"
                  name="lastName"
                  value={workPartnerAdminInfo.lastName === "" ? (workPartnerInfo.lastName) : (workPartnerAdminInfo.lastName)}
                  onChange={handleChange}
                />
                <TextField
                  required
                  label={workPartnerAdminInfo.email === "" ? "" : "Best Suitable Work Place"}
                  variant="outlined"
                  fullWidth
                  sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                  type="text"
                  name="workPlace"
                  value={workPartnerAdminInfo.workPlace === "" ? (workPartnerInfo.workPlace) : (workPartnerAdminInfo.workPlace)}
                  onChange={handleChange}
                />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mb: 2 }}>
                <TextField
                  required
                  label={workPartnerAdminInfo.email === "" ? "" : "Email"}
                  variant="outlined"
                  fullWidth
                  sx={{ mr: { md: 1 } }}
                  name="email"
                  value={workPartnerAdminInfo.email === "" ? (workPartnerInfo.email) : (workPartnerAdminInfo.email)}
                  onChange={handleChange}
                />
                <TextField
                  required
                  label={workPartnerAdminInfo.mobileNumber === "" ? "" : "Mobile Number"}
                  variant="outlined"
                  fullWidth
                  sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                  type="number"
                  name="mobileNumber"
                  value={workPartnerAdminInfo.mobileNumber === "" ? (workPartnerInfo.mobileNumber) : (workPartnerAdminInfo.mobileNumber)}
                  onChange={handleChange}
                />
              </Box>
              <Box sx={{ display: 'flex', mt: 2, mb: 2 }}>
                <TextField
                  required
                  label={workPartnerAdminInfo.presentAddress === "" ? "" : "Present Address"}
                  variant="outlined"
                  multiline
                  rows={2}
                  fullWidth
                  name="presentAddress"
                  value={workPartnerAdminInfo.presentAddress === "" ? (workPartnerInfo.presentAddress) : (workPartnerAdminInfo.presentAddress)}
                  onChange={handleChange}
                />
              </Box>
              <Box sx={{ display: 'flex', mt: 2, mb: 2 }}>
                <TextField
                  required
                  label={workPartnerAdminInfo.permanentAddress === "" ? "" : "Permanent Address"}
                  variant="outlined"
                  multiline
                  rows={2}
                  fullWidth
                  name="permanentAddress"
                  value={workPartnerAdminInfo.permanentAddress === "" ? (workPartnerInfo.permanentAddress) : (workPartnerAdminInfo.permanentAddress)}
                  onChange={handleChange}
                />
              </Box>
              <Box sx={{ display: 'flex', mt: 2, mb: 2 }}>
                <FormControl sx={{ width: '100%', mr: { md: 1 } }}>
                  <InputLabel id="demo-multiple-name-label">Tools</InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={workPartnerAdminInfo.tools}
                    onChange={handleChangeMultiSelect}
                    input={<OutlinedInput label="Tools" />}
                    MenuProps={MenuProps}
                    name="tools"
                  >
                    {tools.map((name) => (
                      <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  required
                  label="Work Experience (in years)"
                  variant="outlined"
                  fullWidth
                  sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                  type="number"
                  name="workExperience"
                    value={workPartnerAdminInfo.workExperience}
                  onChange={handleChange}
                />
              </Box>
              <Box sx={{ display: 'flex', mt: 2, mb: 2 }}>
                <FormControl sx={{ width: '100%', mr: { md: 1 } }}>
                  <InputLabel id="demo-multiple-name-label">Type of Survey</InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={personName}
                    onChange={handleChangeMultiSelect}
                    input={<OutlinedInput label="Types Of Survey" />}
                    MenuProps={MenuProps}
                    name="typesOfSurvey"
                  >
                    {typedOfSurvey.map((name) => (
                      <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl fullWidth sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
                  <InputLabel id="demo-simple-select-label">Knowledge of Electrical Point</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={workPartnerAdminInfo.knowledgeOfElectricalPoint}
                    label="Knowledge Of Electrical Point"
                    onChange={handleChange}
                    name="knowledgeOfElectricalPoint"
                  >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ display: 'flex', mt: 2, mb: 2 }}>
                <FormControl fullWidth sx={{ mr: { md: 1 } }}>
                  <InputLabel id="demo-simple-select-label">Knowledge of Plumbing Point</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={workPartnerAdminInfo.knowledgeOfPlumbingPoint}
                    label="Knowledge Of Plumbing Point"
                    onChange={handleChange}
                    name="knowledgeOfPlumbingPoint"
                  >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
                  <InputLabel id="demo-simple-select-label">Smart Phone</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={workPartnerAdminInfo.smartPhone}
                    label="Smart Phone"
                    onChange={handleChange}
                    name="smartPhone"
                  >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ display: 'flex', mt: 2, mb: 2 }}>
                <TextField
                  label="Worked For Companies (Name)"
                  variant="outlined"
                  fullWidth
                    // sx={{ mr: { md: 1 }}}
                  type="text"
                    value={workPartnerAdminInfo.companiesWorked}
                  onChange={handleChange}
                  name="companiesWorked"
                />
              </Box>
              <Box sx={{ display: 'flex', mt: 2, mb: 2 }}>
                <TextField
                  label="Team Member Numbers"
                  variant="outlined"
                  fullWidth
                  sx={{mr: { md: 1 }}}
                  type="number"
                  name="teamMemberNumbers"
                    value={workPartnerAdminInfo.teamMemberNumbers}
                  onChange={handleChange}
                />
                <Box sx={{ width: '100%',  ml: { md: 1 }, mt: { xs: 2, md: 0 },  }}>
                <Button variant="outlined" component="label"  sx={{height: '50px', width:'100%'}}>
                  Upload Aadhar of all Team Members
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
                </Box>
                </Box>
                <Box sx={{ display: 'flex', mt: 2, mb: 2 }}>
                <Button
                  variant="outlined"
                  component="label"
                  sx={{ width: '100%',mr: { md: 1 }, height: '50px' }}
                >
                  Upload Selfie of all Team Members
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
                <Button variant="outlined" component="label" sx={{ width: '100%', ml: { md: 1 }, mt: { xs: 2, md: 0 } , height: '50px' }}>
                  Upload Police Verification of all Team Members
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
              </Box>
              <Box sx={{ display: 'flex', mt: 2, mb: 2 }}>
                <TextField
                  label="Company Name"
                  variant="outlined"
                  fullWidth
                  sx={{ mr: { md: 1 } }}
                  type="text"
                  name="companyName"
                    value={workPartnerAdminInfo.companyName}
                  onChange={handleChange}
                />
                <TextField
                  label="Account Number"
                  variant="outlined"
                  fullWidth
                  sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                  type="number"
                  name="accountNumber"
                    value={workPartnerAdminInfo.accountNumber}
                  onChange={handleChange}
                />
              </Box>
              <Box sx={{ display: 'flex', mt: 2, mb: 2 }}>
                <TextField
                  label="Holder Name"
                  variant="outlined"
                  fullWidth
                  sx={{ mr: { md: 1 } }}
                  type="text"
                  name="holderName"
                    value={workPartnerAdminInfo.holderName}
                  onChange={handleChange}
                />
                <TextField
                  label="IFSC Code"
                  variant="outlined"
                  fullWidth
                  sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                  type="number"
                  name="ifscCode"
                    value={workPartnerAdminInfo.ifscCode}
                  onChange={handleChange}
                />
              </Box>
              <Box sx={{ display: 'flex', mt: 2, mb: 2 }}>
                <TextField
                  label="PAN Number"
                  variant="outlined"
                  fullWidth
                  sx={{ mr: { md: 1 } }}
                  type="number"
                  name="panNumber"
                    value={workPartnerAdminInfo.panNumber}
                  onChange={handleChange}
                />
                <TextField
                  label="GST Number"
                  variant="outlined"
                  fullWidth
                  sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                  type="number"
                  name="gstNumber"
                    value={workPartnerAdminInfo.gstNumber}
                  onChange={handleChange}
                />
              </Box>
              {/* <Box sx={{ display: 'flex', mt: 2, mb: 2 }}>
                
                <Box sx={{ width: '100%', ml: { md: 2}, mt: { xs: 2, md: 0 } }} />
              </Box> */}
                <Box sx={{ display: 'flex', mt: 2, mb: 2 }}>
                <FormControl sx={{}} component="fieldset" variant="standard">
        <FormLabel component="legend">Self Declaration</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox  onChange={handleChangeCheckBox} name="tobacco" />
            }
            label="No Tobacco/Pan/Gutka Chewing"
          />
          <FormControlLabel
            control={
              <Checkbox  onChange={handleChangeCheckBox} name="alcohol" />
            }
            label="No Alcohol At Site"
          />
          <FormControlLabel
            control={
              <Checkbox  onChange={handleChangeCheckBox} name="smoking" />
            }
            label="No Smoking At site"
          />
          <FormControlLabel
            control={
              <Checkbox  onChange={handleChangeCheckBox} name="dress" />
            }
            label="In Complete Dress On Site"
          />
        </FormGroup>
      </FormControl>
                </Box>
              <Box>
                <Button variant="contained" color="primary" onClick={handleOpenModal}>
                  Submit
                </Button>
              </Box>
            </form>
          </Card>
        </Container>
      </Page>
    </>
  );
};

export default WorkPartnerDetails;
