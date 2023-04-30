const fs = require("fs");

function delteFolder(pathfile){
    try {
        const newpath = pathfile.slice(1);
        
        for (let path of newpath){
            if (!fs.existsSync(path)) throw new Error("This folder is not defined!")
            fs.rmdirSync(path);
        }

    } catch (error) {
        console.log(error.message);
    }
}

module.exports = delteFolder