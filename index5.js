const os=require('os');
const network = os.networkInterfaces();
const internal=[];
const external=[];
for(const name in network){
    network[name].forEach(element=>{
        interfaces:name,
        ip:element.address,
        mac:element.mac,
        family:element.family
    })
}