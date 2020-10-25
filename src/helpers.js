export const filteredUsers = (users, search, perPage, page) => {
  let filteredUsers = filterBySearch(users, search);
  filteredUsers = filterByPages(filteredUsers,perPage,page);
  return filteredUsers;
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
  });

  return filteredUsers;
};

const filterByPages = (users,perPage,page) => {
  const lastIndex = (page * perPage);
  const startingIndex = lastIndex - perPage;
  return users.slice(startingIndex, lastIndex);
}


export const getNumberOfPages = (users, perPage) => {
  const length = users.length;
  return Math.ceil(length / perPage);
}


