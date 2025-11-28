const os=require('os');
const cpus=os.cpus();
// console.log(cpus)

///Retrieve the number of cpu cores

console.log("Number of cpu cores",cpus.length);

///Model and Speed of CPU core

cpus.forEach((cpu,index)=>{
    console.log(`core ${index+1}:`);
    console.log("model:",cpu.model);
    console.log("speed:",cpu.speed);
    
});


///Average CPU speed

let totalSpeed=0;
cpus.forEach(cpu=>{
   totalSpeed+=cpu.speed;
})

let avgSpeed=totalSpeed/cpus.length;
console.log("Average speed :",avgSpeed);

