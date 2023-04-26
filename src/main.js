const Touch = require("./fs/add");
const CdClone = require("./fs/cd");
const fs = require("fs");

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
        new Touch(command[1])


    } else if (command[0] == "ls") {
        const files = fs.readdirSync(process.cwd());

        // Convert the array of filenames to an array of objects with a 'name' property
        const fileObjects = files.map(file => {
            const stats = fs.statSync(file);
            const fileType = stats.isDirectory() ? 'folder' : 'file';

            const currentDate = new Date();
            const dateString = currentDate.toLocaleDateString();
            const timeString = currentDate.toLocaleTimeString(stats.birthtime);
            const dateTimeString = `${dateString} ${timeString}`;

            return { name: file, Type: fileType};
        });

        console.table(fileObjects);

    } else if (command[0] == "cat") {

    } else if (command[0] == "clear") {
        console.clear();

    } else if (command[0] == "help") {
        try {
            const path = "./help.txt";
            if (!fs.existsSync(path)) throw new Error("This file dir is not defined");

            fs.readFile(path, "utf-8", (err, data) => {
                if (err) {
                    return console.log(err.message);
                }
                console.log(data.toString());
            })
        } catch (error) {
            console.log(error.message);
        }
    }
    else {
        console.log("This command was not found");
    }

})

process.on("SIGINT", () => {
    console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
    process.exit(1);
})