function app(){
    let userNumber = parseInt(prompt('¿Que numero desea factorizar?', 0));
    if (userNumber > 20 || userNumber < 1 || isNaN(userNumber)) {  //funcion inversa definimos los casos que no corresponden
        console.log('Número NO válido')
        return 0                                                    //if (userNumber <= 20 && userNumber > 0 && typeof (userNumber) == Number)
        // si es mayor a 20 y es menor a 1 podriamos colocar negacion si no es numero y le hacemos un console log de numero no valido
    }
    for (let index = 1; index <= userNumber; index++) {
        console.log(`${index} x ${userNumber} = ${index * userNumber}`)
        //console.log(index + ' x ' + usernumber + ' = ' + index * userNumber)
    
        // 10 y 11 hacen exactamente lo mismo la de la linea 10 es mucho mas facil de entender una vez aplicada
    }
    let resultado = 0
    for (let i = 1; i <= userNumber; i++) {   // let i   la i es otro let con otro nombre
        resultado *= i;
        console.log(`Factorial de ${i} =  ${resultado}`);
    }
    
     
}
app()
 
