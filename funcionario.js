// Heranças JS

function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz olá");
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    this.salario = salario;

    this.dizCargo = function() {
        console.log(this.salario);
    }
    Pessoa.call(this, nome);
}

const pessoa1 = new Pessoa('Maria');
const funcionario1 = new Funcionario('Maria', 'Dev Front-end', 5000);
pessoa1.dizOi();
funcionario1.dizCargo();