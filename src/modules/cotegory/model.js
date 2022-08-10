const { fetchAll, fetch } = require("../../utils/postgres");

const COTEGOIES = `
    select * from cotegoies
`;

const cotegoies = () => fetchAll(COTEGOIES);

module.exports = {
  cotegoies,
};
