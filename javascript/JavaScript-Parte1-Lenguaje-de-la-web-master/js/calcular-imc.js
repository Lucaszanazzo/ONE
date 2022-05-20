// IMC  Peso/ (Altura*Altura)

var pacientes = document.querySelectorAll(".paciente");

for(let i = 0; i < pacientes.length; i++){
    var paciente= pacientes[i]
    
    var tdPeso = paciente.querySelector(".info-peso");

    var tdAltura = paciente.querySelector(".info-altura");

    var peso = tdPeso.textContent;
    var altura= tdAltura.textContent;

    var tdIMC = paciente.querySelector(".info-imc")


    var pesoValido = validarPeso(peso);
    var alturaValida = validarAltura(altura);

    if (!pesoValido){
        console.log("Peso incorrecto");
        tdIMC.textContent = "Peso incorrecto";
        pesoValido=false;
        paciente.classList.add("paciente-incorrecto");
    }
    if (!alturaValida){
        console.log("Altura incorrecta");
        tdIMC.textContent = "Altura incorrecta";
        alturaValida = false;
        paciente.classList.add("paciente-incorrecto");
    }
    if(pesoValido && alturaValida){
        tdIMC.textContent = calcularIMC(peso,altura);
    }
}
function calcularIMC(peso,altura){
    var imc = peso / (altura*altura);
    return imc.toFixed(2);
}
function validarPeso(peso){
    if (peso>=0 && peso<500){
        return true;
    }else{
        return false;
    }
}
function validarAltura(altura){
    if (altura>=0 && altura<2.5){
        return true;
    }else{
        return false;
    }
}