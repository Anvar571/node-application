const fs = require("fs");

function viewPath() {
    try {
        const files = fs.readdirSync(process.cwd());

        // Convert the array of filenames to an array of objects with a 'name' property
        const fileObjects = files.map(file => {
            const stats = fs.statSync(file);
            const fileType = stats.isDirectory() ? 'folder' : 'file';

            return { name: file, Type: fileType };
        });

        console.table(fileObjects);
        console.log("\nYou are currently in ", `${process.cwd()}`);

    } catch (error) {
        console.log(error.message);
    }
}

module.exports = viewPath