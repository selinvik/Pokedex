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
  limit = 1,
  page = 0,
  handleLimit = () => {},
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
        <ToggleButtonGroup value={limit} exclusive onChange={handleLimit}>
          <ToggleButton value={1}>1</ToggleButton>
          <ToggleButton value={2}>2</ToggleButton>
          <ToggleButton value={5}>5</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
};

export default Pagination;
