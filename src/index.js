const fs = require('fs');

function save(articulo) {
    fs.appendFile("./productos.txt", `${articulo}`, error =>{
if(error){
    console.log("hubo un error en la carga de los datos")
}else{
    console.log(articulo)
}
}
)}
 
async function getById(id){
    try{
        const articulo= await fs.promises.readFile("./productos.txt", id)
        console.log(articulo)
    }
    catch(error){
console.log("null", error)
    }
}
    
async function getAll(){
    try{
        const articulo= await fs.promises.readFile("./productos.txt", "utf-8")
        console.log(articulo)
    }
    catch(error){
console.log("null", error)
    }
}

async function deleteByID(id){
    try{
      await fs.promises.appendFile("./productos.txt", " " )    
    }
    catch(error){
console.log("null", error)
    }
}
async function deleteAll(){
    try{
      await fs.promises.unlink("./productos.txt") 
      console.log("Archivo borrado")   
    }
    catch(error){
console.log("null", error)
    }
}



save({                                                                                                                                                    
    title: 'Agua Mineral',                                                                                                                          
    price: 80,                                                                                                                                     
    thumbnail: 'https://jumboargentina.vtexassets.com/arquivos/ids/580433-800-600?v=637219992404400000&width=800&height=600&aspect=true',                                   
    id: 4                                                                                                                                            
  }                                                                                                                                                 
);

getById(2);

getAll();

deleteByID(2);

deleteAll();





