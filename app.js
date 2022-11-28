const { crearArchivoTabla } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
console.clear();
const colors = require("colors");

crearArchivoTabla(argv.base, argv.listar, argv.hasta)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado".green))
  .catch((err) => console.log(err));
