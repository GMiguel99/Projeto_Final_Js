var b = new Banco();
var c = new Cliente();
c.nome = localStorage.getItem("Cliente");
var i = 1;

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Parte do Cliente

function loginCliente() {
    localStorage.setItem("Cliente", document.getElementById("loginCliente").value);
}

function aparecerSaldo() {

    let divSaldo = document.createElement("div");
    divSaldo.class = "centralizar";
    divSaldo.id = "divSaldo";

    let boxSaldo = document.createElement("h2");
    boxSaldo.id = "boxSaldo";
    boxSaldo.innerHTML = `Saldo da conta: ${c.saldo}`;

    document.body.appendChild(divSaldo);
    divSaldo.appendChild(boxSaldo);


    removerSaque();
    removerDeposito();

    document.getElementById("saldo").disabled = true;

}

function aparecerSaque() {

    let divSaque = document.getElementById("div");
    divSaque.class = "centralizar";
    divSaque.id = "divSaque";

    let boxSaque = document.createElement("input")
    boxSaque.type = Number;
    boxSaque.id = "boxSaque";

    let botaoSaque = document.createElement("button");
    botaoSaque.innerHTML = "Realizar Saque";
    botaoSaque.id = "btnSaque";
    botaoSaque.onclick = saque;

    document.body.appendChild(divSaque);
    divSaque.appendChild(boxSaque);
    divSaque.appendChild(botaoSaque);

    removerSaldo();
    removerDeposito();

    document.getElementById("saque").disabled = true;
}

function aparecerDeposito() {
    let divDeposito = document.createElement("div");
    divDeposito.class = "centralizar";
    divDeposito.id = "divDeposito";

    let boxDeposito = document.createElement("input");
    boxDeposito.type = Number;
    boxDeposito.id = "boxDeposito";

    let botaoDeposito = document.createElement("button");
    botaoDeposito.id = "btnDeposito";
    botaoDeposito.innerHTML = "Realizar Deposito";
    botaoDeposito.onclick = deposito;

    document.body.appendChild(divDeposito);
    divDeposito.appendChild(boxDeposito);
    divDeposito.appendChild(botaoDeposito);

    removerSaldo();
    removerSaque();

    document.getElementById("deposito").disabled = true;
}

function removerSaldo() {
    if (document.getElementById("divSaldo")) {
        document.body.removeChild(document.getElementById("divSaldo"));
        document.getElementById("saldo").disabled = false;
    }
}

function removerSaque() {
    if (document.getElementById("divSaque")) {
        document.body.removeChild(document.getElementById("divSaque"));
        document.getElementById("saque").disabled = false;
    }
}

function removerDeposito() {
    if (document.getElementById("divDeposito")) {
        document.body.removeChild(document.getElementById("divDeposito"));
        document.getElementById("deposito").disabled = false;
    }
}

function saque() {

    valor = document.getElementById("boxSaque").value;
    valor = Number(valor);
    
    if (b.saldo >= valor && c.saldo >= valor && valor > 0) {

        b.saldo -= valor;
        c.saldo -= valor;

        document.body.removeChild(document.getElementById("divSaque"));
        aparecerSaldo();
        document.getElementById("saque").disabled = false;

        window.alert("Operação Realizada!");

        var registro = [c.nome, c.saldo, "Saque", valor, b.saldo].toString();
        localStorage.setItem("registro" + i, registro);
        i++;

    } else if (valor < 0) {
        b.saldo = b.saldo;
        c.saldo = c.saldo;

        document.getElementById("boxSaque").value = "";

        window.alert("Valor Inválido!\nInsira outro valor!");

    } else if (c.saldo < valor) {
        b.saldo = b.saldo;
        c.saldo = c.saldo;

        document.getElementById("boxSaque").value = "";

        window.alert("Saldo Indisponível!\nInsira outro valor equivalente ao seu saldo!");

    } else if (b.saldo < valor) {
        b.saldo = b.saldo;
        c.saldo = c.saldo;

        document.getElementById("boxSaque").value = "";

        window.alert(`Saldo do Banco Indisponível!\nInsira outro valor!\nSaldo do caixa: ${b.saldo}`);

    } else {
        document.getElementById("boxSaque").value = "";
        window.alert(`Ocorreu algum erro!\nPor favor tente novamente`);
    }

}

function deposito() {

    valor = document.getElementById("boxDeposito").value;
    valor = Number(valor);

    if (valor > 0) {
        b.saldo += valor;
        c.saldo += valor;

        document.body.removeChild(document.getElementById("divDeposito"));
        document.getElementById("deposito").disabled = false;
        aparecerSaldo();

        window.alert("Operação Realizada!");

        var registro = [c.nome, c.saldo, "Deposito", valor, b.saldo].toString();
        localStorage.setItem("registro" + i, registro);
        i++;
        
    } else {
        b.saldo = b.saldo;
        c.saldo = c.saldo;
        
        document.getElementById("boxDeposito").value = "";

        window.alert("Valor Inválido!\nInsira outro valor!");

    }
}