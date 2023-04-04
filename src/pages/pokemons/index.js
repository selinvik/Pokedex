import { useListPokemonsQuery } from 'shared/api/pokemons';
import PokemonCard from './pokemon-card';

import { Grid, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    padding: 10
  },
  formControl: {
    margin: 10,
    minWidth: 120
  }
}));

const Pokemons = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const classes = useStyles();

  const { data: pokemonsList, isSuccess } = useListPokemonsQuery();

  // const filteredPokemons = pokemons
  //   .filter((pokemon) => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()))
  //   .filter((pokemon) => (typeFilter ? pokemon.types.includes(typeFilter) : true));

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTypeFilter = (event) => {
    setTypeFilter(event.target.value);
  };

  if (isSuccess) {
    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <TextField
            id="search"
            label="Search"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearch}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="type-filter-label">Type</InputLabel>
          <Select
            labelId="type-filter-label"
            id="type-filter"
            value={typeFilter}
            onChange={handleTypeFilter}>
            <MenuItem value="">All Types</MenuItem>
          </Select>
        </FormControl>
        <Grid container spacing={3}>
          {pokemonsList.results.map((item) => (
            <PokemonCard key={item.name} url={item.url} />
          ))}
        </Grid>
      </div>
    );
  }

  return null;
};

export default Pokemons;
