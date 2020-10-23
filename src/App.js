import React, { useState } from "react";
import Filters from "./components/Filters";
import Header from "./components/Header";
import JsonUsers from "./assets/users";
import JsonRoles from "./assets/roles";
import UsersTable from "./components/UsersTable";
import shortid from "shortid";

function App() {
  JsonUsers.users.forEach((user) => {
    user.id = shortid.generate();
  });

  const [users, setUsers] = useState(JsonUsers.users);
  const [roles, setRoles] = useState(JsonRoles.roles);

  const getRol = (id) => {
    const rol = roles.find((rol) => rol.id === id);
    return rol.position;
  };

  return (
    <>
      <Header />
      <Filters roles={roles} />
      <UsersTable users={users} getRol={getRol} />
    </>
  );
}

export default App;
