const os=require('os');
const network = os.networkInterfaces();
const internal=[];
const external=[];
for(const name in network){
    network[name].forEach(element=>{
        const info={
        interfaces:name,
        ip:element.address,
        mac:element.mac,
        family:element.family
        }
        if(element.interal){
            internal.push(info);
        }else{
            external.push(info);
        }
    
    
    });
}
    console.table(internal)
    console.table(external)
    