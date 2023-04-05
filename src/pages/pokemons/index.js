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
import { setLimit, setOffset } from 'app/store/reducer/pokemons';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    padding: 10
  }
}));

const Pokemons = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [searchText, setSearchText] = useState('');
  const [typeFilters, setTypeFilters] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const { offset, limit } = useSelector((state) => state.rootReducer.pokemons);

  const { data: pokemonsList, isSuccess } = useListPokemonsQuery({
    offset,
    limit
  });

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
    setPage(1);
  };

  const handleTypeFilterChange = (event, newTypeFilters) => {
    setTypeFilters(newTypeFilters);
    setPage(1);
  };

  const handleOffset = (event, value) => {
    dispatch(setOffset(value));
  };

  const handleLimit = (event) => {
    dispatch(setLimit(parseInt(event.target.value, 10)));
  };

  const handleOpenModal = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleCloseModal = () => {
    setSelectedPokemon(null);
  };

  // const filteredPokemons = pokemons.filter((pokemon) => {
  //   const searchTextMatch = pokemon.name.toLowerCase().includes(searchText.toLowerCase());
  //   const typeFilterMatch =
  //     typeFilters.length === 0 || typeFilters.some((type) => pokemon.types.includes(type));
  //   return searchTextMatch && typeFilterMatch;
  // });

  // const numPages = Math.ceil(filteredPokemons.length / itemsPerPage);
  // const startIndex = (page - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;

  if (isSuccess) {
    return (
      <div className={classes.root}>
        <PokemonSearch
          searchText={searchText}
          handleSearchTextChange={handleSearchTextChange}
          setSearchText={setSearchText}
        />
        <Filter
          typeFilters={typeFilters}
          handleTypeFilterChange={handleTypeFilterChange}
          setTypeFilters={setTypeFilters}
        />
        <Grid container spacing={3}>
          {pokemonsList.results.map((item) => (
            <PokemonCard key={item.name} url={item.url} handleOpenModal={handleOpenModal} />
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
