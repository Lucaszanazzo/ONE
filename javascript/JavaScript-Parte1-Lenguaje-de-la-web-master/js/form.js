var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");
    var paciente = capturandoDatosPaciente(form);
    

    var errores = validarPaciente(paciente);

    if(errores.length > 0){
        exhibirMensajesErrores(errores);
        return;
    }

    adicionarPacienteATabla(paciente);
    form.reset();

    var mensajesErrores = document.querySelector("#mensajes-errores");
    mensajesErrores.innerHTML = "";
})
function adicionarPacienteATabla(paciente){
    var pacienteTr = construirTr(paciente); 
    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);
}

function capturandoDatosPaciente(form){
    //capturando datos del formulario
    var paciente= {
        nombre: form.nombre.value,
        altura: form.altura.value,
        peso: form.peso.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value, form.altura.value)
    }
    return paciente;

}

function construirTr(paciente){
     //crear los Tds y Tr de la tabla 
     var pacienteTr = document.createElement("tr");
     pacienteTr.classList.add("paciente");

     // asignacion de los td al tr, y del tr a la tabla 
     pacienteTr.appendChild(contruirTd(paciente.nombre, "info-nombre"));
     pacienteTr.appendChild(contruirTd(paciente.peso, "info-peso"));
     pacienteTr.appendChild(contruirTd(paciente.altura, "info-altura"));
     pacienteTr.appendChild(contruirTd(paciente.gordura, "info-gordura"));
     pacienteTr.appendChild(contruirTd(paciente.imc, "info-imc"));

     return pacienteTr;
}

function contruirTd(dato, clase){
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;

    return td;
}
function validarPaciente(paciente){
    var errores = [];
    if(paciente.nombre.length == 0){
        errores.push("El nombre no puede estar vacio");
    }
    if(paciente.peso.length == 0){
        errores.push("El peso no puede estar vacio");
    }
    if(paciente.altura.length == 0){
        errores.push("La altura no puede estar vacio");
    }
    if(paciente.gordura.length == 0){
        errores.push("La gordura no puede estar vacio");
    }

    if(!validarPeso(paciente.peso)){
        errores.push("El peso es incorrecto");
    }
    if(!validarAltura(paciente.altura)){
        errores.push("La altura es incorrecta");
    }

    return errores;
}
function exhibirMensajesErrores(errores){
    var ul = document.querySelector("#mensajes-errores");
    ul.innerHTML= "";
    errores.forEach(function(error){
        var li = document.createElement("li")
        li.textContent = error;
        ul.appendChild(li);
    });

}