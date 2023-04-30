const { error, log } = require("console");
const crypto = require("crypto");
const fs = require("fs");

function HashFuntion(filepath) {
    try {
        if (!fs.existsSync(filepath)) return error("This filepath is not defined");
        
        if (filepath) {
            const data = fs.readFileSync(filepath, "utf-8");
            return log(crypto.createHash("sha256", data.toString()).digest('hex'));
        }
    } catch (error) {
        log(error.message)
    }
}

module.exports = HashFuntion