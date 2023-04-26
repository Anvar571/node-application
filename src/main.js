const Touch = require("./fs/add");
const CdClone = require("./fs/cd");
const viewPath = require("./fs/ls");
const CatClone = require("./fs/cat");
const helpF = require("./addation/help");
const clearF = require("./addation/clear");
const mkDirClone = require("./fs/kmdir");

require("./app");

// get console username
const username = process.argv.slice(2).join("").slice(11);

process.stdin.on("data", (input) => {
    input = input.toString().trim();

    let command = input.toString().split(" ");

    if (input == ".exit") {
        console.log(`Thank you for using File Manager, ${username}, goodbye!`);
        process.exit(1);
    }

    if (command[0] == "cd") {
        new CdClone(command);

    } else if (command[0] == "add") {
        new Touch(command)

    } else if (command[0] == "ls") {
        viewPath();

    } else if (command[0] == "cat") {
        new CatClone(command);

    } else if (command[0] == "clear") {
        clearF()

    } else if (command[0] == "help") {
        helpF()
    }else if (command[0] == "mkdir"){
        new mkDirClone(command)
    }
    else {
        console.log("This command was not found");
    }

})

process.on("SIGINT", () => {
    console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
    process.exit(1);
})