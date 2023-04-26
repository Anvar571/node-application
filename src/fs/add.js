const fs = require("fs");
const path = require("path");

class TouchClone {
    #newfilename = "";
    constructor(newfilename) {
        this.#newfilename = newfilename

        this.#checkFileName()

        this.#checkFileextention()

        this.#checkFileDir()

        this.#create()

    }

    #checkFileDir() {
        if (fs.existsSync(this.#newfilename)) {
            return console.log("This file already created!");
        }
        process.exit(1);
    }
    #create() {
        fs.writeFileSync(this.#newfilename, "", "utf-8")

    }

    #checkFileextention() {
        try {
            const extention = path.extname(this.#newfilename);
            if (extention !== '') {
                console.log("File extention is not defined");
                process.exit(1);

            }
        } catch (error) {
            console.log(error);
            process.exit(1);
        }
    }

    #checkFileName() {
        try {
            if (!newFilename || newFilename.length == 0) {
                console.log("Filename must be in the add command")
            }
        } catch (error) {
            console.log(error.message);
            process.exit(1);
        }
    }
}

module.exports = TouchClone