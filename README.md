# validadorSenha
Validador de senhas em Node.js que verifica se a senha digitada possui no mínimo 8 caracteres, uma letra maiúscula, um número e um caractere especial.

# REQUISITOS ATENDIDOS
  2 classes e 7 métodos: 
      - class Senha: Representa a senha que será validada.
         métodos:
         > constructor(valor): Inicializa a classe com o valor da senha e armazena esse valor no objeto.
         > tamanho(): Retorna o tamanho da senha.
         > contemMaiuscula(): Verifica se a senha contém pelo menos uma letra maiúscula.
         > contemNumero(): Verifica se a senha contém pelo menos um número.
         > contemEspecial(): Verifica se a senha contém pelo menos um caractere especial.

      - class ValidadorSenha: Contém os métodos que validam a senha (se contém maiúsculas, números, caracteres especiais, etc.).
         métodos:
         > constructor(senha): Inicializa a classe com um objeto da classe Senha (a senha que será validada).
         > validarRequisitos(): Valida se a senha atende aos requisitos mínimos (tamanho, maiúscula, número e caractere especial). Retorna true se a senha for válida, ou false caso contrário.

   Controle de fluxo: 
   - if: Verifica se a senha tem menos de 8 caracteres, se não contém maiúsculas, números ou caracteres especiais. 
         Se a condição for verdadeira (exemplo: senha muito curta), ele imprime uma mensagem de erro e retorna false.
   - for: O loop percorre o array verificacoes, que contém os resultados das verificações de maiúsculas, números e caracteres especiais. 
         Para cada item do array, se o item for true (ou seja, o requisito foi atendido), ele soma 1 ponto à variável pontos.
   - if: Dentro do for (loop), verifica se cada teste (contemMaiuscula, contemNumero, contemEspecial) passou para somar pontos

# FLUXO DE FUNCIONAMENTO:
   Usuário digita uma senha
   ↓
   Classe Senha é criada com a senha digitada
   ↓
   ValidadorSenha valida os requisitos:
      - Tem 8 caracteres?
      - Tem letra maiúscula?
      - Tem número?
      - Tem caractere especial?
   ↓
   Se OK → Mostra "✅ Senha válida"
   Se FALHOU → Mostra o erro e "⚠️ Senha inválida"
   ↓
   Fim

# Destrinchando o loop de pontos de validador de senha 
   Criado o array (lista) chamada verificacoes.
      const verificacoes = [
         this.senha.contemMaiuscula(), 
         this.senha.contemNumero(), 
         this.senha.contemEspecial()
      ];
   Ela guarda o resultado das funções que testam a senha:
   -> this.senha.contemMaiuscula() → retorna true se tem letra maiúscula
   -> this.senha.contemNumero() → retorna true se tem número
   -> this.senha.contemEspecial() → retorna true se tem caractere especial

   Para passar pelo loop para somar pontos conforme requisitos:
      for (let i = 0; i < verificacoes.length; i++) 
   onde:
   -> i = 0 → começa no primeiro item do array
   -> Continua enquanto i for menor que o tamanho do array (verificacoes.length)
   -> A cada volta (i++), aumenta 1 no i, passando para o próximo item
   Ou seja, o loop vai percorrer todos os valores dentro do array verificacoes

# Destrinchando a função principal que executa o programa
   A função main() é onde o programa começa. Ela cria uma interface para ler a senha do usuário no terminal com readline. O usuário digita a senha e, então, o programa verifica se a senha atende aos requisitos (tamanho, maiúsculas, números, etc.). Se for válida, classifica a força da senha e mostra no terminal. No final, a interface é fechada com rl.close(). O programa começa a rodar quando main() é chamado no final do código.
