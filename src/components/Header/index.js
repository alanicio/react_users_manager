import React from "react";
import { Button, Container } from "./styled";
import PropTypes from "prop-types";

const Header = ({ setDisplayModal }) => {
  return (
    <Container>
      <div>
        <h3>Usuarios</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div>
        {/* <Button>Previsualizar</Button> */}
        <Button withBackground={true} onClick={() => setDisplayModal(true)}>
          Agregar nuevo usuario
        </Button>
      </div>
    </Container>
  );
};

Header.propTypes = {
  setDisplayModal: PropTypes.func.isRequired,
};

export default Header;
