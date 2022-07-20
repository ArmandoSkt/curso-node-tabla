
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

// console.clear();

// const base = 5;


console.log( argv );


crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreDelArchivo => console.log( nombreDelArchivo.rainbow, "creado".blue ))
    .catch( err => console.log( err ) );



// console.log(process.argv);
// console.log(process.argv);
// const [,, arg3 = "base=5"] = process.argv;
// console.log(arg3);
// const [, base = 5] = arg3.split("=");
// console.log(base);