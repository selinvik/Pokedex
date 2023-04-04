import { api } from 'shared/api';

const pokemonsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    listPokemons: builder.query({
      query: () => 'pokemon'
    }),
    currentPokemon: builder.query({
      query: ({ url }) => url
    })
  })
});

export const { useListPokemonsQuery, useCurrentPokemonQuery } = pokemonsApi;
