/* eslint-disable react/prop-types */
import { Button, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20
  },
  searchInput: {
    flexGrow: 1,
    marginRight: 20
  },
  searchButton: {
    marginLeft: 20
  }
}));

const PokemonSearch = ({
  searchText = '',
  handleSearchTextChange = () => {},
  setSearchText = () => {}
}) => {
  const classes = useStyles();

  return (
    <div className={classes.searchContainer}>
      <TextField
        className={classes.searchInput}
        label="Search"
        variant="outlined"
        value={searchText}
        onChange={handleSearchTextChange}
      />
      <Button
        className={classes.searchButton}
        variant="contained"
        color="primary"
        onClick={() => setSearchText('')}>
        Clear
      </Button>
    </div>
  );
};

export default PokemonSearch;
