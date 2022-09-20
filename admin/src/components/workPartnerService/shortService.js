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
  TextField,
  Box,

} from '@mui/material';
// components
import { useSelector, useDispatch } from 'react-redux';
import Page from '../Page';
import Label from '../Label';
import Scrollbar from '../Scrollbar';
import Iconify from '../Iconify';
import SearchNotFound from '../SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../../sections/@dashboard/user';
import { updateWorkPartnerShortServices } from '../../actions/workPartner/shortServices';
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
  { id: 'delhi', label: 'Delhi', alignRight: true },
  { id: 'availableCities', label: 'Service Available Cities', alignRight: true },
  { id: 'notAvailableCities', label: 'Service Not Available Cities ', alignRight: true },
  { id: 'food', label: 'Food', alignRight: true },
  { id: 'localFair', label: 'Local Fair', alignRight: true },
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

export default function ShortServices() {
  const shortServiceData = useSelector((state) => state.workPartnerShortService.workPartnerShortServices);

  const [shortService, setShortService] = useState({
    id: 0,
    name: '',
    delhi: 0,
    availableCities: 0,
    notAvailableCities: 0,
    food: 0,
    localFair: 0,
  }
  );

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

  const [open, setOpen] = useState(false);

  const handleOpenModal = (id, name ) => {
    setOpen(true);
    setShortService({
      id,
      name,
    });
  };

  const handleChange = ({ currentTarget: input }) => {
    setShortService({ ...shortService, [input.name]: input.value });
    console.log(shortService);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = shortServiceData.map((n) => n.id);
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

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - shortServiceData.length) : 0;

  const filteredUsers = applySortFilter(shortServiceData, getComparator(order, orderBy), filterName);

  const isUserNotFound = filteredUsers.length === 0;

  const dispatch = useDispatch();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await dispatch(updateWorkPartnerShortServices(shortService));
      setOpen(false);
    } catch (error) {
      console.log(error.message);
    }
  };

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
            <Typography variant="h3">{shortService.name}</Typography>
          </Box>
          <Box sx={{ width: '100%', mt: 3 }}>
            <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mb: 2 }}>
              <TextField
                required
                label="Delhi"
                variant="outlined"
                fullWidth
                sx={{ mr: { md: 1 } }}
                type="number"
                name="delhi"
                value={shortService.delhi}
                onChange={handleChange}
              />
              <TextField
                required
                label="Available Cities"
                variant="outlined"
                fullWidth
                sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                type="number"
                name="availableCities"
                value={shortService.availableCities}
                onChange={handleChange}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mb: 2 }}>
            <TextField
                required
                label="Service Not Available Cities"
                variant="outlined"
                fullWidth
                sx={{ mr: { md: 1 } }}
                type="number"
                name="notAvailableCities"
                value={shortService.notAvailableCities}
                onChange={handleChange}
              />
              <TextField
              required
              label="Food"
              variant="outlined"
              fullWidth
              sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
              type="number"
              name="food"
              value={shortService.food}
              onChange={handleChange}
            />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mb: 2 }}>
              <TextField
                required
                label="Local Fair"
                variant="outlined"
                fullWidth
                sx={{ mr: { md: 1 } }}
                type="number"
                name="localFair"
                value={shortService.localFair}
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
              rowCount={shortServiceData.length}
              numSelected={selected.length}
              onRequestSort={handleRequestSort}
              onSelectAllClick={handleSelectAllClick}
            />
            <TableBody>
              {shortServiceData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((service) => {
                const { id, name, delhi, availableCities, notAvailableCities, food, localFair } = service;
                const isItemSelected = selected.indexOf(id) !== -1;

                return (
                  <TableRow
                    hover
                    key={id}
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
                    <TableCell align="left">{delhi}</TableCell>
                    <TableCell align="left">{availableCities}</TableCell>
                    <TableCell align="left">{notAvailableCities}</TableCell>
                    <TableCell align="left">{food}</TableCell>
                    <TableCell align="left">{localFair}</TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        onClick={() => {handleOpenModal(id, name)}}
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
        count={shortServiceData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
