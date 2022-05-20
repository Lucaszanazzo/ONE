var botonBuscar = document.querySelector("#buscar-pacientes");

botonBuscar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest;
    xhr.open("GET", "https://alura-es-cursos.github.io/api-pacientes/pacientes.json");

    xhr.addEventListener("load", function(){
        var errorAjax = document.querySelector("#error-ajax");
        if(xhr.status == 200){
            errorAjax.classList.add("invisible");
            var respuesta = xhr.responseText;
            var pacientes = JSON.parse(respuesta);
            pacientes.forEach(function(paciente){
                adicionarPacienteATabla(paciente);
            });
        }else{
            errorAjax.classList.remove("insivible");
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
        
    });

    xhr.send();
});