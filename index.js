const Container =require("./clase.js")
const productos= new Container("./productos.json")

async function ejecutar(){

    const objecto1={
        nombre:"remera",
        precio:4500,
        thumbnail:"url"
    }

    const objecto2={
        nombre:"buzo",
        precio:9000,
        thumbnail:"url"
    }
    const objecto3={
        nombre:"pantalon",
        precio:9500,
        thumbnail:"url"
    }
}
await productos.getAll().then(a=>console.log(a));

ejecutar()
