const readline = require('readline'); 
// Importa a biblioteca 'readline' do Node.js. Ela permite ler o que o usuário digitar no terminal.

// ====== Classe Senha ======
class Senha {
    constructor(valor) {
        // Quando criamos um novo objeto Senha, guardamos o valor digitado pelo usuário
        this.valor = valor;
    }

    tamanho() {
        // Retorna o número de caracteres da senha
        return this.valor.length;
    }

    contemMaiuscula() {
        // Verifica se a senha tem pelo menos uma letra maiúscula
        return /[A-Z]/.test(this.valor);
    }

    contemNumero() {
        // Verifica se a senha tem pelo menos um número
        return /\d/.test(this.valor);
    }

    contemEspecial() {
        // Verifica se a senha tem pelo menos um caractere especial (como @, #, !, etc.)
        return /[!@#$%^&*(),.?":{}|<>]/.test(this.valor);
    }
}

// ====== Classe ValidadorSenha ======
class ValidadorSenha {
    constructor(senha) {
        // Recebe um objeto da classe Senha para validar
        this.senha = senha;
    }

    validarRequisitos() {
        // Verifica se a senha cumpre todas as regras básicas

        if (this.senha.tamanho() < 8) {
            console.log("❌ Senha muito curta! Deve ter pelo menos 8 caracteres.");
            return false; // Encerra se não cumprir
        }

        if (!this.senha.contemMaiuscula()) {
            console.log("❌ Senha deve conter pelo menos uma letra maiúscula.");
            return false;
        }

        if (!this.senha.contemNumero()) {
            console.log("❌ Senha deve conter pelo menos um número.");
            return false;
        }

        if (!this.senha.contemEspecial()) {
            console.log("❌ Senha deve conter pelo menos um caractere especial.");
            return false;
        }

        return true; // Se passar em todas, a senha é válida
    }
}

// ====== Função principal que roda o programa ======
function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Pergunta para o usuário a senha que ele quer validar
    rl.question("Digite a senha para validar: ", (senhaDigitada) => {
        const senha = new Senha(senhaDigitada); // Cria um objeto Senha com o texto digitado
        const validador = new ValidadorSenha(senha); // Cria um validador para essa senha

        // Verifica se a senha é válida e mostra o resultado
        if (validador.validarRequisitos()) {
            console.log("✅ Senha válida.");
        } else {
            console.log("⚠️ Senha inválida.");
        }

        rl.close(); // Encerra a leitura do terminal
    });
}

// ====== Iniciar o programa ======
main();