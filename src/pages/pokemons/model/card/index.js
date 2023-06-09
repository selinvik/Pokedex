/* eslint-disable react/prop-types */
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { setSelectedPokemon } from 'app/store/reducer/pokemons';
import { useDispatch, useSelector } from 'react-redux';
import { useCurrentPokemonQuery } from 'shared/api/pokemons';

const useStyles = makeStyles(() => ({
  card: {
    height: '100%',
    minWidth: 275,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    cursor: 'pointer'
  },
  cardMedia: {
    paddingTop: '100%'
  }
}));

const Pokemon = ({ url = '' }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { searchText, typeFilters } = useSelector((state) => state.rootReducer.pokemons);

  const { data: pokemon, isSuccess } = useCurrentPokemonQuery(
    {
      url
    },
    { skip: !url }
  );

  const handleOpenModal = (pokemon) => {
    dispatch(setSelectedPokemon(pokemon));
  };

  const pokemonTypes = pokemon?.types.map((type) => type.type.name);
  const pokemonFiltered =
    typeFilters.length === 0 || typeFilters.some((type) => pokemonTypes.includes(type));
  const pokemonSearched = pokemon?.name.toLowerCase().includes(searchText.toLowerCase());

  if (isSuccess && pokemonFiltered && pokemonSearched) {
    return (
      <Grid item xs={12} sm={6} md={4} key={pokemon.id} onClick={() => handleOpenModal(pokemon)}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={pokemon.sprites.front_default}
            title={pokemon.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {pokemon.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {pokemon.types.map((type) => type.type.name).join(', ')}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  }

  return null;
};

export default Pokemon;
