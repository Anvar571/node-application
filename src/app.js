const username = process.argv.slice(2).join("").slice(11);

const userKeyword = process.argv.slice(2).join("").slice(0, 10);

if (userKeyword !== "--username"){
    process.stdout.write("Enter data error! data must be --username=name");
    process.exit(1);
}

if (username.length < 3) {
    process.stdout.write("Username length must be at least 3");
    process.exit(1);
}

console.log(`Welcome to the File Manager, ${username}`);

process.stdin.setEncoding("utf-8");
