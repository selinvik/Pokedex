/* eslint-disable react/prop-types */
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useCurrentPokemonQuery } from 'shared/api/pokemons';

const useStyles = makeStyles(() => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  cardMedia: {
    paddingTop: '100%'
  }
}));

const PokemonCard = ({ url = '' }) => {
  const classes = useStyles();
  const { data: pokemon, isSuccess } = useCurrentPokemonQuery(
    {
      url
    },
    { skip: !url }
  );

  if (isSuccess) {
    return (
      <Grid item xs={12} sm={6} md={4} key={pokemon.id}>
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
              {pokemon.types.join(', ')}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  }

  return null;
};

export default PokemonCard;
