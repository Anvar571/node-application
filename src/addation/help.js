const fs = require("fs");

function helpF(){
    try {
        const path = process.cwd()+"/src/addation/about.txt";
        
        if (!fs.existsSync(path)) throw new Error("This file dir is not defined");

        const result = fs.readFileSync(path, "utf-8")

        console.log(result.toString());

        console.log("\nYou are currently in ", `${process.cwd()}`);

    } catch (error) {
        console.log(error.message);
    }
}

module.exports = helpF