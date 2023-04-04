import { useListPokemonsQuery } from 'shared/api/pokemons';
import PokemonCard from './pokemon-card';

const Pokemons = () => {
  const { data: pokemonsList, isSuccess } = useListPokemonsQuery();

  if (isSuccess) {
    return (
      <div>
        {pokemonsList.results.map((item) => (
          <PokemonCard key={item.name} url={item.url} />
        ))}
      </div>
    );
  }

  return null;
};

export default Pokemons;
