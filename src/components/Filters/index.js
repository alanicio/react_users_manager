import React from "react";
import PropTypes from "prop-types";
import { Container, Icon, Select, TextInput } from "./styled";

const Filters = ({ roles, setSearch, setPerPage }) => {
  return (
    <Container>
      <TextInput>
        <label>Búsqueda</label>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
      </TextInput>

      <Select onChange={(e) => setPerPage(parseInt(e.target.value))}>
        <option value={5}>5 por página</option>
        <option value={8}>8 por página</option>
        <option value={10}>10 por página</option>
      </Select>

      <Select>
        <option>Ordenar de A - Z</option>
        <option>Ordenar de Z - A</option>
        <option>Ordenar por Rol</option>
        <option>Ordenar por Status</option>
      </Select>

      <Select>
        <option>Todos</option>
        {roles.map(({ id, position }) => (
          <option key={id}>{position}</option>
        ))}
      </Select>

      <Icon className="fas fa-list" selected={true}></Icon>
      <Icon className="fas fa-th"></Icon>
    </Container>
  );
};

Filters.propTypes = {
  roles: PropTypes.array.isRequired,
  setSearch: PropTypes.func.isRequired,
  setPerPage: PropTypes.func.isRequired,
};

export default Filters;
