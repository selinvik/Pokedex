/* eslint-disable react/prop-types */
import { useCurrentPokemonQuery } from 'shared/api/pokemons';

const PokemonCard = ({ url = '' }) => {
  const { data: pokemon } = useCurrentPokemonQuery(
    {
      url
    },
    { skip: !url }
  );

  return <div>{pokemon.name}</div>;
};

export default PokemonCard;
