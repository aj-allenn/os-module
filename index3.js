const os = require("os");
const totalMemory = os.totalmem() / (1024 ** 3)
const freeMemory = os.freemem() / (1024 ** 3)
const usedMemory = ((totalMemory - freeMemory) / totalMemory) * 100;
console.log(`total memory = ${totalMemory.toFixed(1)}GB`)
console.log(`free memory = ${freeMemory.toFixed(1)}GB`)
console.log(`used memory = ${usedMemory.toFixed(1)}%`)