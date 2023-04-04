/* eslint-disable react/prop-types */
import {
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Pagination as MaterialPagination
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20
  }
}));

const Pagination = ({
  numPages = 0,
  itemsPerPage = 10,
  page = 0,
  handleItemsPerPageChange = () => {},
  handlePageChange = () => {}
}) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.paginationContainer}>
        <MaterialPagination
          count={numPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </div>
      <div>
        <Typography variant="subtitle1">Items per page:</Typography>
        <ToggleButtonGroup value={itemsPerPage} exclusive onChange={handleItemsPerPageChange}>
          <ToggleButton value={10}>10</ToggleButton>
          <ToggleButton value={20}>20</ToggleButton>
          <ToggleButton value={50}>50</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
};

export default Pagination;
