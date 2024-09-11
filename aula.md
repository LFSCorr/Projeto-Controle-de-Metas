## Linguagem de programação:

- Maneira de dar instrução ao computador.
- Como um lego, você ira utilizar peças para criar algoritmos, ou seja, para resolver problemas.

  **Algoritmo**: Sequência de passos lógica e finita para resolução de um problemea.

  ## Peças de uma linguagem:

  - Comentários
  - Declaração de variaveis (const, let)
  - Operadores (atribuição, concatenação, matemáticos, logicos)
  - Tipos de dados (string, number, boolean)
  - Estrutura de dados (functions, object, array)
  - controle de fluxo (if/else)
  - Estrutura de repetição (for, while)

  # Fases da resolução de um problema:

  - Coletar os dados
  - Processar os dados (manipular, alterar ...)
  - Apresentar os dados

  ## Escopos e variáveis:

  - Variáveis globais e locais
  - Constantes


  ## Tipos de dados:

  - Strings (textos): "" '' ``
  - Number: 2, 1.4 ...
  - Boolean: true or false

  ## Operadores:

  - Operador de atribição de valor (```let metas = {}```)
  - Operador de contatenação + (```metas.log(metas(1) + metas(0))```)
  - Operadores de comparação == (```if(meta.length == 0){}```, ```if(meta.length != 0)```, ```if(meta.length > 0)```, ```if(meta.length < 0)```)
  - Spread operator: ... (```choices: [...Realizadas]```)

  ## Estrutura de dados:

  ## Arrays:

  - Uma lista que contém qualquer tipo de dado (```let meta = {}```,```choices []```)
  - Métodos de array (Higher Order Functions):
    - Push (```XX.push({value: XX, checked:false})```)
    - Find (```const XX = XX.find((m) => {return m.value == resposta}```)
    - forEach (```metas.forEach((m) => {m.checked = false)}```)
    - Filter (```const XX = metas.filter()```)
    - Map (```const metasDesmarcadas = metas.map((meta) => {}```)

  ## Objetos:

  - Atributos e métodos
  - Criação e manipulação de objetos
  - Acesso a propriedade de objetos
  - No JS todu pode ser um objeto

  ## Functions:

   - Criar
   - Executar
   - Arrow function (```const criarMeta = () => {}```)
   - Named function (```function criarMeta() {}```)

   ## Estrutura de repetição:

   - While (```while() {}```)

   ## Condicionais:

   - Switch (```switch() {}```)
   - if/else (```if(meta.length == 0){}```)

   ## Módulos em Node.js:

   - Importação de módulos (require, CommonJS) (```npm install inquirer```)
   - Biblioteca 'inquirer' para criar prompts interativos

   ## Programação assíncrona e Promises:

   - Uso de funções assíncronas (async/await) (Espera a resposta do usuario, async necessario para await funcionar)
