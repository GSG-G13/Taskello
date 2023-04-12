const { loginSchema } = require("../../validation");
const signIn = (req, res) => {
  const { email, password } = req.body;
  const { err, value } = loginSchema.validate(
    { email, password },
    { abortEarly: false }
  );
  if (err) {
    res.status(400).json({
      error: true,
      data: {
        error: err.details,
      },
    });
  }
};
module.exports = { signIn };
