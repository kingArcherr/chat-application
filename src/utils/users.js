const users = [];

// addUser, removeUser, getUser, getUsersInRoom

const addUser = ({ id, username, room }) => {
  // clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // Validate the data
  if (!username || !room) return { error: 'username and roomm are required' };

  // check for existing user
  const existingUser = users.find(
    (user) => user.username === username && user.room === room
  );

  // validate username
  if (existingUser) return { error: 'username is in use!' };

  const user = { id, username, room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) return users.splice(index, 1)[0];
};

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

const getUsersInRoom = (room) => {
  return users.filter((user) => user.room === room);
};

addUser({ id: 33, username: 'archie', room: 'hey' });
addUser({ id: 343, username: 'archidde', room: 'hey' });
addUser({ id: 333, username: 'archiedd', room: 'hey' });

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
