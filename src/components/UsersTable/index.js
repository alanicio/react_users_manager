import React from "react";
import PropTypes from "prop-types";
import Row from "../Row";
import { Table, TableTitle, Thead } from "./styled";

const UsersTable = ({ users, getRol }) => {
  return (
    <Table>
      <Thead>
        <tr>
          <TableTitle hideable={true}></TableTitle>
          <TableTitle>Foto</TableTitle>
          <TableTitle>Nombre</TableTitle>
          <TableTitle semihideable={true}>Apellido Paterno</TableTitle>
          <TableTitle hideable={true}>Apellido Materno</TableTitle>
          <TableTitle hideable={true}>Correo</TableTitle>
          <TableTitle>Rol</TableTitle>
          <TableTitle semihideable={true}>Status</TableTitle>
          <TableTitle></TableTitle>
        </tr>
      </Thead>
      <tbody>
        {users.map(
          (user) => <Row user={user} getRol = {getRol} key={user.id} />
        )}
      </tbody>
    </Table>
  );
};

UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
  getRol: PropTypes.func.isRequired,
};

export default UsersTable;
