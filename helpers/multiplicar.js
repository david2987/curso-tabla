
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5,listar = false,hasta = 10) =>{

    try{
        if(listar)
        {
            console.log('-------------------'.zebra);
            console.log('---- TABLA del :'.underline.red,base);
            console.log('-------------------'.zebra);
        }   
    let salida = '';

    for(let i=1;i<=hasta;i++)
    {
        let resultado = base*i;
        salida += `${base} x ${i} = ${base * i} \n`;
    }
    if(listar)
    {
        console.log(salida.rainbow)
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);

    return(`Tabla-${base}.txt`);

        }catch(err){
            throw err
        }
}

module.exports = {
    crearArchivo
}
