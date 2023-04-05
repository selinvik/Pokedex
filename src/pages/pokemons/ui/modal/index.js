/* eslint-disable react/prop-types */
import { Fade, Modal, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalContent: {
    backgroundColor: 'white',
    boxShadow: '10px 5px 5px black',
    padding: 20
  }
}));

const PokemonModal = ({ selectedPokemon = {}, handleCloseModal = () => {} }) => {
  const classes = useStyles();

  if (selectedPokemon) {
    return (
      <Modal
        className={classes.modal}
        open={Boolean(selectedPokemon)}
        onClose={handleCloseModal}
        closeAfterTransition>
        <Fade in={Boolean(selectedPokemon)}>
          <div className={classes.modalContent}>
            <Typography variant="h4">{selectedPokemon.name}</Typography>
            <Typography variant="h6" color="textSecondary">
              {selectedPokemon.types.map((type) => type.type.name).join(', ')}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {selectedPokemon.description}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Height: {selectedPokemon.height} | Weight: {selectedPokemon.weight}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Abilities:{' '}
              {selectedPokemon.abilities.map((ability) => ability.ability.name).join(', ')}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Base experience: {selectedPokemon.base_experience}
            </Typography>
          </div>
        </Fade>
      </Modal>
    );
  }

  return null;
};

export default PokemonModal;
