import React from 'react'
import { Button, Container } from './styled'

const Header = () => {
  return (
    <Container>
      <div>
        <h3>
          Usuarios
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
        
      <div>
        <Button>Previsualizar</Button>
        <Button>Agregar nuevo usuario</Button>
      </div>
    </Container>
  )
}

export default Header
