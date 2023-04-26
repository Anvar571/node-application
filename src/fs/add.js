const fs = require("fs");
const path = require("path");

class TouchClone {
    #newfilename = [];
    constructor(newfilename) {
        this.#newfilename = newfilename

        this.#checkFileName()

        this.#checkFileextention()

        this.#checkFileDir()


    }

    #checkFileDir() {
        try {
            if (fs.existsSync(this.#newfilename[1])) {
                return console.log("This file already created!");
            }
            this.#newfilename = this.#newfilename.slice(1);

            for (let file of this.#newfilename){
                fs.writeFileSync(file, "", "utf-8");
            }

        } catch (error) {
            console.log(error.message);
        }
    }

    #checkFileextention() {
        try {
            const extention = path.extname(this.#newfilename[1]);

            if (!extention) {
                throw new Error("File extention is not defined");
            }

        } catch (error) {
            console.log(error.message);
        }
    }

    #checkFileName() {
        try {
            if (!this.#newfilename[1]) {
                console.log("Filename must be in the add command")
            }
        } catch (error) {
            console.log(error.message);
            process.exit(1);
        }
    }
}

module.exports = TouchClone