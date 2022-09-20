import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
// material
import {
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
  Modal,
  Box,
  FormLabel,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  TextField,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { updateLongServices } from '../actions/longServices';
// components
import Page from './Page';
import Label from './Label';
import Scrollbar from './Scrollbar';
import Iconify from './Iconify';
import SearchNotFound from './SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../sections/@dashboard/user';
// mock
// import USERLIST from '../_mock/user';

// ----------------------------------------------------------------------

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

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: true },
  { id: 'availability', label: 'Availability', alignRight: true },
  { id: 'installationType', label: 'Installation Type', alignRight: true },
  { id: 'installationArea', label: 'Installation Area', alignRight: true },
  { id: 'lightConnection', label: 'Light Connection', alignRight: true },
  { id: 'floatingShelf', label: 'Floating Shelf', alignRight: true },
  { id: '' },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function CustomerInformation() {
  // const [longServicesData, setlongServicesData] = useState([]);

  const [longService, setlongService] = useState({
    id: '',
    name: '',
    availability: '',
    installationtype: '',
    installableArea: '',
    lightConnection: '',
    floatingShelf: '',
  });

  const longServicesData = useSelector(state => state.longService.longServices);
  // console.log(longServicesData);

  // useEffect(() => {
  //   const getLongServicesData = async () => {
  //     const { data } = await axios.get('http://localhost:8080/api/wsb/getLongServices');
  //     setlongServicesData(data);
  //     console.log(longServicesData);
  //   };
  //   getLongServicesData();
  // }, []);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = longServicesData.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - longServicesData.length) : 0;

  const filteredUsers = applySortFilter(longServicesData, getComparator(order, orderBy), filterName);

  const isUserNotFound = filteredUsers.length === 0;

  const [open, setOpen] = useState(false);

  const handleOpenModal = (id, name, availability, installationtype, installableArea, lightConnection, floatingShelf) => {
    setOpen(true);
    setlongService({
      ...longService,
      id,
      name,
      availability,
      installationtype,
      installableArea,
      lightConnection,
      floatingShelf,
    });
  };

  const handleChange = ({ currentTarget: input }) => {
    setlongService({ ...longService, [input.name]: input.value });
    console.log(longService);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();


  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      await dispatch(updateLongServices(longService));
      setOpen(false);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={style}>
          <Box sx={{ width: '100%', textAlign: 'center' }}>
            <Typography variant="h3">{longService.name}</Typography>
          </Box>
          <Box sx={{ width: '100%', mt: 3 }}>
            <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mb: 2 }}>
              {/* <FormControl sx={{ width: '100%', mr: { md: 1 } }}>
                <InputLabel id="demo-simple-select-autowidth-label">Installation Type</InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  label="Installation Type"
                  // value={workPartnerAdminInfo.tools}
                  onChange={handleChange}
                  name="installationtype"
                >
                  <MenuItem defaultValue="">Select Installation Type</MenuItem>
                  <MenuItem value="Assembled/Flat Pack/Mixed But Machined Product Installation Rates">
                    Assembled/Flat Pack/Mixed But Machined Product Installation Rates
                  </MenuItem>
                  <MenuItem value="Mixed & Incomplete/ No Machined Rates">
                    Mixed & Incomplete/ No Machined Rates
                  </MenuItem>
                </Select>
              </FormControl> */}
              <TextField
                required
                label="Installable Area (Sqft)"
                variant="outlined"
                fullWidth
                sx={{ mr: { md: 1 } }}
                type="number"
                name="installableArea"
                value={longService.installableArea}
                onChange={handleChange}
              />
              <TextField
                required
                label="Floating Shelf (per Pc)"
                variant="outlined"
                fullWidth
                sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                type="number"
                name="floatingShelf"
                value={longService.floatingShelf}
                onChange={handleChange}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mb: 2 }}>
              <TextField
                required
                label="Light Connection (per Pc)"
                variant="outlined"
                fullWidth
                sx={{ mr: { md: 1 } }}
                type="number"
                name="lightConnection"
                value={longService.lightConnection}
                onChange={handleChange}
              />
              <Box sx={{width:'100%', ml: { md: 1 }}} />
            </Box>
            <Box>
              <Button variant="contained" color="primary" type="submit">
                Save
              </Button>
            </Box>
            </form>
          </Box>
        </Card>
      </Modal>
      <Scrollbar>
        <TableContainer sx={{ minWidth: 800 }}>
          <Table>
            <UserListHead
              order={order}
              orderBy={orderBy}
              headLabel={TABLE_HEAD}
              rowCount={longServicesData.length}
              numSelected={selected.length}
              onRequestSort={handleRequestSort}
              onSelectAllClick={handleSelectAllClick}
            />
            <TableBody>
              {longServicesData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((custInfo, index) => {
                const { id, name, availability, installationtype, installableArea, lightConnection, floatingShelf } =
                  custInfo;
                const isItemSelected = selected.indexOf(id) !== -1;

                return (
                  <TableRow
                    hover
                    key={index}
                    tabIndex={-1}
                    role="checkbox"
                    selected={isItemSelected}
                    aria-checked={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox checked={isItemSelected} onChange={(event) => handleClick(event, id)} />
                    </TableCell>
                    <TableCell align="center">
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Typography variant="subtitle2" noWrap>
                          {name}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell align="left">{availability}</TableCell>
                    <TableCell align="left">{installationtype}</TableCell>
                    <TableCell align="left">{installableArea}</TableCell>
                    <TableCell align="left">{lightConnection}</TableCell>
                    <TableCell align="left">
                      {/* <Label variant="ghost" color={(status === 'banned' && 'error') || 'success'}>
                            {sentenceCase(status)}
                          </Label>  */}
                      {floatingShelf}
                    </TableCell>

                    <TableCell align="right">
                      <Button
                        variant="contained"
                        onClick={() => handleOpenModal(id, name, availability, installationtype, installableArea, lightConnection, floatingShelf)}
                      >
                        Update
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>

            {isUserNotFound && (
              <TableBody>
                <TableRow>
                  <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                    <SearchNotFound searchQuery={filterName} />
                  </TableCell>
                </TableRow>
              </TableBody>
            )}
          </Table>
        </TableContainer>
      </Scrollbar>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={longServicesData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
