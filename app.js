function saudacao(nome) {

    if (!nome || nome.trim() === '') {

        throw new Error('Nome nÃ£o pode estar vazio');

    }

    return `OlÃ¡, ${nome}! Bem-vindo ao nosso sistema CI/CD!`;

}

function calcular(a, b, operacao) {

    switch(operacao) {

        case 'soma':

            return a + b;

        case 'subtracao':

            return a - b;

        case 'multiplicacao':

            return a * b;

        case 'divisao':

            if (b === 0) throw new Error('DivisÃ£o por zero nÃ£o Ã© permitida');

            return a / b;

        default:

            throw new Error('OperaÃ§Ã£o nÃ£o suportada');

    }

}

// Exportar funÃ§Ãµes para testes (em ambiente Node.js)

if (typeof module !== 'undefined' && module.exports) {

    module.exports = { saudacao, calcular };

}

console.log('AplicaÃ§Ã£o carregada com sucesso!');
