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
  limit: 10
};

const pokemons = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    resetState: () => initialState,
    setLimit: (state, action) => {
      state.limit = action.payload;
    }
  }
});

export const { resetState, setLimit } = pokemons.actions;

export default pokemons.reducer;
