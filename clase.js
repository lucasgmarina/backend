const fs=require ("fs").promises

class contenedor{
    constructor(path){
        this.path=path
    }

   async save(){
      try{ const leer= await fs.readFile(this.path,"utf-8")
      const data= JSON.parse(leer)
      let getById;
      data.length === 0
      ? (id=1)
      : (id = [data.length - 1].id + 1);
      const newProduct = { ...objeto, id };
      data.push(newProduct);
      await fs.writeFile(this.path, JSON.stringify(data, null, 2), "utf-8")
      return newProduct.id;
    }catch(e){
        console.log(e)
    }
    }
    async getById(id){
         try{
const leer= await fs.readFile(this.path,"utf-8")
const data= JSON.parse(leer)
    }catch(e){
            console.log(e)
         }
    }
    async getAll(){
const leer= await fs.readFile(this.path,"utf-8")
const data= JSON.parse(leer)
    }
    deleteById (){

    }
    deleteAll(){
        try {
            await fs.writeFile(
              path.resolve("./", this.path),
              JSON.stringify([], null, 2)
            );
          } catch (error) {
            console.log(error);
          }

    }
}
module.exports=contenedor 