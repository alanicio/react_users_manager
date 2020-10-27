import React, { useEffect, useState } from "react";
import Filters from "./components/Filters";
import Header from "./components/Header";
import JsonUsers from "./assets/users";
import JsonRoles from "./assets/roles";
import UsersTable from "./components/UsersTable";
import shortid from "shortid";
import { filterUsers, getNumberOfPages, filterByPages } from "./helpers";
import Paginator from "./components/Paginator";
import UserModal from "./components/UserModal";

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
  const [displayModal, setDisplayModal] = useState(false);
  const [userForModal, setUserForModal] = useState(null);
  const [modalReadOnly, setModalReadOnly] = useState(false);

  useEffect(() => {
    setPage(1);
  }, [search, perPage, roleFilter]);

  useEffect(() => {
    if (!displayModal) {
      setUserForModal(null);
      setModalReadOnly(false);
    }
  }, [displayModal]);

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

  const addUser = (user) => {
    user.id = shortid.generate();
    user.roleId = parseInt(user.roleId, 10);
    setUsers([...users, user]);
  };

  const editUser = (user) => {
    setDisplayModal(true);
    setUserForModal(user);
  };

  const updateUser = (user) => {
    user.roleId = parseInt(user.roleId, 10);
    let usersCopy = [...users];
    const index = usersCopy.findIndex(({ id }) => user.id === id);
    usersCopy[index] = user;
    setUsers(usersCopy);
  };

  const showUser = user => {
    setDisplayModal(true);
    setUserForModal(user);
    setModalReadOnly(true);
  }
  

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
      <UserModal
        roles={roles}
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
        addUser={addUser}
        {...(userForModal ? { userData: userForModal } : {})}
        updateUser={updateUser}
        modalReadOnly={modalReadOnly}
      />
      <Header setDisplayModal={setDisplayModal} />
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
        editUser={editUser}
        showUser={showUser}
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
