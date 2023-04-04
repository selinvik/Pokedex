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
  filters: {}
};

const pokemons = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    resetState: () => initialState
  }
});

export const { resetState } = pokemons.actions;

export default pokemons.reducer;
