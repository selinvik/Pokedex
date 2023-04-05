/* eslint-disable no-unused-vars */
import { useListPokemonsQuery } from 'shared/api/pokemons';

import { makeStyles } from '@mui/styles';
import { Modal, Search, Filter, Pagination, List } from './ui';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteTypeFilters,
  setLimit,
  setOffset,
  setSearchText,
  setSelectedPokemon,
  setTypeFilters
} from 'app/store/reducer/pokemons';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    padding: 10
  }
}));

const Pokemons = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { offset, limit, searchText, typeFilters, selectedPokemon } = useSelector(
    (state) => state.rootReducer.pokemons
  );

  const { data: pokemonsList, isSuccess } = useListPokemonsQuery({
    offset,
    limit
  });

  const handleOffset = (event, value) => {
    dispatch(setOffset(value));
  };

  const handleLimit = (event) => {
    dispatch(setLimit(parseInt(event.target.value, 10)));
  };

  const handleSearchTextChange = (event) => {
    dispatch(setSearchText(event.target.value));
  };

  const handleDeleteSearchText = () => {
    dispatch(setSearchText(''));
  };

  const handleTypeFilterChange = (event, newTypeFilters) => {
    dispatch(setTypeFilters(newTypeFilters));
  };

  const handleDeleteTypeFilters = (type) => {
    dispatch(deleteTypeFilters(type));
  };

  const handleCloseModal = () => {
    dispatch(setSelectedPokemon(null));
  };

  // const numPages = Math.ceil(filteredPokemons.length / itemsPerPage);
  // const startIndex = (page - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;

  if (isSuccess) {
    return (
      <div className={classes.root}>
        <Search
          searchText={searchText}
          handleSearchTextChange={handleSearchTextChange}
          handleDeleteSearchText={handleDeleteSearchText}
        />
        <Filter
          typeFilters={typeFilters}
          handleTypeFilterChange={handleTypeFilterChange}
          handleDeleteTypeFilters={handleDeleteTypeFilters}
        />
        <List pokemonsList={pokemonsList.results} />
        <Pagination
          // numPages={numPages}
          offset={offset}
          limit={limit}
          handleOffset={handleOffset}
          handleLimit={handleLimit}
        />
        <Modal selectedPokemon={selectedPokemon} handleCloseModal={handleCloseModal} />
      </div>
    );
  }

  return null;
};

export default Pokemons;
