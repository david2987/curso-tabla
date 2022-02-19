// 
const argv = require('./config/yargs')
const {crearArchivo} = require('./helpers/multiplicar')
const colors = require('colors');

console.clear();

// console.log(argv);

// console.log('base: yargs',argv.b,argv.l);

// OLD <--
// const [,,arg3 = 'base=5'] = process.argv;
// const [,base] = arg3.split('=');
//-->
crearArchivo(argv.b,argv.l,argv.h)
.then(nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
.catch(err => consol.log(err) );


