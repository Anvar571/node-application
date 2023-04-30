const fs = require("fs");
const zlib = require("zlib");

function decompress(pathfilezlib, pathdest){
    try {
        if (!fs.existsSync(pathfile)) throw new Error("This file is not defined");
        const readZlib = fs.createReadStream(pathfilezlib);

        const writeDecompress = fs.createWriteStream(pathdest, "utf-8");

        zlib.unzip(readZlib, (err, data) => {
            if(err) throw new Error(err);
            writeDecompress.write(data.toString());
        })
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = decompress