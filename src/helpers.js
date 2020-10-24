export const filteredUsers = (users, search) => {
  let filteredUsers = filterBySearch(users, search);
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