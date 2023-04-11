const { postDataQuery } = require('../../database/');

const { postTaskData } = postDataQuery;

const addTaskController = (req, res) => {
  const { title, description,deadline, user_id ,project_id } = req.body;

  postTaskData(title, description,deadline, user_id,project_id)
    .then((data) =>
      res.json({
        error: false,
        count: data.rowCount,
        data: data.rows,
      })
    )
    .catch((err) =>
      res.status(500).json({
        message: err.message,
      })
    );
};

module.exports = addTaskController;
