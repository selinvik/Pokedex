import { api } from 'shared/api';

const pokemonsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    listPokemons: builder.query({
      query: ({ limit = 10 }) => `pokemon?limit=${limit}`
    }),
    currentPokemon: builder.query({
      query: ({ url }) => url
    })
  })
});

export const { useListPokemonsQuery, useCurrentPokemonQuery } = pokemonsApi;
