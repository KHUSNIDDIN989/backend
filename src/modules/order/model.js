const { fetchAll, fetch } = require("../../utils/postgres");

const ALL_ORDER = `
    select * from orders
`;

const CREATE_ORDER = `
    INSERT INTO orders (
      order_name,
      ordered_user_name,
      ordered_user_number,
      ordered_user_location
      ) VALUES ($1, $2, $3, $4) RETURNING *
`;

const DELETE_ORDER = `
  DELETE
  FROM
    orders
  WHERE
    order_id = $1
  RETURNING *
`;

const getOrder = () => fetchAll(ALL_ORDER);
const createOrder = (
  orderName,
  orderUserName,
  orderUserNumber,
  orderedUserLocation
) =>
  fetch(
    CREATE_ORDER,
    orderName,
    orderUserName,
    orderUserNumber,
    orderedUserLocation
  );
const deleteOrder = (id) => fetch(DELETE_ORDER, id);

module.exports = {
  getOrder,
  createOrder,
  deleteOrder,
};
