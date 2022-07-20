const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 10, listar = false, limite) => {
    try {
       

        //Imprimr tabla del 5 en consola
        let salida = "", consola = ""
        for (let i = 1; i <= limite; i++){            
            salida += `${base} x ${i} = ${base*i}\n`;
            consola += `${base} ${ 'x'.green } ${i} ${ '='.green } ${base*i}\n`;
        }
        
        if ( listar ) {
            console.log("================================".green);
            console.log(`      TABLA DEL: ${base}`.red);
            console.log("================================".green);
            console.log(consola);
        }

        // fs.writeFile(`tabla-${base}.txt`, salida, (err)=> {
        //     if (err) throw err;
        //     console.log('Archivo creado');
        // })

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida );
        return `tabla-${base}.txt`;
    }catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo,
}