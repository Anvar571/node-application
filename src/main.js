const cdClone = require("./fs/cd");
const path = require("path");
const fs = require("fs");

require("./app");

// get console username
const username = process.argv.slice(2).join("").slice(11);

console.log("\nYou are currently in ", `${process.cwd()}`);

process.stdin.on("data", (input) => {
    input = input.toString().trim();

    let command = input.toString().split(" ");

    if (command.length <= 1) {
        console.log("Argument yetarli emas");
        process.exit(1)
    }

    if (input == ".exit") {
        console.log(`Thank you for using File Manager, ${username}, goodbye!`);
        process.exit(1);
    }

    if (command.length > 2) {
        console.log("Too many args for cd command!");
        process.exit(1);
    }

    if (command[0] == "cd") {
        try {
            process.chdir(command[1]);

            console.log("\nYou are currently in ", `${process.cwd()}`);
        } catch (error) {
            console.log("Error", error);
        }

    } else if (command[0] == "add") {
        if (!fs.existsSync(command[1])) return fs.writeFileSync(command[1], "", "utf-8")

        console.log("This file already created!");
    } else if (command[0] == "ls") {

    } else if (command[0] == "cat") {

    }else{
        console.log("Some error");
    }

})

process.on("SIGINT", () => {
    console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
    process.exit(1);
})