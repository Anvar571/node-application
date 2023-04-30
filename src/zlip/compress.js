const zlip = require("zlib");
const fs = require("fs");

function compress(pathfile, pathdest){
    try {
        const result = zlip.createGzip();
        const data = fs.createReadStream(pathfile, "utf-8");
        const compress = fs.createWriteStream(pathdest, "utf-8");
        data.pipe(result).pipe(compress);

    } catch (error) {
        console.error(error.message);
    }
}

module.exports = compress