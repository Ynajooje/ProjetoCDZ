const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const obterSigno = (dia, mes) => {
    switch (mes) {
        case 1:
            return dia >= 21 ? "Camus de Aquário" : "Shura de Capricórnio";
        case 2:
            return dia >= 20 ? "Afrodite de Peixes" : "Camus de Aquário";
        case 3:
            return dia >= 21 ? "Mu de Áries" : "Afrodite de Peixes";
        case 4:
            return dia >= 21 ? "Aldebaran de Touro" : "Mu de Áries";
        case 5:
            return dia >= 21 ? "Saga de Gêmeos" : "Aldebaran de Touro";
        case 6:
            return dia >= 21 ? "Máscara da Morte de Câncer" : "Saga de Gêmeos";
        case 7:
            return dia >= 23 ? "Aiolia de Leão" : "Máscara da Morte de Câncer";
        case 8:
            return dia >= 23 ? "Shaka de Virgem" : "Aiolia de Leão";
        case 9:
            return dia >= 23 ? "Dohko de Libra" : "Shaka de Virgem";
        case 10:
            return dia >= 23 ? "Milo de Escorpião" : "Dohko de Libra";
        case 11:
            return dia >= 22 ? "Aiolos de Sagitário" : "Milo de Escorpião";
        case 12:
            return dia >= 22 ? "Shura de Capricórnio" : "Aiolos de Sagitário";
        default:
            return "Data inválida";
    }
};

rl.question('Digite sua data de nascimento (dd/mm): ', (dataNascimento) => {
    let partesData = dataNascimento.split("/");

    let dia = parseInt(partesData[0], 10);
    let mes = parseInt(partesData[1], 10);

    if (dia >= 1 && dia <= 31 && mes >= 1 && mes <= 12) {
        let signo = obterSigno(dia, mes);
        console.log("Seu cavaleiro é: " + signo);
    } else {
        console.log("Data inválida. Por favor, insira uma data válida.");
    }

    rl.close();
});