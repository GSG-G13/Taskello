const { getAllUsersQuery } = require('../../database/queries/get');

const getAllUsersController = (req, res) => {
  getAllUsersQuery()
    .then((result) => {
      res.json(result.rows);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ msg: 'Internal Server Error', error: err.message });
    });
};

module.exports = { getAllUsersController };
