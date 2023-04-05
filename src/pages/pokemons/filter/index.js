/* eslint-disable react/prop-types */
import { Chip, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  filterContainer: {
    marginBottom: 20
  },
  chip: {
    marginRight: 20,
    marginBottom: 20
  }
}));

const types = [
  'normal',
  'fire',
  'water',
  'electric',
  'grass',
  'ice',
  'fighting',
  'poison',
  'ground',
  'flying',
  'psychic',
  'bug',
  'rock',
  'ghost',
  'dragon',
  'dark',
  'steel',
  'fairy'
];

const Filter = ({
  typeFilters = [],
  handleTypeFilterChange = () => {},
  handleDeleteTypeFilters = () => {}
}) => {
  const classes = useStyles();

  return (
    <div className={classes.filterContainer}>
      <Typography variant="subtitle1">Filter by type:</Typography>
      <ToggleButtonGroup value={typeFilters} onChange={handleTypeFilterChange}>
        {types.map((type) => (
          <ToggleButton key={type} value={type}>
            {type}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      {typeFilters.map((type) => (
        <Chip key={type} label={type} className={classes.chip} onDelete={handleDeleteTypeFilters} />
      ))}
    </div>
  );
};

export default Filter;
