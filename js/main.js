let element = document.getElementById("totalPrecio"); //solo para un elemento, es único 
element.innerHTML= "Total en precio";

let txtNombre = document.getElementById("Name");
//txtNombre.value= "Leche Semidescremada"; //modificar la información 
//console.log(txtNombre.value);
let txtNumber = document.getElementById("Number");
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
                            </tr>`;
 */

let agregar = document.getElementById("btnAgregar");
//Agregar un evento al botón cuando doy clic
agregar.addEventListener("click", (event)=>{
    //console.log("Clic en el botón agregar", event);
    
    let precio= Math.random()*50;
    let tmp = `<tr>
                <th scope="row">1</th>
                <td>${txtNombre.value}</td>
                <td>${txtNumber.value}</td>
                <td>$ ${precio}</td>
                </tr>`;
    
    console.log(tmp);
    //usamos get elements by tag name busca cualquier etiqueta body, y me regresa un colección o como un arreglo, dentro de la tabla solo tengo el elemento tbody y solo hay un elemento en 
    //mi tabla de html index, y por eso pone el 0
    cuerpoTabla[0].innerHTML += tmp;
    txtNumber.value="";
    txtNombre.value="";
    txtNombre.focus(); 

}
);



