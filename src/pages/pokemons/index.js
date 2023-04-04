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

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    padding: 10
  }
}));

const Pokemons = () => {
  const classes = useStyles();
  const [searchText, setSearchText] = useState('');
  const [typeFilters, setTypeFilters] = useState([]);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const { data: pokemonsList, isSuccess } = useListPokemonsQuery();

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
    setPage(1);
  };

  const handleTypeFilterChange = (event, newTypeFilters) => {
    setTypeFilters(newTypeFilters);
    setPage(1);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value, 10));
    setPage(1);
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
          itemsPerPage={itemsPerPage}
          page={page}
          handleItemsPerPageChange={handleItemsPerPageChange}
          handlePageChange={handlePageChange}
        />
        <PokemonModal selectedPokemon={selectedPokemon} handleCloseModal={handleCloseModal} />
      </div>
    );
  }

  return null;
};

export default Pokemons;
