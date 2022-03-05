let usuarios =[ 
    {nombre:"andres", edad:32, es_paisa:false},
    {nombre:"juan", edad:27, es_paisa:true},
    {nombre:"carlos", edad:14, es_paisa:false},
    {nombre:"romario", edad:82, es_paisa:true},
    {nombre:"mariana", edad:13, es_paisa:false},
    {nombre:"flor", edad:22, es_paisa:true},
    {nombre:"evelyn", edad:43, es_paisa:false},
    {nombre:"antonio", edad:5, es_paisa:true},
    {nombre:"diana", edad:18, es_paisa:true},
    {nombre:"emily", edad:1, es_paisa:false}
    ]
   //filtrar las personas que son menores de edad 
   //se crea una funcion anonima que solo se va apicar y ejecutar una sola vez, no se pude llamar, dentro de una funcion anonima debe estar un auxiliar y ojala que esta variable se llame de manera singular  al nombre del objeto
//    let filtrado_edad = usuarios.filter(function(usuario) {
//     return(usuario.edad<=18)
//    })
 //  console.log(filtrado)
//arreglo de objetos de personas que no son paisas filtros 
//    let filtro_nom = usuarios.filter(function(usuario){
//        return(usuario.es_paisa!=true)
//        })
//     console.log(filtro_nom)

/// filtor de nombres
    // let filtro_nom = usuarios.filter(function(usuario){
    //     return(usuario.edad>=18 && usuario.es_paisa==true)
    //     })
    //  console.log(filtro_nom)

  ///
/// con el map se convierte al atributo que deseamos modificar 
//conviertiendo la edad 
//   let datos_mapeados =usuarios.map(function(usuario){
//       return(usuarios.edad=100)
//   })
//   console.log(datos_mapeados)
//   console.log(usuarios)

///concatenando el  nombre 

let datos_mapeados=usuarios.map(function(usuario){
    return(usuario.nombre= usuario.nombre +"--cesde")
})
console.log(datos_mapeados)
console.log(usuarios)

//////forEach :: unico metodo que no retorna nada
/// vamos a sumar las edades 
let suma=0
usuarios.forEach(function(usuario){
  suma=suma+usuario.edad
  console.log(suma)  
})
