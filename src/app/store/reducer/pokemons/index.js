import { createSlice } from '@reduxjs/toolkit';

const resetOffset = (state) => {
  state.offset = 1;
};

const initialState = {
  offset: 1,
  limit: 1,
  typeFilters: []
};

const pokemons = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    resetState: () => initialState,
    setOffset: (state, action) => {
      state.offset = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
      resetOffset(state);
    },
    setTypeFilters: (state, action) => {
      state.typeFilters = action.payload;
      resetOffset(state);
    },
    deleteTypeFilters: (state, action) => {
      state.typeFilters.filter((t) => t !== action.payload);
    }
  }
});

export const { resetState, setOffset, setLimit, setTypeFilters, deleteTypeFilters } =
  pokemons.actions;

export default pokemons.reducer;
