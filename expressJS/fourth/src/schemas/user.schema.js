import { z } from "zod";

const userSchema = z.object({
  email: z.email({ message: "Not a valid email format " }),

  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
});

export default userSchema;
