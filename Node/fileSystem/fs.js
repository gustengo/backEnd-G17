const fs = require("fs");

/*fs.mkdir(`${__dirname}/newdir`, (error) => {
    if(error){
        console.log("Error: ", error)
    } else{
        console.log("Directorio creado")
    }
})*/
/*
fs.writeFile(`${__dirname}/newdir/hello.txt`, 'Mi nombre es Gustavo', (error) => {
    if(error){
        console.log("Error: ", error)
    } else{
        console.log("Archivo creado")
    }
})
*/
/*
fs.readFile(`${__dirname}/newdir/hello.txt`, (error, data) => {
    if(error){
        console.log("Error: ", error)
    } else {
        console.log('Contenido:\n', data.toString())
    }
})*/

/*fs.appendFile(`${__dirname}/newdir/hello.txt`, '\nEsto es nuevo', (error) => {
    if(error){
        console.log("Error: ", error)
    } else {
        console.log("Actualizado!!")
    }
})*/

fs.unlink(`${__dirname}/newdir/hello.txt`, (error) => {
  if (error) {
    console.log("Error: ", error);
  } else {
    console.log("Se borro el archivo");
  }
});
