var adicionar = document.querySelector("#adicionar-paciente");
    adicionar.addEventListener("click", function(){
        event.preventDefault();

        var form = document.querySelector("#form-adiciona");
        var paciente = atributosPaciente(form);

        var erros = validaPaciente(paciente);
        var ul = document.querySelector("#mensagem-erro");

        if(erros.length > 0 ){
            ul.innerHTML = ""
            mostraErro(erros);
            return;
        }
        
        adicionaPaciente(paciente);
        form.reset();
        ul.innerHTML = ""

    });

    function atributosPaciente(form){
        var paciente = {
            nome:    form.nome.value,
            peso:    form.peso.value,
            altura:  form.altura.value,
            gordura: form.gordura.value,
            imc:     calculaImc(form.peso.value, form.altura.value)
        }

        return paciente
    }

    function montaTr(paciente){
        var tr = document.createElement("tr");

        tr.classList.add("paciente");
        tr.appendChild(montaTd(paciente.nome,"info-nome"));
        tr.appendChild(montaTd(paciente.peso,"info-peso"));
        tr.appendChild(montaTd(paciente.altura,"info-altura"));
        tr.appendChild(montaTd(paciente.gordura,"info-gordura"));
        tr.appendChild(montaTd(paciente.imc,"info-imc"));

        return tr;
    }

    function montaTd(dado,classe){
        var td = document.createElement("td");
        td.textContent = dado;
        td.classList.add(classe);
        
        return td
    }

    function validaPaciente(paciente){
        var erros = [];

        if(paciente.nome.length == 0 ){
            erros.push("Nome invalido");
        }
        if(!validaPeso(paciente.peso) || paciente.peso.length == 0){
            erros.push("Peso invalido");
        }
        if(!validaAltura(paciente.altura) || paciente.altura.length == 0){
            erros.push("Altura invalido");
        }
        if(paciente.gordura.length == 0){
            erros.push("gordura invalida");
        }
        return erros;
    }

    function mostraErro(erros){
        var ul = document.querySelector("#mensagem-erro");
        erros.forEach(function(erro){
            var li = document.createElement("li");
            li.textContent = erro;
            ul.appendChild(li);
        });
    }

    function adicionaPaciente(paciente){
        var tr = montaTr(paciente);
        var tbody = document.querySelector("#tabela-pacientes");
        tbody.appendChild(tr);
    }


    