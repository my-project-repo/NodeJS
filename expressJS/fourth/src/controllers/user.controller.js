import { success } from "zod";

let list = [];
const getUser = (req, res) => {
  res.status(201).send(list);
};

const postUser = (req, res) => {
  const { email, password } = req.body;
  list.push({ email, password });
  res.status(201).json({
    success: true,
    data: {
      email,
      password,
    },
  });
};

export { getUser, postUser };
