import fs from "fs";

function createFile(mealPlanObject) {
    fs.writeFile('mealPlan.txt', mealPlanObject, (err) => {
        if (err) throw err;
    })
}

module.exports = {createFile};

// let data = "Learning how to write in a file."
// fs.writeFile('mealPlan.txt', data, (err) => {
//     if (err) throw err;
// })