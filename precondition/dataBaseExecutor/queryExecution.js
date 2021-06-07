const connect = require("../createConnection");
const queryList = require("./queryList.json");

const crudOperations = {
  getAll: (table) => {
    return connect.execute(
      `${queryList.getAllEmployee} ${table}`,
      (err, res, fields) => {
        console.log(err);
        console.log(res);
        console.log(fields);
      }
    );
  },
};

module.exports = crudOperations;
