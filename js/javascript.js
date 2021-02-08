var pacientes = document.querySelectorAll(".paciente");

for(i = 0; i < pacientes.length; i++){
    paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso");
    var tdPeso = peso.textContent;
    var tdImc = paciente.querySelector(".info-imc");
    var altura = paciente.querySelector(".info-altura");
    var tdAltura = altura.textContent;
    var lPeso = validaPeso(tdPeso);
    var lAltura = validaAltura(tdAltura);
    
    if(!lPeso){
        lPeso = false;
        tdImc.textContent = "peso invalido";
        paciente.classList.add("paciente-invalido");
    }

    if(!lAltura){
        lAltura = false;
        tdImc.textContent = "altura invalido";
        paciente.classList.add("paciente-invalido");
    }

    if(lPeso && lAltura){
        tdImc.textContent = calculaImc(tdPeso, tdAltura);
    }
}

function calculaImc (peso,altura){
    var imc = 0;

    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso < 0 || peso > 1000){
        return false;
    }else{
        return true;
    }
}

function validaAltura(altura){
    if(altura < 0 || altura > 3.00){
        return false;
    }else{
        return true;
    }
}
