class CdClone {
    #filepath = []
    constructor(filepath) {
        this.#filepath = filepath

        this.#checkfile()

        this.#checkArg()

        this.#runCode()
    }

    #runCode() {
        try {

            process.chdir(this.#filepath[1]);

            console.log("\nYou are currently in ", `${process.cwd()}`);
        } catch (error) {
            console.log(error.message);
        }
    }

    #checkfile() {
        try {
            if (!this.#filepath[1]) {
                throw new Error("filepath must be in the cd command")
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    #checkArg() {
        try {
            if (this.#filepath.length > 2) {
                console.log("Too many args for cd command!");
            }
        } catch (error) {
            console.log(error.message);
        }
    }
}

module.exports = CdClone