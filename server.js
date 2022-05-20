const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3001;
const mySQL = require('mysql');
app.use(cors());
app.use(express.json());
app.use("/", router);
require("dotenv").config();

app.get("/api", (req, res) => {
    res.json({message: "Hello from server!"});
});
const database = mySQL.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "take_a_byte"
});
database.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});
app.use(bodyParser.urlencoded({extended: true}))

app.post("/pages/sign_up", (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const userPassword = req.body.userPassword;
    const sqlInsertUser = "INSERT INTO users (firstName, lastName, email, userPassword) VALUES (?, ?, ?, ?);";
    database.query(sqlInsertUser, [firstName, lastName, email, userPassword], (err, result) => {
        if (err) {
            console.log(result);
        }
        else {
            const sqlGetUser = "SELECT * FROM users WHERE email = ? AND userPassword = ?;";
            database.query(sqlGetUser,
                [email, userPassword],
                (err, result) => {
                    if (err) {
                        console.log(result);
                    }
                    if (result.length > 0) {
                        res.send(result)
                    } else {
                        res.send({message: "Wrong"})
                    }
                });
        }
    });

});

app.post("/pages/log_in", (req, res) => {
    const email = req.body.email;
    const userPassword = req.body.userPassword;
    const sqlGetUser = "SELECT * FROM users WHERE email = ? AND userPassword = ?;";
    database.query(sqlGetUser, [email, userPassword], (err, result) => {
        if (err) {
            console.log(result);
        }
        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({message: "Wrong"})
        }
    });
});

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        pass: process.env.WORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
});

router.post("/pages/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
        from: name,
        to: process.env.EMAIL,
        subject: "CONTACT FORM",
        html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
    };
    transporter.sendMail(mail, (error) => {
        if (error) {
            console.log(error)
            res.json({status: "ERROR"});
        } else {
            console.log("Email sent");
            res.json({status: "Sent"});
        }
    });
});
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

