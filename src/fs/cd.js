class CdClone {
    #filepath = []
    constructor(filepath) {
        this.#filepath = filepath

        this.#checkfile()

        this.#checkArg()

        this.#runCode()
    }

    #runCode() {

        process.chdir(this.#filepath[1]);

        console.log("\nYou are currently in ", `${process.cwd()}`);
    }

    #checkfile() {
        try {
            if (!this.#filepath[1]) {
                throw new Error("filepath must be in the cd command")
            }
        } catch (error) {
            console.log("Error cd command: ", error.message);
            process.exit(1);
        }
    }

    #checkArg(){
        try {
            if (this.#filepath.length > 2) {
                console.log("Too many args for cd command!");
                process.exit(1);
            }
        } catch (error) {
            console.log("Error cd command: ", error.message);
            process.exit(1);
        }
    }
}

module.exports = CdClone