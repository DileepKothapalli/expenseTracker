import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const KEY = "secretOrKeyJWTRandom";

const USERS = [
  {
    id: 1,
    email: "example1@example.com",
    password: "$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq", // password
    createdAt: "2020-06-14 18:23:45",
  },
  {
    id: 2,
    email: "example2@example.com",
    password: "$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq", // password
    createdAt: "2020-06-14 18:23:45",
  },
  {
    id: 3,
    email: "example3@example.com",
    password: "$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq", // password
    createdAt: "2020-06-14 18:23:45",
  },
  {
    id: 4,
    email: "example4@example.com",
    password: "$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq", // password
    createdAt: "2020-06-14 18:23:45",
  },
];

export default (req, res) => {
  return new Promise((resolve) => {
    const { method } = req;
    try {
      switch (method) {
        case "POST":
          const { email, password } = req.body;
          console.log(req.body);
          if (!email || !password) {
            return res.status(400).json({
              status: "error",
              error: "Request missing username or password",
            });
          }

          const user = USERS.find((user) => {
            return user.email === email;
          });

          if (!user) {
            res.status(400).json({ status: "error", error: "User Not Found" });
          }

          if (user) {
            const userId = user.id,
              userEmail = user.email,
              // userPassword = user.password,
              userPassword = "password",
              userCreated = user.createdAt;

            bcrypt.compare(password, userPassword).then((isMatch) => {
              const payload = {
                id: userId,
                email: userEmail,
                createdAt: userCreated,
              };
              jwt.sign(
                payload,
                KEY,
                {
                  expiresIn: 31556926,
                },
                (err, token) => {
                  res.status(200).json({
                    success: true,
                    token: "Bearer " + token,
                  });
                }
              );
            });
          }

          break;

        case "PUT":
          break;
        case "PATCH":
          break;
      }
    } catch (error) {
      throw error;
    }
    return resolve();
  });
};
