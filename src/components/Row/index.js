import React from "react";
import PropTypes from "prop-types";
import { Icon, Photo, RoundedSwitch, TableCell, TableRow } from "./styled";

const Row = ({ user, getRol }) => {
  const {
    picture,
    name,
    fathersLastName,
    mothersLastName,
    email,
    roleId,
    active,
  } = user;
  return (
    <TableRow>
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
      <TableCell hideable={true}>{email}</TableCell>
      <TableCell>{getRol(roleId)}</TableCell>
      <TableCell semihideable={true}>
        <RoundedSwitch>
          <input type="checkbox" checked={active} />
          <span></span>
        </RoundedSwitch>
      </TableCell>
      <TableCell>
        <Icon className="far fa-trash-alt"></Icon>
        <Icon className="far fa-edit"></Icon>
      </TableCell>
    </TableRow>
  );
};

Row.propTypes = {
  user: PropTypes.object.isRequired,
  getRol: PropTypes.func.isRequired,
};

export default Row;
