import React, { createContext, useState } from "react";
import JsonUsers from "../assets/users";
import JsonRoles from "../assets/roles";
import shortid from "shortid";
import { filterUsers, getNumberOfPages, filterByPages } from "../helpers";

export const UsersContext = createContext();

const UsersProvider = (props) => {
  JsonUsers.users.forEach((user) => {
    user.id = shortid.generate();
  });
  const [users, setUsers] = useState(JsonUsers.users);
  const [roles] = useState(JsonRoles.roles);

  const getRole = (id) => {
    const role = roles.find((role) => role.id === id);
    return role.position;
  };

  return (
    <UsersContext.Provider
      value={{
        users,
        roles,
        filterUsers,
        getNumberOfPages,
        filterByPages,
        getRole
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
