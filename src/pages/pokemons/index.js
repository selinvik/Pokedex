/* eslint-disable no-unused-vars */
import { useListPokemonsQuery } from 'shared/api/pokemons';

import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import PokemonModal from './modal';
import PokemonSearch from './search';
import Filter from './filter';
import Pagination from './pagination';
import { Grid } from '@mui/material';
import PokemonCard from './card';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteTypeFilters,
  setLimit,
  setOffset,
  setSearchText,
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
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const { offset, limit, searchText, typeFilters } = useSelector(
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
    console.log(newTypeFilters);
    dispatch(setTypeFilters(newTypeFilters));
  };

  const handleDeleteTypeFilters = (type) => {
    dispatch(deleteTypeFilters(type));
  };

  const handleOpenModal = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleCloseModal = () => {
    setSelectedPokemon(null);
  };

  // const numPages = Math.ceil(filteredPokemons.length / itemsPerPage);
  // const startIndex = (page - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;

  if (isSuccess) {
    return (
      <div className={classes.root}>
        <PokemonSearch
          searchText={searchText}
          handleSearchTextChange={handleSearchTextChange}
          handleDeleteSearchText={handleDeleteSearchText}
        />
        <Filter
          typeFilters={typeFilters}
          handleTypeFilterChange={handleTypeFilterChange}
          handleDeleteTypeFilters={handleDeleteTypeFilters}
        />
        <Grid container spacing={3}>
          {pokemonsList.results.map((item) => (
            <PokemonCard
              key={item.name}
              url={item.url}
              searchText={searchText}
              typeFilters={typeFilters}
              handleOpenModal={handleOpenModal}
            />
          ))}
        </Grid>
        <Pagination
          // numPages={numPages}
          offset={offset}
          limit={limit}
          handleOffset={handleOffset}
          handleLimit={handleLimit}
        />
        <PokemonModal selectedPokemon={selectedPokemon} handleCloseModal={handleCloseModal} />
      </div>
    );
  }

  return null;
};

export default Pokemons;
