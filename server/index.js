const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const app = express();
const apiPort = process.env.PORT || 8080;
const db = require("./config/db.config");
const KEY = "`[-&pn/1a?)`4'c1k:-{k>/Y#A1R.S^07rm3HOMGm'!<hAIlN^!qFexY36Q4LTV";
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/login", (req, res) => {
  email = req.body.email;
  password = req.body.password;

  db.query(
    `SELECT * FROM users WHERE email = "${email}"`,
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
                  token: token,
                  email: email,
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
        res.status(400).json({ status: "error", error: "Password incorrect" });
      }
    }
  );
});

app.post("/register", async (req, res) => {
  email = req.body.email;
  password = req.body.password;
  const salt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(password, salt);
  phone = req.body.phone;

  var sql = `INSERT INTO users ( email,password, phone_number  , created_at,updated_at) VALUES ("${email}", "${password}", "${phone}", NOW(),NOW())`;
  db.query(sql, function (err, result) {
    if (err) console.error(err);
    console.log("record inserted");
    res.send({ status: "ok", error: "User Not Found" });
  });
});

app.post("/expense", (req, res) => {
  amount = req.body.amount;
  reason = req.body.reason;
  date = req.body.date;
  category = req.body.category;
  email = req.body.email;

  var sql1 = `SELECT * FROM category_master WHERE category = "${category}"`;
  db.query(sql1, function (err, result) {
    if (err) console.error(err);
    if (result) console.log("found");
  });

  var sql = `INSERT INTO transactions (amount,reason, date, created_at , updated_at, email,category,flag ) VALUES ("${amount}", "${reason}", "${date}", NOW(),NOW(),"${email}", "${category}",1)`;
  db.query(sql, function (err, result) {
    if (err) console.error(err);
    console.log("record inserted");
    res.send({ status: "ok", error: "User Not Found" });
  });
});

app.post("/income", (req, res) => {
  amount = req.body.amount;
  reason = req.body.reason;
  date = req.body.date;
  category = req.body.category;
  email = req.body.email;

  var sql = `INSERT INTO transactions (amount,reason, date, created_at , updated_at, email,category,flag ) VALUES ("${amount}", "${reason}", "${date}", NOW(),NOW(),"${email}", "${category}",0)`;
  db.query(sql, function (err, result) {
    if (err) console.error(err);
    console.log("record inserted");
    res.send({ status: "ok", error: "User Not Found" });
  });
});

app.get("/login", (req, res) => {
  res.send({ status: "error", error: "User Not Found" });
});

app.get("/transactions", (req, res) => {
  var sql = `SELECT * FROM  transactions  `;
  db.query(sql, function (err, result) {
    if (err) console.error(err);
    res.send(result);
  });
});

app.listen(apiPort, () => {
  console.log(`server running on port ${apiPort}`);
});
