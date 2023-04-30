const os = require("os");

class OsCommand {
    constructor(commandList){
        this.commandList = commandList
    }

    info(){
        return console.log(os.cpus());
    }
}

module.exports = OsCommand