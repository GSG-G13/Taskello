const { getDataQuery } = require('../../database/');

const { getAllTasksDataQuery } = getDataQuery;

const getAllTasksDataController = (req, res) => {
    getAllTasksDataQuery()
      .then((data) => {
        res.json({
          error: false,
          count: data.rowCount,
          data: data.rows,
        });
      })
      .catch((err) => {
        res.json({
          error: true,
          message: err.message,
        });
      });
  };
  
module.exports = getAllTasksDataController;
