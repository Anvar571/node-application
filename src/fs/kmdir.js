const fs = require("fs");

class mkDirClone{
    #folderpath = []
    constructor(folderpath) {
        this.#folderpath = folderpath

        this.#checkfolderpath();

        this.#generatecode();
    }

    #checkfolderpath(){
        try {
            this.#folderpath = this.#folderpath.slice(1);

            for (let pathF of this.#folderpath) {
                if (!fs.existsSync(pathF)) {
                    fs.mkdirSync(pathF);
                }else {
                    throw new Error("This folder already created!");
                }
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    #generatecode(){
        try {
            
        } catch (error) {
            console.error(error.message);
        }
    }
}

module.exports = mkDirClone