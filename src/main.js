#!/usr/bin/env node

const OsCommands = require("./os/main");
const FsCommand = require("./fs");
const HashFuntion = require("./hash/hash");
const compress = require("./zlip/compress");
const decompress = require("./zlip/decompress");

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

    if (command[0] == "os"){
        OsCommands(command);
    } else if (command[0] == "hash"){
        HashFuntion(process.cwd() + "/src/test.txt")
    } else if (command[0] == "compress"){
        compress(command[1], command[2]);
    }
    else if (command[0] == "decompress"){
        decompress(command[1], command[2])
    }
    else if (command){
        FsCommand(command);
    }
    else {
        console.log("This command was not found");
    }
})

process.on("SIGINT", () => {
    console.log(`\nThank you for using File Manager, ${username}, goodbye! paka`);
    process.exit(1);
})