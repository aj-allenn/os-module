const os = require('os');

const user = os.userInfo();

const username = user.username;
const homeDir = user.homedir;
const shell = user.shell;

console.log(`Hello ${username}, hii wlcm`);
console.log(`Username: ${username}`);
console.log(`Home Directory: ${homeDir}`);
console.log(`Shell: ${shell}`);