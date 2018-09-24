const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const colores = require('colors');

const porHacer = require('./por-hacer/por-hacer');
//console.log(argv._);

let comando = argv._[0];

switch (comando) {

    case 'listar':
        console.log('listar que hacer');
        let listado = porHacer.getListado();

        for (let tarea of listado) {

            console.log('==================Por Hacer=================='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('============================================='.green);
        }

        break;

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        //console.log(tarea);
        break;

    case 'actualizar':

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido!.');
}