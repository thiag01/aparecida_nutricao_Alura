var input = document.querySelector("#filtrar-paciente");;

    input.addEventListener("input", function(){
        var pacientes = document.querySelectorAll(".paciente"); 

        if(input.value != ""){
            pacientes.forEach(function(paciente){
                var tdnome = paciente.querySelector(".info-nome");
                var nome = tdnome.textContent;
                var expressao = new RegExp(input.value, "i");
                if(!expressao.test(nome)){
                    paciente.classList.add("invisible");
                }else{
                    paciente.classList.remove("invisible");
                }        
        });
    }else{
        pacientes.forEach(function(paciente){
            paciente.classList.remove("invisible");
        }) 
    }
});    