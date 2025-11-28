//SYSTEM OVERVIEW

const os=require('os');
//type
console.log("type of os",os.type());
//platform
console.log("platform:",os.platform());
//architecture
console.log("arhitecture",os.arch());
//hostname
console.log(os.hostname());
//system uptime
const uptimeSec=os.uptime();
const hours=Math.floor(uptimeSec/3600);
const minutes=Math.floor((uptimeSec%3600)/60);
console.log(`systemUptime:${hours} hours ${minutes} minutes`);



