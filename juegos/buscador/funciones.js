const productos = [
    {nombre: 'La Scaloneta', Valor: "22 de noviembre - 13 hs"},
    {nombre: 'Mexico vs. Polonia', Valor: "22 de nobiembre - 16 Hs"},
    {nombre: 'Polonia vs. Arabia Saudita', Valor: "26 de noviembre - 16 Hs"},
    {nombre: 'Argentina vs. Mexico', Valor: "26 de noviembre - 22 Hs"},
    {nombre: 'Polonia vs. Argentina', Valor: "30 de noviembre - 22 Hs"},
    {nombre:'Arabia Saudita vs. Mexico', Valor: '30 de noviembre . 22 Hs'},
] 

const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado')

const filtrar = ()=>{
    // console.log(formulario.value);
    resultado.innerHTML ='';

    const texto = formulario.value.toLowerCase()

    for(let producto of productos){
        let nombre = producto.nombre.toLowerCase();
        if(nombre.indexOf (texto) !== -1){
            resultado.innerHTML += `
            <li>${producto.nombre} - Horario: ${producto.Valor}</li>`
        }
    }
    if(resultado.innerHTML==='') {
        resultado.innerHTML += `
        <li>Juego no encontrado...</li>
        `

    }
}

boton.addEventListener('click', filtrar)
formulario.addEventListener('keyup', filtrar)

filtrar();
