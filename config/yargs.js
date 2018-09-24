const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion por tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Booleano para si la tarea esta completa'
};


const argv = require('yargs')
    .command('listar', 'Imprime la lista de tareas por hacer', {})
    .command('crear', 'Crea una nueva tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea por hacer', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
};