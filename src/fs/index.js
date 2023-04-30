const clearF = require("../addation/clear");
const helpF = require("../addation/help");
const TouchClone = require("./add");
const CatClone = require("./cat");
const CdClone = require("./cd");
const mkDirClone = require("./kmdir");
const viewPath = require("./ls");
const delteFolder = require("./rm");
const renameFile = require("./rn");

function FsCommand(command){
    switch (command[0]) {
        case "cd":
            new CdClone(command);
            break;
        case "add":
            new TouchClone(command);
            break;
        case "ls":
            viewPath();
            break;
        case "cat":
            new CatClone(command);
            break;
        case "clear":
            clearF();
            break
        case "help":
            helpF();
            break
        case "mkdir":
            new mkDirClone(command);
            break
        case "rm":
            delteFolder(command);
            break;
        case "rn":
            renameFile(command[1], command[2]);
            break;
        default:
            return console.log("This command is not defined");
    }
}

module.exports = FsCommand