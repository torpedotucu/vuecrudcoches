import Global from "@/Global";

export default class ServiceCoches{
    getCoches(){
        return new Promise((resolve) => {
            let request='api/coches';
        let url=Global.urlApiCoches+request;
        fetch(url,{
            method:"GET"
        }).then((response)=>{
            response.json().then((data)=>{
                console.log(data);
                 resolve(data)
            })
            
        })
        })
        
    }
    crearCoches(coche){
        return new Promise((resolve) => {
            let request='api/coches/insertarcoche';
            let url=Global.urlApiCoches+request;
            fetch(url,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(coche)
            }).then((response)=>{
                response.json().then((data=>{
                    console.log(data);
                    resolve(data);
                }))
            })
        })
    }

}