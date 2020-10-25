import React, { useState } from "react";
import Filters from "./components/Filters";
import Header from "./components/Header";
import JsonUsers from "./assets/users";
import JsonRoles from "./assets/roles";
import UsersTable from "./components/UsersTable";
import shortid from "shortid";
import { filteredUsers, getNumberOfPages } from "./helpers";
import Paginator from "./components/Paginator";

function App() {
  JsonUsers.users.forEach((user) => {
    user.id = shortid.generate();
  });

  const [users, setUsers] = useState(JsonUsers.users);
  const [roles] = useState(JsonRoles.roles);
  const [search, setSearch] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [page, setPage] = useState(1);

  const getRol = (id) => {
    const rol = roles.find((rol) => rol.id === id);
    return rol.position;
  };

  return (
    <>
      <Header />
      <Filters roles={roles} setSearch={setSearch} setPerPage={setPerPage} />
      <UsersTable
        users={filteredUsers(users, search, perPage, page)}
        getRol={getRol}
      />
      <Paginator
        pages={getNumberOfPages(users, perPage)}
        page={page}
        setPage={setPage}
      />
    </>
  );
}

export default App;
