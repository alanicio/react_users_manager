import React from "react";
import PropTypes from "prop-types";
import Row from "../Row";
import { Table, TableTitle, Thead } from "./styled";

const UsersTable = ({ users, getRole, changeStatus, deleteUser, editUser }) => {
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
        {users.map((user) => (
          <Row
            key={user.id}
            user={user}
            getRole={getRole}
            changeStatus={changeStatus}
            deleteUser={deleteUser}
            editUser={editUser}
          />
        ))}
      </tbody>
    </Table>
  );
};

UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
  getRole: PropTypes.func.isRequired,
  changeStatus: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  editUser: PropTypes.func.isRequired,
};

export default UsersTable;
