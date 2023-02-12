//Variables Globales
let fecha = document.getElementById("fecha_actual");
let agregar_tarea = document.getElementById("btn_agregar");
let tarea = document.getElementById("tarea");
let lista_tareas = document.getElementById("lista-tareas");
let cont = 1;

/*---1) Mostrar la fecha actual---*/
fecha.innerText = new Date().toLocaleDateString();

/*---2) Función que permite agregar las tareas almacenadas---*/
agregar_tarea.onclick = () => {

    //Variable que crea las tarjetas identificativas a las tareas del usuario 
    let item_tarea = `
        <li id='li_tarea${cont}' onclick='funChequeada(this.id)'>
            ${tarea.value}
            <div id='${cont}' onclick='funEliminar(this.id)'>
                <span class="linea1"></span>
                <span class="linea2"></span>
            </div>
        </li>
    `;
        
    //No efectuar cambios si no se almacenan datos, de lo contrario añadir las tareas una por una con los valores insertados
    tarea.value == "" ? tarea.placeholder = "¿Qué vas a realizar?" : lista_tareas.innerHTML += item_tarea; cont++; tarea.value = "";

} //Fin función agregar_tarea

/*---3) Función que permite eliminar las tareas almacenadas---*/
function funEliminar(valor){
    let id_tarjeta = "li_tarea"+valor;
    document.getElementById(id_tarjeta).remove();
}

/*---4) Función que permite agregar una clase CSS para poder cotejar las tareas terminadas---*/
function funChequeada(valor){
    document.getElementById(valor).classList.toggle("chequeada");
}