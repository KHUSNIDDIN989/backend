const { fetchAll, fetch } = require("../../utils/postgres");

const ALL_USER = `
    select * from users 
`;

const CREATE_USER = `
    INSERT INTO users (user_name, user_phone) VALUES ( $1, $2 ) RETURNING *
`;

const DELETE_USER = `delete from users WHERE user_id = $1 RETURNING *`;

const getUser = () => fetchAll(ALL_USER);
const createdUser = (name, phone) => fetch(CREATE_USER, name, phone);

const deleteUser = (id) => fetch(DELETE_USER, id);

module.exports = {
  getUser,
  createdUser,
  deleteUser,
};
