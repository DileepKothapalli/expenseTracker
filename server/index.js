const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const app = express();
const apiPort = process.env.PORT || 8080;
const db = require("./config/db.config");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/login", (req, res) => {
  email = req.body.email;
  password = req.body.password;

  console.log(password);
  db.query(
    `SELECT * FROM USERS WHERE email = "${email}"`,
    function (err, result, fields) {
      valid = false;
      if (result.length != 0) {
        bcrypt.compare(password, result[0].password).then((isMatch) => {
          if (isMatch) {
            const payload = {
              email: email,
              createdAt: result[0].created_at,
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
                  token: "Bearer" + token,
                });
              }
            );
          } else {
            res
              .status(400)
              .json({ status: "error", error: "Password incorrect" });
          }
        });
      } else {
        console.log(result);
      }
    }
  );
});

app.post("/register", (req, res) => {
  email = req.body.email;
  password = req.body.password;
  phone = req.body.phone;
  console.log(email);
  var hashedpass = "";
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      hashedpass = hash;
      console.log(hashedpass);
    });
  });

  var sql = `INSERT INTO USERS ( email,password, phone_number  , created_at) VALUES ("${email}", "${hashedpass}", "${phone}", NOW())`;
  db.query(sql, function (err, result) {
    if (err) console.error(err);
    console.log("record inserted");
    console.log(first);
    res.send({ status: "ok", error: "User Not Found" });
  });
});

app.get("/login", (req, res) => {
  res.status.json({ status: "error", error: "User Not Found" });
});

app.listen(apiPort, () => {
  console.log(`server running on port ${apiPort}`);
});
