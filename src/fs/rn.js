const fs = require("fs");

function renameFile(oldname, newname){
    try {
        if (!fs.existsSync(oldname)) throw new Error("This file is not defined!");
        fs.rename(oldname, newname, (err) => {
            if (err) throw new Error(err);
        })
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = renameFile