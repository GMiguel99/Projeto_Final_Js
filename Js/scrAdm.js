(function aparecerRegistro() {

    if (localStorage.length == 0) {

        var divSemRegistro = document.createElement("div");
        divSemRegistro.class = "centralizada";

        document.body.appendChild(divSemRegistro);

        var msgSemRegistro = document.createElement("h2");
        msgSemRegistro.innerHTML = "Não houveram transações hoje";

        divSemRegistro.appendChild(msgSemRegistro);
    } else {

        var registro;
        var totalSaque = 0;
        var totalDeposito = 0;

        // Cria divs para cada registro
        for (var i = 1; i < localStorage.length; i++) {

            if (localStorage.getItem("registro" + i)) {

                registro = localStorage.getItem("registro" + i).split(",");

                let divRegistro = document.createElement("div");
                divRegistro.setAttribute("class", "centralizar");
                divRegistro.id = "divRegistro";

                if (registro[2] == "Saque") {
                    totalSaque += Number(registro[3]);
                }
                if (registro[2] == "Deposito") {
                    totalDeposito += Number(registro[3]);
                }

                let msgRegistro = document.createElement("h2");
                msgRegistro.id = "msgRegistro";
                msgRegistro.innerHTML = `Cliente: ${registro[0]}<br>Saldo Cliente: ${registro[1]}<br>Operação: ${registro[2]}<br>Valor: ${registro[3]}<br>Saldo do caixa: ${registro[4]}<br><hr>`;

                document.body.appendChild(divRegistro);
                divRegistro.appendChild(msgRegistro);
            }
        }

        // cria a div com o Total de transações
        let divTotal = document.createElement("div");
        divTotal.class = "centralizar";
        divTotal.id = "divTotal";

        let saqueTotal = document.createElement("h2");
        saqueTotal.innerHTML = `Total Saque: ${totalSaque}<br>`;

        let depositoTotal = document.createElement("h2");
        depositoTotal.innerHTML = `Total Deposito: ${totalDeposito}<br>`;

        document.body.appendChild(divTotal);
        divTotal.appendChild(saqueTotal);
        divTotal.appendChild(depositoTotal);

    }

})();