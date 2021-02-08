var sicroniza = document.querySelector("#sicroniza");

sicroniza.addEventListener("click", function(){
    console.log("Sicronizando...");

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.send();

    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText;
        var objeto = JSON.parse(resposta);

        console.log(resposta);
        objeto.forEach(function(paciente){
            adicionaPaciente(paciente);
        });
    });
});