export const filterUsers = (users, search, perPage, page, order, role) => {
  orderBy(users, order);
  let filteredUsers = filterBySearch(users, search);
  filteredUsers = filterByRole(filteredUsers, role);
  return filteredUsers;
};

export const filterByPages = (users, perPage, page) => {
  const lastIndex = page * perPage;
  const startingIndex = lastIndex - perPage;
  return users.slice(startingIndex, lastIndex);
};

const filterByRole = (users, role) => {
  if (role > 0) {
    users = users.filter(({ roleId }) => roleId === role);
  }
  return users;
};

const filterBySearch = (users, search) => {
  const filteredUsers = users.filter((user) => {
    const { name, fathersLastName, mothersLastName, email } = user;
    if (
      name.toLowerCase().includes(search.toLowerCase().trim()) ||
      fathersLastName.toLowerCase().includes(search.toLowerCase().trim()) ||
      mothersLastName.toLowerCase().includes(search.toLowerCase().trim()) ||
      email.toLowerCase().includes(search.toLowerCase().trim())
    ) {
      return user;
    }
    return false;
  });

  return filteredUsers;
};

const orderBy = (users, order) => {
  switch (order) {
    case "a-z":
      ascendent(users);
      break;

    case "z-a":
      ascendent(users);
      users.reverse();
      break;

    default:
      break;
  }
};

const compareNames = (a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};

const ascendent = (users) => {
  users.sort(compareNames);
};

export const getNumberOfPages = (users, perPage) => {
  const length = users.length;
  return Math.ceil(length / perPage);
};
