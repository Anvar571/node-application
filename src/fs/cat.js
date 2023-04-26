const fs = require("fs");

class CatClone {
    #filename = [];
    constructor(filename) {
        this.#filename = filename;
        this.#checkFileName();
        this.#generate();
    }

    #checkFileName() {
        try {
            if (!fs.existsSync(this.#filename[1])) throw new Error("This file is not defined!");
        } catch (error) {
            console.log(error.message);
        }
    }

    #generate() {
        try {
            fs.readFile(this.#filename[1], "utf-8", (err, data) => {
                if (err) throw new Error(err);

                console.log(data.toString());
            })

            console.log("\nYou are currently in ", `${process.cwd()}`);
        } catch (error) {
            console.log(error.message);
        }
    }
}

module.exports = CatClone