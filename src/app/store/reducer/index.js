import { combineReducers } from '@reduxjs/toolkit';

import pokemonsReducer from './pokemons';

export const rootReducer = combineReducers({
  pokemons: pokemonsReducer
});
