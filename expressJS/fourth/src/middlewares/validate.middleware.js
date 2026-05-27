import userSchema from "../schemas/user.schema.js";

const validate = (req, res, next) => {
  try {
    userSchema.parse(req.body);
    next();
  } catch (err) {
    return res.status(400).json({
      success: false,
      errors: err.issues,
    });
  }
};

export { validate };
