const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
app.use(cors());
app.use(express.json());
app.use("/", router);
require("dotenv").config();

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });

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
            res.json({ status: "ERROR" });
        } else {
            console.log("Email sent");
            res.json({ status: "Sent" });
        }
    });
});


