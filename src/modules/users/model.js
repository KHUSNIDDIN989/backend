const { fetchAll, fetch } = require("../../utils/postgres");

const ALL_USERS = `
    SELECT * FROM users ORDER BY user_id
`;

const USER_BY_ID = `
    SELECT * FROM users WHERE user_id = $1
`;

const USER = `
    SELECT * FROM users WHERE user_name = $1 and user_password = $2
`;

const NEW_USER = `
    INSERT INTO users(user_name, user_password) VALUES($1, $2) RETURNING *
`;

const getUsers = () => fetchAll(ALL_USERS);
const getUserByID = (id) => fetch(USER_BY_ID, id);
const newUser = (name, password) => fetch(NEW_USER, name, password);
const login = (name, password) => fetch(USER, name, password);

module.exports = {
  getUsers,
  getUserByID,
  newUser,
  login,
};
