import React, { useEffect, useState } from "react";
import Filters from "./components/Filters";
import Header from "./components/Header";
import JsonUsers from "./assets/users";
import JsonRoles from "./assets/roles";
import UsersTable from "./components/UsersTable";
import shortid from "shortid";
import { filterUsers, getNumberOfPages, filterByPages } from "./helpers";
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
  const [order, setOrder] = useState("a-z");
  const [roleFilter, setFilterByRole] = useState(0);

  useEffect(() => {
    setPage(1);
  }, [search, perPage, roleFilter]);

  const getRole = (id) => {
    const role = roles.find((role) => role.id === id);
    return role.position;
  };

  const changeStatus = (user) => {
    const { active } = user;
    let usersCopy = [...users];
    const index = usersCopy.findIndex(({ id }) => user.id === id);
    user.active = !active;
    usersCopy[index] = user;
    setUsers(usersCopy);
  };

  const deleteUser = (id) => {
    const newUsers = users.filter((user) => id !== user.id);
    setUsers(newUsers);
  };

  const filteredUsers = filterUsers(
    users,
    search,
    perPage,
    page,
    order,
    roleFilter
  );

  return (
    <>
      <Header />
      <Filters
        roles={roles}
        setSearch={setSearch}
        setPerPage={setPerPage}
        setOrder={setOrder}
        setFilterByRole={setFilterByRole}
      />
      <UsersTable
        users={filterByPages(filteredUsers, perPage, page)}
        getRole={getRole}
        changeStatus={changeStatus}
        deleteUser={deleteUser}
      />
      <Paginator
        pages={getNumberOfPages(filteredUsers, perPage)}
        page={page}
        setPage={setPage}
      />
    </>
  );
}

export default App;
