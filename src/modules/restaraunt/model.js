const { fetchAll, fetch } = require("../../utils/postgres");

const GET_ALL_RES = `select * from restaurants`;

const ALL_RES = `
    select * from restaurants WHERE res_cotegory_id = $1
`;

const CREATE_RES = `
    INSERT INTO restaurants (res_name, res_cotegory_id, res_img) VALUES ($1, $2, $3) RETURNING *
`;

const DELETE_RES = `delete from restaurants WHERE res_id = $1 RETURNING *`;

const getAllRes = () => fetchAll(GET_ALL_RES);
const getRes = (id) => fetchAll(ALL_RES, id);
const createdRes = (name, res_cotegory_id, img) =>
  fetch(CREATE_RES, name, res_cotegory_id, img);

const deleteRes = (id) => fetch(DELETE_RES, id);

module.exports = {
  getAllRes,
  getRes,
  createdRes,
  deleteRes,
};
