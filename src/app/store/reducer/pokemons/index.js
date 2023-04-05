import { createSlice } from '@reduxjs/toolkit';

// const resetStateByFilters = (state) => {
//   state.mapCenterPoint = {};
//   state.openedReport = {
//     name: '',
//     areaId: null,
//     areaName: ''
//   };
// };

const initialState = {
  offset: 1,
  limit: 1
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
      state.offset = 1;
    }
  }
});

export const { resetState, setOffset, setLimit } = pokemons.actions;

export default pokemons.reducer;
