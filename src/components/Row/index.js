import React from "react";
import PropTypes from "prop-types";
import { Icon, Photo, RoundedSwitch, TableCell, TableRow } from "./styled";

const Row = ({
  user,
  getRole,
  changeStatus,
  deleteUser,
  editUser,
  showUser,
}) => {
  const {
    id,
    picture,
    name,
    fathersLastName,
    mothersLastName,
    email,
    roleId,
    active,
  } = user;

  const clickIconHandler = (e, func, parameter) => {
    e.stopPropagation();
    return func(parameter);
  };

  return (
    <TableRow onClick={() => showUser(user)}>
      <TableCell hideable={true}>
        <i className="fas fa-ellipsis-v" aria-hidden="true"></i>
        <i className="fas fa-ellipsis-v" aria-hidden="true"></i>
      </TableCell>
      <TableCell>
        <Photo photo={picture}></Photo>
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell semihideable={true}>{fathersLastName}</TableCell>
      <TableCell hideable={true}>{mothersLastName}</TableCell>
      <TableCell hideable={true}>
        <abbr title={email}>{email}</abbr>
      </TableCell>
      <TableCell>{getRole(roleId)}</TableCell>
      <TableCell semihideable={true}>
        <RoundedSwitch>
          <input
            type="checkbox"
            checked={active}
            onChange={() => changeStatus(user)}
          />
          <span></span>
        </RoundedSwitch>
      </TableCell>
      <TableCell>
        <Icon
          className="far fa-trash-alt"
          onClick={(e) => clickIconHandler(e, deleteUser, id)}
        ></Icon>
        <Icon
          className="far fa-edit"
          onClick={(e) => clickIconHandler(e, editUser, user)}
        ></Icon>
      </TableCell>
    </TableRow>
  );
};

Row.propTypes = {
  user: PropTypes.object.isRequired,
  getRole: PropTypes.func.isRequired,
  changeStatus: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  editUser: PropTypes.func.isRequired,
  showUser: PropTypes.func.isRequired,
};

export default Row;
