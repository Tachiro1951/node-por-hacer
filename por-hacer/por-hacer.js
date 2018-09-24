const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);
    return new Promise((resolve, reject) => {
        fs.writeFile('db/data.json', data, (err) => {
            if (err) { throw new Error('no se pudo hacer'); } else {
                resolve('La info ha sido guardada!!');
            }

        });
    });

};

const getListado = () => {

    cargarDB();
    return listadoPorHacer;

};

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion == descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const cargarDB = () => {
    //para leer un archivo json, se puede hacer una peticion http, pero como estamos del lado del servidor 
    // cuando usamos require haciendo uso del nombre del archivo esta madre lo cambia a formato por nosotros
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
    //console.log(listadoPorHacer);
};


const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    //console.log('listado');
    //for (i = 0; i <= listadoPorHacer.length; i++) {
    //console.log(listadoPorHacer[i]);
    //}
    return porHacer;

};

const borrar = (descripcion) => {
    cargarDB();
    let arreglo = listadoPorHacer.filter(tarea => tarea.descripcion != descripcion);

    if (arreglo.length === listadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = arreglo;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};