const OsCommand = require("./osinfo");

function OsCommands(command){
    switch (command[1].toLowerCase()){
        case "--info":
            new OsCommand(command).info();
            break;
        default:
            return console.log("This command is not found");
    }

}

module.exports = OsCommands;