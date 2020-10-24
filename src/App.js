import React, { useEffect, useState } from "react";
import Filters from "./components/Filters";
import Header from "./components/Header";
import JsonUsers from "./assets/users";
import JsonRoles from "./assets/roles";
import UsersTable from "./components/UsersTable";
import shortid from "shortid";
import { filteredUsers } from "./helpers";

function App() {
  JsonUsers.users.forEach((user) => {
    user.id = shortid.generate();
  });

  const [users, setUsers] = useState(JsonUsers.users);
  const [roles, setRoles] = useState(JsonRoles.roles);
  const [search, setSearch] = useState("");

  const getRol = (id) => {
    const rol = roles.find((rol) => rol.id === id);
    return rol.position;
  };

  return (
    <>
      <Header />
      <Filters roles={roles} setSearch={setSearch} />
      <UsersTable users={filteredUsers(users, search)} getRol={getRol} />
    </>
  );
}

export default App;
