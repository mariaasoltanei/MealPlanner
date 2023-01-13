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
const fs = require('fs')

function createFile(mealPlanObject) {
    var writeStream = fs.createWriteStream("mealPlan.txt");
    writeStream.write("YOUR MEAL PLAN \n");
    writeStream.write("Monday, " + mealPlanObject.monday.nutrients.calories + " kcal | "
        + mealPlanObject.monday.nutrients.protein + " g protein | " +
        mealPlanObject.monday.nutrients.carbohydrates + " g carbohydrates | " +
        mealPlanObject.monday.nutrients.fat + " g fat");
    writeStream.write("\n");
    for (let i = 0; i < mealPlanObject.monday.meals.length; i++) {
        let count = i + 1
        writeStream.write("\t Meal " + count + ": " +
            mealPlanObject.monday.meals[i].title + " - " + mealPlanObject.monday.meals[i].sourceUrl + "\n")
    }

    writeStream.write("\n");
    writeStream.write("Tuesday, " + mealPlanObject.tuesday.nutrients.calories + " kcal | "
        + mealPlanObject.tuesday.nutrients.protein + " g protein | " +
        mealPlanObject.tuesday.nutrients.carbohydrates + " g carbohydrates | " +
        mealPlanObject.tuesday.nutrients.fat + " g fat");
    writeStream.write("\n");
    for (let i = 0; i < mealPlanObject.tuesday.meals.length; i++) {
        let count = i + 1
        writeStream.write("\t Meal " + count + ": " +
            mealPlanObject.tuesday.meals[i].title + " - " + mealPlanObject.tuesday.meals[i].sourceUrl + "\n")
    }

    writeStream.write("\n");
    writeStream.write("Wednesday, " + mealPlanObject.wednesday.nutrients.calories + " kcal | "
        + mealPlanObject.wednesday.nutrients.protein + " g protein | " +
        mealPlanObject.wednesday.nutrients.carbohydrates + " g carbohydrates | " +
        mealPlanObject.wednesday.nutrients.fat + " g fat");
    writeStream.write("\n");
    for (let i = 0; i < mealPlanObject.wednesday.meals.length; i++) {
        let count = i + 1
        writeStream.write("\t Meal " + count + ": " +
            mealPlanObject.wednesday.meals[i].title + " - " + mealPlanObject.wednesday.meals[i].sourceUrl + "\n")
    }

    writeStream.write("\n");
    writeStream.write("Thursday, " + mealPlanObject.thursday.nutrients.calories + " kcal | "
        + mealPlanObject.thursday.nutrients.protein + " g protein | " +
        mealPlanObject.thursday.nutrients.carbohydrates + " g carbohydrates | " +
        mealPlanObject.thursday.nutrients.fat + " g fat");
    writeStream.write("\n");
    for (let i = 0; i < mealPlanObject.thursday.meals.length; i++) {
        let count = i + 1
        writeStream.write("\t Meal " + count + ": " +
            mealPlanObject.thursday.meals[i].title + " - " + mealPlanObject.thursday.meals[i].sourceUrl + "\n")
    }

    writeStream.write("\n");
    writeStream.write("Friday, " + mealPlanObject.friday.nutrients.calories + " kcal | "
        + mealPlanObject.friday.nutrients.protein + " g protein | " +
        mealPlanObject.friday.nutrients.carbohydrates + " g carbohydrates | " +
        mealPlanObject.friday.nutrients.fat + " g fat");
    writeStream.write("\n");
    for (let i = 0; i < mealPlanObject.friday.meals.length; i++) {
        let count = i + 1
        writeStream.write("\t Meal " + count + ": " +
            mealPlanObject.friday.meals[i].title + " - " + mealPlanObject.friday.meals[i].sourceUrl + "\n")
    }

    writeStream.write("\n");
    writeStream.write("Saturday, " + mealPlanObject.saturday.nutrients.calories + " kcal | "
        + mealPlanObject.saturday.nutrients.protein + " g protein | " +
        mealPlanObject.saturday.nutrients.carbohydrates + " g carbohydrates | " +
        mealPlanObject.saturday.nutrients.fat + " g fat");
    writeStream.write("\n");
    for (let i = 0; i < mealPlanObject.saturday.meals.length; i++) {
        let count = i + 1
        writeStream.write("\t Meal " + count + ": " +
            mealPlanObject.saturday.meals[i].title + " - " + mealPlanObject.saturday.meals[i].sourceUrl + "\n")
    }

    writeStream.write("\n");
    writeStream.write("Sunday, " + mealPlanObject.sunday.nutrients.calories + " kcal | "
        + mealPlanObject.sunday.nutrients.protein + " g protein | " +
        mealPlanObject.sunday.nutrients.carbohydrates + " g carbohydrates | " +
        mealPlanObject.sunday.nutrients.fat + " g fat");
    writeStream.write("\n");
    for (let i = 0; i < mealPlanObject.sunday.meals.length; i++) {
        let count = i + 1
        writeStream.write("\t Meal " + count + ": " +
            mealPlanObject.sunday.meals[i].title + " - " + mealPlanObject.sunday.meals[i].sourceUrl + "\n")
    }
    writeStream.end();
    //const textString = JSON.stringify(mealPlanObject)
}

function saveMP(mealPlanObject, calories) {
    var writeStream = fs.createWriteStream("customMealPlan.txt");
    writeStream.write("YOUR MEAL TODAY \n");
    writeStream.write("Total Calories: " + calories + " kcal \n");
    for (let i = 0; i < mealPlanObject.length; i++) {
        let count = i + 1
        writeStream.write("Meal " + count + ": " + mealPlanObject[i].title +
            " - " + mealPlanObject[i].sourceUrl + "\n");
    }
    writeStream.end();

}

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

app.post("/pages/cart_page", (req, res) => {
    const userID = 1;
    const sqlInsertOrder = "INSERT INTO orders (users_id) VALUES (?);";
    database.query(sqlInsertOrder, [userID], (err, result) => {
        if (err) console.log(err);
    });
});
app.post("/pages/sign_up", (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const userPassword = req.body.userPassword;
    const sqlInsertUser = "INSERT INTO users (firstName, lastName, email, userPassword) VALUES (?, ?, ?, ?);";
    database.query(sqlInsertUser, [firstName, lastName, email, userPassword], (err, result) => {
        if (err) {
            console.log(result);
        } else {
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


app.post("/pages/generate_mealplan", (req, res) => {
    const personalMP = req.body.personalMP;
    createFile(personalMP)
});

app.post("/pages/mealplan_page", (req, res) => {
    const recipeItems = req.body.recipeItems;
    const calories = req.body.totalCalories
    saveMP(recipeItems, calories)
    console.log(recipeItems)
    //createFile()
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

