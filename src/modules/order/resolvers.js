const model = require("./model");

module.exports = {
  Query: {
    orders: async () => {
      return await model.getOrder();
    },
  },

  ORDER: {
    id: (g) => g.order_id,
    orderName: (g) => g.order_name,
    orderUserName: (g) => g.ordered_user_name,
    orderUserNumber: (g) => g.ordered_user_number,
    orderedUserLocation: (g) => g.ordered_user_location,
    orderedTime: (g) => g.ordered_time,
  },
  Mutation: {
    neworder: async (
      _,
      { orderName, orderUserName, orderUserNumber, orderedUserLocation }
    ) => {
      if (
        orderName &&
        orderUserName &&
        orderUserNumber &&
        orderedUserLocation
      ) {
        const a = await model.createOrder(
          orderName,
          orderUserName,
          orderUserNumber,
          orderedUserLocation
        );
        return a;
      }
    },
    deleteorder: async (_, { id }) => await model.deleteOrder(id),
  },
};
