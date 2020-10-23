import React from 'react'
import PropTypes from 'prop-types'
import { Container, Icon, Select, TextInput } from './styled'

const Filters = props => {
  return (
    <Container>
      <TextInput>
        <label>Búsqueda</label>
        <input type="text"/>
      </TextInput>

      <Select>
        <option>5 por página</option>
        <option>8 por página</option>
        <option>10 por página</option>
      </Select>

      <Select>
        <option>Ordenar de A - Z</option>
        <option>Ordenar de Z - A</option>
        <option>Ordenar por Rol</option>
        <option>Ordenar por Status</option>
      </Select>

      <Select>
        <option>Todos</option>
      </Select>

      <Icon className="fas fa-list" selected={true}></Icon>
			<Icon className="fas fa-th"></Icon>

    </Container>
  )
}

Filters.propTypes = {

}

export default Filters
