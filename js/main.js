let contador = 0; //para hacer 
let costoTotal= 0;//necesito una variable global que vaya almacenando los precios 
let totalEnProductos = 0; //variable para mi contador de total de productos

let element = document.getElementById("totalPrecio"); //solo para un elemento, es único 
element.innerHTML= "Total en precio"; 

let txtNombre = document.getElementById("Name");
//txtNombre.value= "Leche Semidescremada"; //modificar la información 
//console.log(txtNombre.value);
let txtNumber = document.getElementById("Number");

let total= document.getElementById("precioTotal");
//Puedo modificar varios elementos, ya que id solo es para una cosa
//entonces, para varios elementos podemos categorizar (clase) por campo

/* let campos =document.getElementsByClassName("campo"); //Trae elementos de la clase
campos[0].value = "Leche descremada deslactosada light"; //campos es un html collections que puede estar cambiando
console.log(campos [0].value);
console.log(campos);

//me traje a todos los campos que están en let campos que definí 
//podríamos hacer esto cuando queremos marcar issues o campos a completar
for (let i=0; i<campos.length; i++) {
    campos [i].style.border= "red thin solid";  //bode delgado
} //for

//encontrar los spann. uso document porque está dentro del body
let spans = document.getElementsByTagName("span");
for(let i=0; i<spans.length; i++){
    console.log(spans[i].textContent);
}//for i */

let tabla = document.getElementById("tablaListaCompras");
let cuerpoTabla = tabla.getElementsByTagName("tbody"); //cuerpo tabla está almacenando varios elementos, tengo que decirle  su subíndice

//       subíndice 0 tengo que decirlo para un html collection de 29
/* cuerpoTabla[0].innerHTML= `<tr>
                            <th scope="row">1</th>
                            <td>Leche descremada</td>
                            <td>3</td>
                            <td>$23</td>
                            </tr>`; */  
//Para validar los cuadros de producto y cantidad                      
function validarNombre(){
if (txtNombre.value.length<3){
    return false; //return regresa algo y además termina la función
}// if
return true;
} //validaciónNombre

function validarCantidad(){
    if ( txtNumber.value.length==0) {
        return false;
    } //if
if ( isNaN(txtNumber.value)) {
    return false;
} //if
if (parseFloat(txtNumber.value)<=0){
    return false;
} //if
return true;
}//validarCantidad
                            let agregar = document.getElementById("btnAgregar");
//Agregar un evento al botón cuando doy clic
agregar.addEventListener("click", (event)=>{
    //console.log("Clic en el botón agregar", event);
   event.preventDefault();
   if ( (! validarNombre()) || (! validarCantidad()) ){
   let lista="";
    if (!validarNombre()){
        txtNombre.style.border="red thin solid";
        lista+= "<li>Se debe escribir un nombre válido</li>";
    } //
    if (!validarCantidad()){
        txtNumber.style.border="red thin solid";
        lista+= "<li>Se debe escribir un número válido</li>";
    } //
    document.getElementById("alertValidacionesTexto").innerHTML=`Los campos deben ser llenados correctamente
    <ul>${lista}</ul>
    `;
    
    document.getElementById("alertValidaciones").style.display="block";   
    setTimeout(function (){
        document.getElementById("alertValidaciones").style.display="none";
    },
    4000
    );
    return false;
   } //if
      
   
   contador++; //aquí la agrego porque es después de dar click
   document.getElementById("contadorProductos").innerHTML=contador;
   
   //Para almacenar información en mi página web
   //window.localStorage //window se refiere a la ventana de mi navegador, local storage es donde quiero almacenar la información, no es necesario poner window.
   localStorage.setItem("contadorProductos",contador); //necesito llave (nombre que sea, yo pongo uno con el que relaciono) para acceder al elemento, y también un valo


   let precio= (Math.floor((Math.random()*50)*100))/100; //*100 para que recorra los decimales
    let cantidad = parseFloat(txtNumber.value); //la convertimos en número porque viene de un texto
   totalEnProductos += Math.ceil(cantidad);
   document.getElementById("productosTotal").innerHTML=totalEnProductos; 
   localStorage.setItem("productosTotal",totalEnProductos);
   costoTotal += (precio * cantidad);
    total.innerHTML =`$ ${costoTotal.toFixed(2)}`;
    localStorage.setItem("costoTotal",costoTotal.toFixed(2));
    let tmp = `<tr>
                <th scope="row">${contador}</th>
                <td>${txtNombre.value}</td>
                <td>${txtNumber.value}</td>
                <td>$ ${precio}</td>  
                </tr>`;  //toFixed es para los decimales que quiero ver, ej. 2 solo son 2 decimales, de manera en mi página
    
    console.log(tmp);
    //usamos get elements by tag name busca cualquier etiqueta body, y me regresa un colección o como un arreglo, dentro de la tabla solo tengo el elemento tbody y solo hay un elemento en 
    //mi tabla de html index, y por eso pone el 0
    cuerpoTabla[0].innerHTML += tmp; //todo esto lo agrega dentro del tbody que es la l+inea 100 de html que tiene un alínea vacía. Cuando declare cuerpo tabla ahí puse que la etiqueta que busca es tbody
    txtNumber.value="";
    txtNombre.value="";
    txtNombre.focus(); 

}
);

txtNombre.addEventListener("blur", (event)  => {
    event.target.value = event.target.value.trim();
}
);

txtNumber.addEventListener("blur", (event) => {
    event.target.value = event.target.value.trim();
}
);

window.addEventListener("load", function(){
    if(localStorage.getItem("contadorProductos")!=null){
        contador = parseInt(localStorage.getItem("contadorProductos"));
        document.getElementById("contadorProductos").innerHTML=contador;
    }
    if(localStorage.getItem("productosTotal")!=null){
        totalEnProductos = parseInt(localStorage.getItem("productosTotal"));
        document.getElementById("productosTotal").innerHTML=totalEnProductos;
    }
    if(localStorage.getItem("precioTotal")!=null){
        costoTotal = parseInt(localStorage.getItem("precioTotal"));
        
    total.innerHTML=costoTotal;
}
    
    
} );


