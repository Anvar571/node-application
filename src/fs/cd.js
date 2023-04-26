const path = require("path");

function cdClone(filepath) {
    try {
        process.chdir(filepath);
        console.log(`Changed directory to ${filepath}`);
    } catch (error) {
        console.error(`Error changing directory: ${error}`);
    }
}

module.exports = cdClone