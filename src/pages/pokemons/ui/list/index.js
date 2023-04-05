/* eslint-disable react/prop-types */
import { Grid } from '@mui/material';
import Pokemon from 'pages/pokemons/model/card';

const List = ({ pokemonsList = [] }) => (
  <Grid container spacing={3}>
    {pokemonsList.map((item) => (
      <Pokemon key={item.name} url={item.url} />
    ))}
  </Grid>
);

export default List;
