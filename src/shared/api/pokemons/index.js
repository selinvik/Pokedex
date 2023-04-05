import { api } from 'shared/api';

const pokemonsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    listPokemons: builder.query({
      query: ({ offset = 1, limit = 1 }) => `pokemon?offset=${offset}&limit=${limit}`
    }),
    currentPokemon: builder.query({
      query: ({ url }) => url
    })
  })
});

export const { useListPokemonsQuery, useCurrentPokemonQuery } = pokemonsApi;
