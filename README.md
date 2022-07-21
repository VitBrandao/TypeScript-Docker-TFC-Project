# Requisitos

## Database

#### Dicas para começar a seção de Database 👀
  - Comece rodando o comando `npm run build` na pasta do `back-end` para buildar a aplicação
  - [Nessa seção](#Sequelize) temos o diagrama de entidades;
  - Mantenha o arquivo `/app/backend/src/database/migrations/99999999999999-create-z.js`, pois ele é necessário para a avaliação dos requisitos dessa seção.
  - a leitura da seção `Bônus: Model com Sequelize` no conteúdo de `TypeScript: Tipagem Estática e Generics`, contido [nesse link](https://app.betrybe.com/course/back-end/typescript/tipagem-estatica-e-generics/68eccf60-a982-4455-837d-da31e8726be5), é recomendável!
	
### 1 - Desenvolva em `/app/backend/src/database` nas pastas correspondentes, uma migration e um model para a tabela de `teams`

  - O avaliador consultará os dados da tabela teams, verificando se ela contém os dados iniciais corretos.


### 2 - Desenvolva em `/app/backend/src/database` nas pastas correspondentes, uma migration e um model para a tabela de `matches`

  - O avaliador consultará os dados da tabela matches, verificando se ela contém os dados iniciais corretos.

### 3 - Desenvolva em `/app/backend/src/database` nas pastas correspondentes, uma migration e um model para a tabela `users`

  - O avaliador consultará os dados da tabela users, verificando se ela contém os dados iniciais corretos.

## Login

- A rota deve ser (`/login`);

- A rota deve receber os campos `email` e `password` e esses campos devem ser validados no banco de dados:
  - O campo `email` deve receber um email válido;
  - O Campo `password` deve ter mais de 6 caracteres.

- Sua chave `JWT` do back-end, utilizada para assinatura do token, deve ser salva no arquivo `app/backend/jwt.evaluation.key`. Ela pode ser carregada em sua aplicação utilizando a biblioteca `fs` e é necessária para passar nos testes. Veja mais sobre isso na [seção sobre JWT](#Chave-JWT-e-criptografia-de-senhas);

- As senhas que existem no banco de dados estão encriptadas. Essa é a forma segura de guardar senhas, portnato use o `bcryptjs` para comparar a senha do banco com a recebida no corpo da requisição. [Essa biblioteca](https://www.npmjs.com/package/bcryptjs) já está instalada nas dependências do projeto. 


- O body da requisição deve conter o seguinte formato:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```

### 4 - (`TDD`) Desenvolva testes que cubram no mínimo 5% dos arquivos back-end em `/src`, com um mínimo de 7 linhas cobertas

  **Sugestões:**
  - Baseando-se no contrato do endpoint `/login` **do próximo requisito**, inicie um teste de integração utilizando a metodologia `TDD` com a implementação do requisito seguinte;
  - Nesse primeiro momento, foque em desenvolver o que pede o requisito, progredindo gradualmente a partir disso;
  - Para tanto, utilize/altere o arquivo de referência `app/backend`/src`/tests/change.me.test.ts`;
  - Veja a seção de [Testes de cobertura](#Testes-de-cobertura) para mais detalhes.

### 5 - Desenvolva o endpoint `/login` no back-end de maneira que ele permita o acesso com dados válidos no front-end

  - A rota de ser do tipo `POST`;

  - O avaliador verificará se é possível fazer o login com dados corretos e que após o acesso será redirecionado para a tela de jogos.

- Se o login foi feito com sucesso, o resultado retornado deverá ser similar ao exibido abaixo, com um status http `200`:
	
  ```json
  {
    "user": {
      "id": 1,
      "username": "Admin",
      "role": "admin",
      "email": "admin@admin.com"
    },
    "token": "123.456.789" // Aqui deve ser o token gerado pelo backend.
  }
  ```

### 6 - (`TDD`) Desenvolva testes que cubram no mínimo 10% dos arquivos back-end em `/src`, com um mínimo de 19 linhas cobertas

  **Sugestão:**
  - Evolua os testes de integração da sua rota `/login`, utilizando o método `TDD`, agora considerando **o contrato do próximo requisito**.

### 7 - Desenvolva o endpoint `/login` no back-end de maneira que ele não permita o acesso com um email inválido no front-end

  - O avaliador verificará se fazer o login com um email incorreto retornará status não-autorizado.

  - Se o login tiver o "email" **inválido**, o resultado retornado será similar ao exibido abaixo, com um status http `401`:
	
  ```json
    { "message": "Incorrect email or password" }
  ```

### 8 - (`TDD`) Desenvolva testes que cubram no mínimo 15% dos arquivos back-end em `/src`, com um mínimo de 25 linhas cobertas

  **Sugestão:**
  - Evolua os testes de integração da sua rota `/login`, utilizando o método `TDD`, agora considerando **o contrato do próximo requisito**.

### 9 - Desenvolva o endpoint `/login` no back-end de maneira que ele não permita o acesso com uma senha inválida no front-end

  - O avaliador verificará se fazer o login com uma senha incorreta retornará status não-autorizado.

  - Se o login tiver a "senha" **inválida** o resultado retornado deverá ser conforme exibido abaixo, com um status http `401`:
	
  ```json
    { "message": "Incorrect email or password" }
  ```

### 10 - (`TDD`) Desenvolva testes que cubram no mínimo 20% dos arquivos back-end em `/src`, com um mínimo de 35 linhas cobertas

  **Sugestão:**
  - Evolua os testes de integração da sua rota `/login`, utilizando o método `TDD`, agora considerando **o contrato do próximo requisito**.

### 11 - Desenvolva o endpoint `/login` no back-end de maneira que ele não permita o acesso sem informar um email no front-end

  - O avaliador verificará se ao tentar fazer o login sem um email, haverá o retorno de status não-autorizado.

 - Se o login não tiver o campo "email", o resultado retornado deverá ser a mensagem abaixo, com um status http `400`:
	
  ```json
    { "message": "All fields must be filled" }
  ```

### 12 - (`TDD`) Desenvolva testes que cubram no mínimo 30% dos arquivos back-end em `/src`, com um mínimo de 45 linhas cobertas

  **Sugestão:**
  - Evolua os testes de integração da sua rota `/login`, utilizando o método `TDD`, agora considerando **os contratos dos próximos dois requisitos**.

### 13 - Desenvolva o endpoint `/login` no back-end de maneira que ele não permita o acesso sem informar uma senha no front-end

  - O avaliador verificará se ao tentar fazer login sem senha, o retorno será status não-autorizado.

  - Se o login não tiver o campo "password", o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:
	
  ```json
    { "message": "All fields must be filled" }
  ```

### 14 - Desenvolva o endpoint `/login/validate` no back-end de maneira que ele retorne os dados corretamente no front-end

  - Deve ser uma rota `GET` que receba um `header` com parâmetro `authorization`, onde ficará armazenado o token gerado no login;

  - O avaliador verificará se ao tentar bater na rota com um token válido, o mesmo retornará o tipo de usuário.

  - A resposta deve ser de status `200` com uma `string` contendo a `role` do *user*:
	
  ```plaintext
    "admin"
  ```

## Jogos

 - Os requisitos a seguir consideram o consumo da rota `/teams` para retornar os nomes dos times associados à partida na renderização do front-end

### 15 - (`TDD`) Desenvolva testes que cubram no mínimo 45% dos arquivos back-end em `/src`, com um mínimo de 70 linhas cobertas

  **Sugestão:**
  - Crie um novo teste de integração, agora da sua rota `/teams`, utilizando o método `TDD`, considerando **os contratos dos próximos dois requisitos**.

### 16 - Desenvolva o endpoint `/teams` no back-end de forma que ele possa retornar todos os times corretamente

  - Deve ser uma rota `GET` com resposta com status `200` e com um `json` contendo o retorno no seguinte modelo:

```json
[
	{
		"id": 1,
		"teamName": "Avaí/Kindermann"
	},
	{
		"id": 2,
		"teamName": "Bahia"
	},
	{
		"id": 3,
		"teamName": "Botafogo"
	},
	...
]
```

### 17 - Desenvolva o endpoint `/teams/:id` no back-end de forma que ele possa retornar dados de um time específico

  - Deve ser uma rota `GET` com resposta com status `200` e com um `json` contendo o retorno no seguinte modelo:

```json
{
	"id": 5,
	"teamName": "Cruzeiro"
}
```

### 18 - (`TDD`) Desenvolva testes que cubram no mínimo 60% dos arquivos back-end em `/src`, com um mínimo de 80 linhas cobertas

  **Sugestão:**
  - Crie um novo teste de integração, agora da sua rota `/matches`, utilizando o método `TDD`, agora considerando **os contratos dos próximos três requisitos**.


### 19 - Desenvolva o endpoint `/matches` de forma que os dados apareçam corretamente na tela de partidas no front-end.

  - A rota deve ser um `GET` e retorna uma lista de partidas;

  - Será validado que a página apresentará todos os dados de partidas sem nenhum filtro.

    Exemplo de retorno:
    ```json
    [
      {
        "id": 1,
        "homeTeam": 16,
        "homeTeamGoals": 1,
        "awayTeam": 8,
        "awayTeamGoals": 1,
        "inProgress": false,
        "teamHome": {
          "teamName": "São Paulo"
        },
        "teamAway": {
          "teamName": "Grêmio"
        }
      },
      ...
      {
        "id": 41,
        "homeTeam": 16,
        "homeTeamGoals": 2,
        "awayTeam": 9,
        "awayTeamGoals": 0,
        "inProgress": true,
        "teamHome": {
          "teamName": "São Paulo"
        },
        "teamAway": {
          "teamName": "Internacional"
        }
      }
    ]
    ```

### 20 - Desenvolva o endpoint `/matches` de forma que seja possível filtrar as partidas em andamento na tela de partidas do front-end

  - A rota deverá ser do tipo `GET` e retornar uma lista de partidas filtradas;

  - Será validado que ao escolher a opção de partidas em andamento serão filtradas todas as partidas em andamento;

  - Essa requisição deverá usar `query string` para definir o parâmetro.
    ex: `matches?inProgress=true`

  Exemplo de retorno da requisição:
  ```json
  [
    {
      "id": 41,
      "homeTeam": 16,
      "homeTeamGoals": 2,
      "awayTeam": 9,
      "awayTeamGoals": 0,
      "inProgress": true,
      "teamHome": {
        "teamName": "São Paulo"
      },
      "teamAway": {
        "teamName": "Internacional"
      }
    },
    {
      "id": 42,
      "homeTeam": 6,
      "homeTeamGoals": 1,
      "awayTeam": 1,
      "awayTeamGoals": 0,
      "inProgress": true,
      "teamHome": {
        "teamName": "Ferroviária"
      },
      "teamAway": {
        "teamName": "Avaí/Kindermann"
      }
    }
  ]
  ```

### 21 - Desenvolva o endpoint `/matches` de forma que seja possível filtrar as partidas finalizadas na tela de partidas do front-end

  - A rota deverá ser do tipo `GET` e retornar uma lista de partidas filtradas;

  - Será validado que ao escolher a opção de partidas finalizadas serão filtradas todas as partidas finalizadas;

  - Essa requisição deverá usar `query string` para definir o parâmetro:
    ex: `matches?inProgress=false`

  Exemplo de retorno da requisição:
  ```json
  [
    {
      "id": 1,
      "homeTeam": 16,
      "homeTeamGoals": 1,
      "awayTeam": 8,
      "awayTeamGoals": 1,
      "inProgress": false,
      "teamHome": {
        "teamName": "São Paulo"
      },
      "teamAway": {
        "teamName": "Grêmio"
      }
    },
    {
      "id": 2,
      "homeTeam": 9,
      "homeTeamGoals": 1,
      "awayTeam": 14,
      "awayTeamGoals": 1,
      "inProgress": false,
      "teamHome": {
        "teamName": "Internacional"
      },
      "teamAway": {
        "teamName": "Santos"
      }
    }
  ]
  ```

## Adicionar Partidas

  - Para os requisitos de criação de partidas, é necessário que a rota `/teams` funcione corretamente.

### 22 - (`Bônus`; `TDD`) Desenvolva testes que cubram no mínimo 80% dos arquivo back-end em `/src`, com um mínimo de 100 linhas cobertas

  **Sugestão:**
  - Evolua os testes de integração da sua rota `/matches`, utilizando o método `TDD`, agora considerando **o contrato dos próximos requisitos**.

### 23 - Desenvolva a rota `/matches` de modo que seja possível salvar uma partida com o status de inProgress como true no banco de dados

  - A rota deverá ser do tipo `POST` e retornar a partida inserida no banco de dados;

  - Será validado que é possível salvar um jogo no banco de dados e ver o jogo na página de jogos;

  - A partida só pode ser criada com token JWT validado;

  - O corpo da requisição terá o seguinte formato:
	
  ```json
  {
    "homeTeam": 16, // O valor deve ser o id do time
    "awayTeam": 8, // O valor deve ser o id do time
    "homeTeamGoals": 2,
    "awayTeamGoals": 2,
    "inProgress": true // a partida deve ser criada como em progresso
  }
  ```

  - Caso a partida seja inserida com sucesso, deve-se retornar os dados da partida, com _status_ `201`:

  ```json
  {
    "id": 1,
    "homeTeam": 16,
    "homeTeamGoals": 2,
    "awayTeam": 8,
    "awayTeamGoals": 2,
    "inProgress": true,
  }
  ```

### 24 - Desenvolva a rota `/matches/:id/finish` de modo que seja possível salvar uma partida com o status de inProgress como false no banco de dados

  - A rota deve ser do tipo `PATCH`;

  - Será recebido o `id` pelo parâmetro da URL;

  - Será validado que ao finalizar uma partida, a alteração é feita no banco de dados e na página.
	
  - Deve-se retornar, com um status `200`, a seguinte mensagem:

  ```json
  { "message": "Finished" }
  ```

### 25 - Desenvolva o endpoint `/matches` de forma que não seja possível inserir uma partida com times iguais

  - Será validado que não é possível inserir uma partida com times iguais;

  - Não deve ser possível criar uma partida com o mesmo time, por exemplo: Barcelona x Barcelona. Caso isso ocorra, deve-se retornar, com um status `401`, a seguinte mensagem::

  ```json
  { "message": "It is not possible to create a match with two equal teams" }
  ```

### 26 - Desenvolva o endpoint `/matches` de forma que não seja possível inserir uma partida com um time que não existe na tabela teams

  - Será validado que não é possível inserir uma partida com um time que não existe na tabela teams;

  - Caso algum dos times não esteja cadastrado no banco de dados, deve-se retornar, com um status `404,` a seguinte mensagem:

  ```json
  { "message": "There is no team with such id!" }
  ```

## Editar Partidas

### 27 - Desenvolva o endpoint `/matches/:id` de forma que seja possível atualizar partidas em andamento

  - O endpoint deve ser do tipo `PATCH`;

  - Será recebido o `id` pelo parâmetro da URL;

  - Será avaliado que é possível alterar o resultado de uma partida.

  - O corpo da requisição terá o seguinte formato:
  ```json
  {
    "homeTeamGoals": 3,
    "awayTeamGoals": 1
  }
  ```
  - Será avaliado que é o endpoint responde à requisição com um status `200` e qualquer corpo.

### 28 - Desenvolva o endpoint `/matches/:id` de forma que seja possível finalizar partidas em andamento

  - O endpoint deve ser do tipo `PATCH`;

  - Será recebido o `id` pelo parâmetro da url;

  - Será avaliado que é possível finalizar uma partida em andamento.

  - Será avaliado que o endpoint responde à requisição com um status `200` e qualquer corpo.

## Leaderboards (placares)

 ▶️ Para construir a classificação dos times, devem ser seguidas as seguintes regras de negócios:

    - `Classificação`: Posição na classificação;
    - `Time`: Nome do time;
    - `P`: Total de Pontos;
    - `J`: Total de Jogos;
    - `V`: Total de Vitórias;
    - `E`: Total de Empates;
    - `D`: Total de Derrotas;
    - `GP`: Gols marcados a favor;
    - `GC`: Gols sofridos;
    - `SG`: Saldo total de gols;
    - `%`: Aproveitamento do time.

    <br/>

  - Todas as regras de negócio e cálculos necessários deverão ser realizados no seu back-end. A aplicação front-end apenas renderizará essas informações.

  - Para calcular o `Total de Pontos` você deve levar em consideração que:

    - O time `vitorioso`: marcará +3 pontos;
    - O time `perdedor`: marcará 0 pontos;
    - Em caso de `empate`: ambos os times marcam +1 ponto.

  - Para o campo `Aproveitamento do time (%)`, que é a porcentagem de jogos ganhos, use a seguinte fórmula: `P/(J*3)*100`, onde:

    - `P`: Total de Pontos;
    - `J`: Total de Jogos.

    Obs.: O seu resultado deverá ser limitado a `duas casas decimais`.

  - O resultado deverá ser ordenado sempre de forma decrescente, levando em consideração a quantidade de pontos que o time acumulou. Em caso de empate no `Total de Pontos`, você deve levar em consideração os seguintes critérios para desempate:

  **Ordem para desempate**

  1º Total de Vitórias;
  2º Saldo de gols;
  3º Gols a favor;
  4º Gols sofridos.


  ⚠️ **Atenção:** ⚠️

  - Por padrão, as respostas de todos os seus endpoints deverão estar em inglês, mesmo que a renderização no front-end seja em português.
  - A sua tabela deverá renderizar **somente** as PARTIDAS que já foram FINALIZADAS!
  
**Os seguintes pontos serão avaliados:**

  ```
  - Se a lista de classificação está correta;
  - Se a regra de classificação se mantém mesmo com mudanças na classificação;
  - Se a tabela de classificação tem 10 colunas;
  - Se a tabela tem uma linha para cada time.
  ```

**Exemplo de retorno esperado:**

  ```json
  [
    {
      "name": "Palmeiras",
      "totalPoints": 13,
      "totalGames": 5,
      "totalVictories": 4,
      "totalDraws": 1,
      "totalLosses": 0,
      "goalsFavor": 17,
      "goalsOwn": 5,
      "goalsBalance": 12,
      "efficiency": 86.67
    },
    {
      "name": "Corinthians",
      "totalPoints": 12,
      "totalGames": 5,
      "totalVictories": 4,
      "totalDraws": 0,
      "totalLosses": 1,
      "goalsFavor": 12,
      "goalsOwn": 3,
      "goalsBalance": 9,
      "efficiency": 80
    },
    {
      "name": "Santos",
      "totalPoints": 11,
      "totalGames": 5,
      "totalVictories": 3,
      "totalDraws": 2,
      "totalLosses": 0,
      "goalsFavor": 12,
      "goalsOwn": 6,
      "goalsBalance": 6,
      "efficiency": 73.33
    },
    ...
  ]
  ```


## Leaderboard Home

### 29 - Desenvolva o endpoint `/leaderboard/home` de forma que seja possível filtrar as classificações dos times da casa na tela de classificação do front-end com os dados iniciais do banco de dados

  - O endpoint deverá ser do tipo `GET` e ter o retorno como descrito no exemplo do [leaderboard](#leaderboards);

  - Será avaliado que ao fazer a requisição ao endpoint `/leaderboard/home` serão retornados os campos e valores corretos, considerando os dados iniciais do banco de dados.
	

  <details>  
<summary><strong> Retorno esperado: </strong></summary> <br/>

```js
[
    {
      name: 'Santos',
      totalPoints: '9',
      totalGames: '3',
      totalVictories: '3',
      totalDraws: '0',
      totalLosses: '0',
      goalsFavor: '9',
      goalsOwn: '3',
      goalsBalance: '6',
      efficiency: '100'
    },
    {
      name: 'Palmeiras',
      totalPoints: '7',
      totalGames: '3',
      totalVictories: '2',
      totalDraws: '1',
      totalLosses: '0',
      goalsFavor: '10',
      goalsOwn: '5',
      goalsBalance: '5',
      efficiency: '77.78'
    },
    {
      name: 'Corinthians',
      totalPoints: '6',
      totalGames: '2',
      totalVictories: '2',
      totalDraws: '0',
      totalLosses: '0',
      goalsFavor: '6',
      goalsOwn: '1',
      goalsBalance: '5',
      efficiency: '100'
    },
    {
      name: 'Grêmio',
      totalPoints: '6',
      totalGames: '2',
      totalVictories: '2',
      totalDraws: '0',
      totalLosses: '0',
      goalsFavor: '4',
      goalsOwn: '1',
      goalsBalance: '3',
      efficiency: '100'
    },
    {
      name: 'Real Brasília',
      totalPoints: '6',
      totalGames: '2',
      totalVictories: '2',
      totalDraws: '0',
      totalLosses: '0',
      goalsFavor: '2',
      goalsOwn: '0',
      goalsBalance: '2',
      efficiency: '100'
    },
    {
      name: 'São Paulo',
      totalPoints: '4',
      totalGames: '2',
      totalVictories: '1',
      totalDraws: '1',
      totalLosses: '0',
      goalsFavor: '4',
      goalsOwn: '1',
      goalsBalance: '3',
      efficiency: '66.67'
    },
    {
      name: 'Internacional',
      totalPoints: '4',
      totalGames: '3',
      totalVictories: '1',
      totalDraws: '1',
      totalLosses: '1',
      goalsFavor: '4',
      goalsOwn: '6',
      goalsBalance: '-2',
      efficiency: '44.44'
    },
    {
      name: 'Botafogo',
      totalPoints: '4',
      totalGames: '3',
      totalVictories: '1',
      totalDraws: '1',
      totalLosses: '1',
      goalsFavor: '2',
      goalsOwn: '4',
      goalsBalance: '-2',
      efficiency: '44.44'
    },
    {
      name: 'Ferroviária',
      totalPoints: '3',
      totalGames: '2',
      totalVictories: '1',
      totalDraws: '0',
      totalLosses: '1',
      goalsFavor: '3',
      goalsOwn: '2',
      goalsBalance: '1',
      efficiency: '50'
    },
    {
      name: 'Napoli-SC',
      totalPoints: '2',
      totalGames: '2',
      totalVictories: '0',
      totalDraws: '2',
      totalLosses: '0',
      goalsFavor: '2',
      goalsOwn: '2',
      goalsBalance: '0',
      efficiency: '33.33'
    },
    {
      name: 'Cruzeiro',
      totalPoints: '1',
      totalGames: '2',
      totalVictories: '0',
      totalDraws: '1',
      totalLosses: '1',
      goalsFavor: '2',
      goalsOwn: '3',
      goalsBalance: '-1',
      efficiency: '16.67'
    },
    {
      name: 'Flamengo',
      totalPoints: '1',
      totalGames: '2',
      totalVictories: '0',
      totalDraws: '1',
      totalLosses: '1',
      goalsFavor: '1',
      goalsOwn: '2',
      goalsBalance: '-1',
      efficiency: '16.67'
    },
    {
      name: 'Minas Brasília',
      totalPoints: '1',
      totalGames: '3',
      totalVictories: '0',
      totalDraws: '1',
      totalLosses: '2',
      goalsFavor: '3',
      goalsOwn: '6',
      goalsBalance: '-3',
      efficiency: '11.11'
    },
    {
      name: 'Avaí/Kindermann',
      totalPoints: '1',
      totalGames: '3',
      totalVictories: '0',
      totalDraws: '1',
      totalLosses: '2',
      goalsFavor: '3',
      goalsOwn: '7',
      goalsBalance: '-4',
      efficiency: '11.11'
    },
    {
      name: 'São José-SP',
      totalPoints: '0',
      totalGames: '3',
      totalVictories: '0',
      totalDraws: '0',
      totalLosses: '3',
      goalsFavor: '2',
      goalsOwn: '5',
      goalsBalance: '-3',
      efficiency: '0'
    },
    {
      name: 'Bahia',
      totalPoints: '0',
      totalGames: '3',
      totalVictories: '0',
      totalDraws: '0',
      totalLosses: '3',
      goalsFavor: '0',
      goalsOwn: '4',
      goalsBalance: '-4',
      efficiency: '0'
    }
]
```
</details>

### 30 - Desenvolva o endpoint `/leaderboard/home` de forma que seja possível: filtrar as classificações dos times da casa na tela de classificação do front-end, e atualizar a tabela ao inserir a partida Corinthians 2 X 1 Internacional

  - O retorno deve continuar como no [leaderboard](#leaderboards), ordenando corretamente como na explicação;

  - Será avaliado que após acrescentar a partida Corinthians 2 X 1 Internacional e fazer a requisição ao endpoint `/leaderboard/home`, serão retornados os campos e valores corretos.

<details>  
<summary><strong> Retorno esperado: </strong></summary> <br/>

```js
[
  {
    name: 'Santos',
    totalPoints: '9',
    totalGames: '3',
    totalVictories: '3',
    totalDraws: '0',
    totalLosses: '0',
    goalsFavor: '9',
    goalsOwn: '3',
    goalsBalance: '6',
    efficiency: '100'
  },
  {
    name: 'Corinthians',
    totalPoints: '9',
    totalGames: '3',
    totalVictories: '3',
    totalDraws: '0',
    totalLosses: '0',
    goalsFavor: '8',
    goalsOwn: '2',
    goalsBalance: '6',
    efficiency: '100'
  },
  {
    name: 'Palmeiras',
    totalPoints: '7',
    totalGames: '3',
    totalVictories: '2',
    totalDraws: '1',
    totalLosses: '0',
    goalsFavor: '10',
    goalsOwn: '5',
    goalsBalance: '5',
    efficiency: '77.78'
  },
  {
    name: 'Grêmio',
    totalPoints: '6',
    totalGames: '2',
    totalVictories: '2',
    totalDraws: '0',
    totalLosses: '0',
    goalsFavor: '4',
    goalsOwn: '1',
    goalsBalance: '3',
    efficiency: '100'
  },
  {
    name: 'Real Brasília',
    totalPoints: '6',
    totalGames: '2',
    totalVictories: '2',
    totalDraws: '0',
    totalLosses: '0',
    goalsFavor: '2',
    goalsOwn: '0',
    goalsBalance: '2',
    efficiency: '100'
  },
  {
    name: 'São Paulo',
    totalPoints: '4',
    totalGames: '2',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '0',
    goalsFavor: '4',
    goalsOwn: '1',
    goalsBalance: '3',
    efficiency: '66.67'
  },
  {
    name: 'Internacional',
    totalPoints: '4',
    totalGames: '3',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '4',
    goalsOwn: '6',
    goalsBalance: '-2',
    efficiency: '44.44'
  },
  {
    name: 'Botafogo',
    totalPoints: '4',
    totalGames: '3',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '2',
    goalsOwn: '4',
    goalsBalance: '-2',
    efficiency: '44.44'
  },
  {
    name: 'Ferroviária',
    totalPoints: '3',
    totalGames: '2',
    totalVictories: '1',
    totalDraws: '0',
    totalLosses: '1',
    goalsFavor: '3',
    goalsOwn: '2',
    goalsBalance: '1',
    efficiency: '50'
  },
  {
    name: 'Napoli-SC',
    totalPoints: '2',
    totalGames: '2',
    totalVictories: '0',
    totalDraws: '2',
    totalLosses: '0',
    goalsFavor: '2',
    goalsOwn: '2',
    goalsBalance: '0',
    efficiency: '33.33'
  },
  {
    name: 'Cruzeiro',
    totalPoints: '1',
    totalGames: '2',
    totalVictories: '0',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '2',
    goalsOwn: '3',
    goalsBalance: '-1',
    efficiency: '16.67'
  },
  {
    name: 'Flamengo',
    totalPoints: '1',
    totalGames: '2',
    totalVictories: '0',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '1',
    goalsOwn: '2',
    goalsBalance: '-1',
    efficiency: '16.67'
  },
  {
    name: 'Minas Brasília',
    totalPoints: '1',
    totalGames: '3',
    totalVictories: '0',
    totalDraws: '1',
    totalLosses: '2',
    goalsFavor: '3',
    goalsOwn: '6',
    goalsBalance: '-3',
    efficiency: '11.11'
  },
  {
    name: 'Avaí/Kindermann',
    totalPoints: '1',
    totalGames: '3',
    totalVictories: '0',
    totalDraws: '1',
    totalLosses: '2',
    goalsFavor: '3',
    goalsOwn: '7',
    goalsBalance: '-4',
    efficiency: '11.11'
  },
  {
    name: 'São José-SP',
    totalPoints: '0',
    totalGames: '3',
    totalVictories: '0',
    totalDraws: '0',
    totalLosses: '3',
    goalsFavor: '2',
    goalsOwn: '5',
    goalsBalance: '-3',
    efficiency: '0'
  },
  {
    name: 'Bahia',
    totalPoints: '0',
    totalGames: '3',
    totalVictories: '0',
    goalsFavor: '0',
    goalsOwn: '4',
    goalsBalance: '-4',
    efficiency: '0'
  }
]
```
</details>

## Leaderboard away

### 31 - Desenvolva o endpoint `/leaderboard/away`, de forma que seja possível filtrar as classificações dos times na tela de classificação do front-end, com os dados iniciais do banco de dados

  - O endpoint deverá ser do tipo `GET` e ter o retorno como descrito no exemplo do [leaderboard](#leaderboards);

  - Será avaliado que ao fazer a requisição ao endpoint `/leaderboard/away`, serão retornados os campos e valores corretos considerando os dados iniciais do banco de dados.
	
<details>  
<summary><strong> Retorno esperado: </strong></summary> <br/>

```js
[
  {
    name: 'Palmeiras',
    totalPoints: '6',
    totalGames: '2',
    totalVictories: '2',
    totalDraws: '0',
    totalLosses: '0',
    goalsFavor: '7',
    goalsOwn: '0',
    goalsBalance: '7',
    efficiency: '100'
  },
  {
    name: 'Corinthians',
    totalPoints: '6',
    totalGames: '3',
    totalVictories: '2',
    totalDraws: '0',
    totalLosses: '1',
    goalsFavor: '6',
    goalsOwn: '2',
    goalsBalance: '4',
    efficiency: '66.67'
  },
  {
    name: 'Internacional',
    totalPoints: '6',
    totalGames: '2',
    totalVictories: '2',
    totalDraws: '0',
    totalLosses: '0',
    goalsFavor: '3',
    goalsOwn: '0',
    goalsBalance: '3',
    efficiency: '100'
  },
  {
    name: 'São José-SP',
    totalPoints: '6',
    totalGames: '2',
    totalVictories: '2',
    totalDraws: '0',
    totalLosses: '0',
    goalsFavor: '3',
    goalsOwn: '1',
    goalsBalance: '2',
    efficiency: '100'
  },
  {
    name: 'São Paulo',
    totalPoints: '4',
    totalGames: '3',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '5',
    goalsOwn: '5',
    goalsBalance: '0',
    efficiency: '44.44'
  },
  {
    name: 'Ferroviária',
    totalPoints: '4',
    totalGames: '3',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '4',
    goalsOwn: '5',
    goalsBalance: '-1',
    efficiency: '44.44'
  },
  {
    name: 'Real Brasília',
    totalPoints: '4',
    totalGames: '3',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '3',
    goalsOwn: '4',
    goalsBalance: '-1',
    efficiency: '44.44'
  },
  {
    name: 'Grêmio',
    totalPoints: '4',
    totalGames: '3',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '5',
    goalsOwn: '7',
    goalsBalance: '-2',
    efficiency: '44.44'
  },
  {
    name: 'Flamengo',
    totalPoints: '4',
    totalGames: '3',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '1',
    goalsOwn: '3',
    goalsBalance: '-2',
    efficiency: '44.44'
  },
  {
    name: 'Avaí/Kindermann',
    totalPoints: '3',
    totalGames: '2',
    totalVictories: '1',
    totalDraws: '0',
    totalLosses: '1',
    goalsFavor: '1',
    goalsOwn: '1',
    goalsBalance: '0',
    efficiency: '50'
  },
  {
    name: 'Cruzeiro',
    totalPoints: '3',
    totalGames: '3',
    totalVictories: '1',
    totalDraws: '0',
    totalLosses: '2',
    goalsFavor: '6',
    goalsOwn: '7',
    goalsBalance: '-1',
    efficiency: '33.33'
  },
  {
    name: 'Santos',
    totalPoints: '2',
    totalGames: '2',
    totalVictories: '0',
    totalDraws: '2',
    totalLosses: '0',
    goalsFavor: '3',
    goalsOwn: '3',
    goalsBalance: '0',
    efficiency: '33.33'
  },
  {
    name: 'Bahia',
    totalPoints: '2',
    totalGames: '2',
    totalVictories: '0',
    totalDraws: '2',
    totalLosses: '0',
    goalsFavor: '2',
    goalsOwn: '2',
    goalsBalance: '0',
    efficiency: '33.33'
  },
  {
    name: 'Minas Brasília',
    totalPoints: '1',
    totalGames: '2',
    totalVictories: '0',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '1',
    goalsOwn: '3',
    goalsBalance: '-2',
    efficiency: '16.67'
  },
  {
    name: 'Botafogo',
    totalPoints: '0',
    totalGames: '2',
    totalVictories: '0',
    totalDraws: '0',
    totalLosses: '2',
    goalsFavor: '1',
    goalsOwn: '4',
    goalsBalance: '-3',
    efficiency: '0'
  },
  {
    name: 'Napoli-SC',
    totalPoints: '0',
    totalGames: '3',
    totalVictories: '0',
    totalDraws: '0',
    totalLosses: '3',
    goalsFavor: '1',
    goalsOwn: '10',
    goalsBalance: '-9',
    efficiency: '0'
  }
  ]
```
</details>

### 32 - Desenvolva o endpoint `/leaderboard/away` de forma que seja possível: filtrar as classificações dos times na tela de classificação do front-end e atualizar a tabela ao inserir a partida Corinthians 2 X 1 Internacional

  - O retorno deve continuar como no [leaderboard](#leaderboards);

  - Será avaliado que após acrescentar a partida Corinthians 2 X 1 Internacional e fazer a requisição ao endpoint `/leaderboard/away`, serão retornados os campos e valores corretos.
	
<details>  
<summary><strong> Retorno esperado: </strong></summary> <br/>

```js
[
    {
      name: 'Palmeiras',
      totalPoints: '6',
      totalGames: '2',
      totalVictories: '2',
      totalDraws: '0',
      totalLosses: '0',
      goalsFavor: '7',
      goalsOwn: '0',
      goalsBalance: '7',
      efficiency: '100'
    },
    {
      name: 'Corinthians',
      totalPoints: '6',
      totalGames: '3',
      totalVictories: '2',
      totalDraws: '0',
      totalLosses: '1',
      goalsFavor: '6',
      goalsOwn: '2',
      goalsBalance: '4',
      efficiency: '66.67'
    },
    {
      name: 'Internacional',
      totalPoints: '6',
      totalGames: '3',
      totalVictories: '2',
      totalDraws: '0',
      totalLosses: '1',
      goalsFavor: '4',
      goalsOwn: '2',
      goalsBalance: '2',
      efficiency: '66.67'
    },
    {
      name: 'São José-SP',
      totalPoints: '6',
      totalGames: '2',
      totalVictories: '2',
      totalDraws: '0',
      totalLosses: '0',
      goalsFavor: '3',
      goalsOwn: '1',
      goalsBalance: '2',
      efficiency: '100'
    },
    {
      name: 'São Paulo',
      totalPoints: '4',
      totalGames: '3',
      totalVictories: '1',
      totalDraws: '1',
      totalLosses: '1',
      goalsFavor: '5',
      goalsOwn: '5',
      goalsBalance: '0',
      efficiency: '44.44'
    },
    {
      name: 'Ferroviária',
      totalPoints: '4',
      totalGames: '3',
      totalVictories: '1',
      totalDraws: '1',
      totalLosses: '1',
      goalsFavor: '4',
      goalsOwn: '5',
      goalsBalance: '-1',
      efficiency: '44.44'
    },
    {
      name: 'Real Brasília',
      totalPoints: '4',
      totalGames: '3',
      totalVictories: '1',
      totalDraws: '1',
      totalLosses: '1',
      goalsFavor: '3',
      goalsOwn: '4',
      goalsBalance: '-1',
      efficiency: '44.44'
    },
    {
      name: 'Grêmio',
      totalPoints: '4',
      totalGames: '3',
      totalVictories: '1',
      totalDraws: '1',
      totalLosses: '1',
      goalsFavor: '5',
      goalsOwn: '7',
      goalsBalance: '-2',
      efficiency: '44.44'
    },
    {
      name: 'Flamengo',
      totalPoints: '4',
      totalGames: '3',
      totalVictories: '1',
      totalDraws: '1',
      totalLosses: '1',
      goalsFavor: '1',
      goalsOwn: '3',
      goalsBalance: '-2',
      efficiency: '44.44'
    },
    {
      name: 'Avaí/Kindermann',
      totalPoints: '3',
      totalGames: '2',
      totalVictories: '1',
      totalDraws: '0',
      totalLosses: '1',
      goalsFavor: '1',
      goalsOwn: '1',
      goalsBalance: '0',
      efficiency: '50'
    },
    {
      name: 'Cruzeiro',
      totalPoints: '3',
      totalGames: '3',
      totalVictories: '1',
      totalDraws: '0',
      totalLosses: '2',
      goalsFavor: '6',
      goalsOwn: '7',
      goalsBalance: '-1',
      efficiency: '33.33'
    },
    {
      name: 'Santos',
      totalPoints: '2',
      totalGames: '2',
      totalVictories: '0',
      totalDraws: '2',
      totalLosses: '0',
      goalsFavor: '3',
      goalsOwn: '3',
      goalsBalance: '0',
      efficiency: '33.33'
    },
    {
      name: 'Bahia',
      totalPoints: '2',
      totalGames: '2',
      totalVictories: '0',
      totalDraws: '2',
      totalLosses: '0',
      goalsFavor: '2',
      goalsOwn: '2',
      goalsBalance: '0',
      efficiency: '33.33'
    },
    {
      name: 'Minas Brasília',
      totalPoints: '1',
      totalGames: '2',
      totalVictories: '0',
      totalDraws: '1',
      totalLosses: '1',
      goalsFavor: '1',
      goalsOwn: '3',
      goalsBalance: '-2',
      efficiency: '16.67'
    },
    {
      name: 'Botafogo',
      totalPoints: '0',
      totalGames: '2',
      totalVictories: '0',
      totalDraws: '0',
      totalLosses: '2',
      goalsFavor: '1',
      goalsOwn: '4',
      goalsBalance: '-3',
      efficiency: '0'
    },
    {
      name: 'Napoli-SC',
      totalPoints: '0',
      totalGames: '3',
      totalVictories: '0',
      totalDraws: '0',
      totalLosses: '3',
      goalsFavor: '1',
      goalsOwn: '10',
      goalsBalance: '-9',
      efficiency: '0'
    }
  ]
```
</details>


## Leaderboard

  - Esse endpoint vai alimentar uma tabela idêntica ao exemplo abaixo no front-end :

    | Classificação |   Time    | P  | J  | V  | E | D | GP | GC | SG | %    |
    |---------------|-----------|----|----|----|---|---|----|----|----|------|
    |      1        |Corinthians| 38 | 15 | 12 | 2 | 1 | 44 | 13 | 31 | 84.4 |


### 33 - Desenvolva o endpoint `/leaderboard` de forma que seja possível filtrar a classificação geral dos times na tela de classificação do front-end com os dados iniciais do banco de dados

  - O endpoint deverá ser do tipo `GET` e ter o retorno como descrito no exemplo do [leaderboard](#leaderboards);

  - Será avaliado que ao fazer a requisição ao endpoint `/leaderboard`, serão retornados os campos e valores corretos considerando os dados iniciais do banco de dados.
	
<details>  
<summary><strong> Retorno esperado: </strong></summary> <br/>

```js
 [
  {
    name: 'Palmeiras',
    totalPoints: '13',
    totalGames: '5',
    totalVictories: '4',
    totalDraws: '1',
    totalLosses: '0',
    goalsFavor: '17',
    goalsOwn: '5',
    goalsBalance: '12',
    efficiency: '86.67',
  },
  {
    name: 'Corinthians',
    totalPoints: '12',
    totalGames: '5',
    totalVictories: '4',
    totalDraws: '0',
    totalLosses: '1',
    goalsFavor: '12',
    goalsOwn: '3',
    goalsBalance: '9',
    efficiency: '80',
  },
  {
    name: 'Santos',
    totalPoints: '11',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '2',
    totalLosses: '0',
    goalsFavor: '12',
    goalsOwn: '6',
    goalsBalance: '6',
    efficiency: '73.33',
  },
  {
    name: 'Grêmio',
    totalPoints: '10',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '9',
    goalsOwn: '8',
    goalsBalance: '1',
    efficiency: '66.67',
  },
  {
    name: 'Internacional',
    totalPoints: '10',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '7',
    goalsOwn: '6',
    goalsBalance: '1',
    efficiency: '66.67',
  },
  {
    name: 'Real Brasília',
    totalPoints: '10',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '5',
    goalsOwn: '4',
    goalsBalance: '1',
    efficiency: '66.67',
  },
  {
    name: 'São Paulo',
    totalPoints: '8',
    totalGames: '5',
    totalVictories: '2',
    totalDraws: '2',
    totalLosses: '1',
    goalsFavor: '9',
    goalsOwn: '6',
    goalsBalance: '3',
    efficiency: '53.33',
  },
  {
    name: 'Ferroviária',
    totalPoints: '7',
    totalGames: '5',
    totalVictories: '2',
    totalDraws: '1',
    totalLosses: '2',
    goalsFavor: '7',
    goalsOwn: '7',
    goalsBalance: '0',
    efficiency: '46.67',
  },
  {
    name: 'São José-SP',
    totalPoints: '6',
    totalGames: '5',
    totalVictories: '2',
    totalDraws: '0',
    totalLosses: '3',
    goalsFavor: '5',
    goalsOwn: '6',
    goalsBalance: '-1',
    efficiency: '40',
  },
  {
    name: 'Flamengo',
    totalPoints: '5',
    totalGames: '5',
    totalVictories: '1',
    totalDraws: '2',
    totalLosses: '2',
    goalsFavor: '2',
    goalsOwn: '5',
    goalsBalance: '-3',
    efficiency: '33.33',
  },
  {
    name: 'Cruzeiro',
    totalPoints: '4',
    totalGames: '5',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '3',
    goalsFavor: '8',
    goalsOwn: '10',
    goalsBalance: '-2',
    efficiency: '26.67',
  },
  {
    name: 'Avaí/Kindermann',
    totalPoints: '4',
    totalGames: '5',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '3',
    goalsFavor: '4',
    goalsOwn: '8',
    goalsBalance: '-4',
    efficiency: '26.67',
  },
  {
    name: 'Botafogo',
    totalPoints: '4',
    totalGames: '5',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '3',
    goalsFavor: '3',
    goalsOwn: '8',
    goalsBalance: '-5',
    efficiency: '26.67',
  },
  {
    name: 'Bahia',
    totalPoints: '2',
    totalGames: '5',
    totalVictories: '0',
    totalDraws: '2',
    totalLosses: '3',
    goalsFavor: '2',
    goalsOwn: '6',
    goalsBalance: '-4',
    efficiency: '13.33',
  },
  {
    name: 'Minas Brasília',
    totalPoints: '2',
    totalGames: '5',
    totalVictories: '0',
    totalDraws: '2',
    totalLosses: '3',
    goalsFavor: '4',
    goalsOwn: '9',
    goalsBalance: '-5',
    efficiency: '13.33',
  },
  {
    name: 'Napoli-SC',
    totalPoints: '2',
    totalGames: '5',
    totalVictories: '0',
    totalDraws: '2',
    totalLosses: '3',
    goalsFavor: '3',
    goalsOwn: '12',
    goalsBalance: '-9',
    efficiency: '13.33',
  },
];

```
</details>

### 34 - Desenvolva o endpoint /leaderboard de forma que seja possível: filtrar a classificação geral dos times na tela de classificação do front-end e atualizar a tabela ao inserir a partida Flamengo 3 X 0 Napoli-SC

  - O retorno deve continuar como no [leaderboard](#leaderboards);

  - Será avaliado que após acrescentar a partida Flamengo 3 X 0 Napoli-SC e fazer a requisição ao endpoint /leaderboard, serão retornados os campos e valores corretos.

<details>  
<summary><strong> Retorno esperado: </strong></summary> <br/>

```js
[
  {
    name: 'Palmeiras',
    totalPoints: '13',
    totalGames: '5',
    totalVictories: '4',
    totalDraws: '1',
    totalLosses: '0',
    goalsFavor: '17',
    goalsOwn: '5',
    goalsBalance: '12',
    efficiency: '86.67'
  },
  {
    name: 'Corinthians',
    totalPoints: '12',
    totalGames: '5',
    totalVictories: '4',
    totalDraws: '0',
    totalLosses: '1',
    goalsFavor: '12',
    goalsOwn: '3',
    goalsBalance: '9',
    efficiency: '80'
  },
  {
    name: 'Santos',
    totalPoints: '11',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '2',
    totalLosses: '0',
    goalsFavor: '12',
    goalsOwn: '6',
    goalsBalance: '6',
    efficiency: '73.33'
  },
  {
    name: 'Grêmio',
    totalPoints: '10',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '9',
    goalsOwn: '8',
    goalsBalance: '1',
    efficiency: '66.67'
  },
  {
    name: 'Internacional',
    totalPoints: '10',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '7',
    goalsOwn: '6',
    goalsBalance: '1',
    efficiency: '66.67'
  },
  {
    name: 'Real Brasília',
    totalPoints: '10',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '5',
    goalsOwn: '4',
    goalsBalance: '1',
    efficiency: '66.67'
  },
  {
    name: 'São Paulo',
    totalPoints: '8',
    totalGames: '5',
    totalVictories: '2',
    totalDraws: '2',
    totalLosses: '1',
    goalsFavor: '9',
    goalsOwn: '6',
    goalsBalance: '3',
    efficiency: '53.33'
  },
  {
    name: 'Flamengo',
    totalPoints: '8',
    totalGames: '6',
    totalVictories: '2',
    totalDraws: '2',
    totalLosses: '2',
    goalsFavor: '5',
    goalsOwn: '5',
    goalsBalance: '0',
    efficiency: '44.44'
  },
  {
    name: 'Ferroviária',
    totalPoints: '7',
    totalGames: '5',
    totalVictories: '2',
    totalDraws: '1',
    totalLosses: '2',
    goalsFavor: '7',
    goalsOwn: '7',
    goalsBalance: '0',
    efficiency: '46.67'
  },
  {
    name: 'São José-SP',
    totalPoints: '6',
    totalGames: '5',
    totalVictories: '2',
    totalDraws: '0',
    totalLosses: '3',
    goalsFavor: '5',
    goalsOwn: '6',
    goalsBalance: '-1',
    efficiency: '40'
  },
  {
    name: 'Cruzeiro',
    totalPoints: '4',
    totalGames: '5',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '3',
    goalsFavor: '8',
    goalsOwn: '10',
    goalsBalance: '-2',
    efficiency: '26.67'
  },
  {
    name: 'Avaí/Kindermann',
    totalPoints: '4',
    totalGames: '5',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '3',
    goalsFavor: '4',
    goalsOwn: '8',
    goalsBalance: '-4',
    efficiency: '26.67'
  },
  {
    name: 'Botafogo',
    totalPoints: '4',
    totalGames: '5',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '3',
    goalsFavor: '3',
    goalsOwn: '8',
    goalsBalance: '-5',
    efficiency: '26.67'
  },
  {
    name: 'Bahia',
    totalPoints: '2',
    totalGames: '5',
    totalVictories: '0',
    totalDraws: '2',
    totalLosses: '3',
    goalsFavor: '2',
    goalsOwn: '6',
    goalsBalance: '-4',
    efficiency: '13.33'
  },
  {
    name: 'Minas Brasília',
    totalPoints: '2',
    totalGames: '5',
    totalVictories: '0',
    totalDraws: '2',
    totalLosses: '3',
    goalsFavor: '4',
    goalsOwn: '9',
    goalsBalance: '-5',
    efficiency: '13.33'
  },
  {
    name: 'Napoli-SC',
    totalPoints: '2',
    totalGames: '6',
    totalVictories: '0',
    totalDraws: '2',
    totalLosses: '4',
    goalsFavor: '3',
    goalsOwn: '15',
    goalsBalance: '-12',
    efficiency: '11.11'
  }
]
```
</details>


### 35 - Desenvolva o endpoint /leaderboard de forma que seja possível: filtrar a classificação geral dos times na tela de classificação do front-end e atualizar a tabela ao inserir a partida Minas Brasília 1 X 0 Ferroviária
	
  - O retorno deve continuar como no [leaderboard](#leaderboards);

  - Será avaliado que após acrescentar a partida Minas Brasília 1 X 0 Ferroviária e fazer a requisição ao endpoint /leaderboard, serão retornados os campos e valores corretos.

<details>  
<summary><strong> Retorno esperado: </strong></summary> <br/>

```js
[
  {
    name: 'Palmeiras',
    totalPoints: '13',
    totalGames: '5',
    totalVictories: '4',
    totalDraws: '1',
    totalLosses: '0',
    goalsFavor: '17',
    goalsOwn: '5',
    goalsBalance: '12',
    efficiency: '86.67',
  },
  {
    name: 'Corinthians',
    totalPoints: '12',
    totalGames: '5',
    totalVictories: '4',
    totalDraws: '0',
    totalLosses: '1',
    goalsFavor: '12',
    goalsOwn: '3',
    goalsBalance: '9',
    efficiency: '80',
  },
  {
    name: 'Santos',
    totalPoints: '11',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '2',
    totalLosses: '0',
    goalsFavor: '12',
    goalsOwn: '6',
    goalsBalance: '6',
    efficiency: '73.33',
  },
  {
    name: 'Grêmio',
    totalPoints: '10',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '9',
    goalsOwn: '8',
    goalsBalance: '1',
    efficiency: '66.67',
  },
  {
    name: 'Internacional',
    totalPoints: '10',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '7',
    goalsOwn: '6',
    goalsBalance: '1',
    efficiency: '66.67',
  },
  {
    name: 'Real Brasília',
    totalPoints: '10',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '5',
    goalsOwn: '4',
    goalsBalance: '1',
    efficiency: '66.67',
  },
  {
    name: 'São Paulo',
    totalPoints: '8',
    totalGames: '5',
    totalVictories: '2',
    totalDraws: '2',
    totalLosses: '1',
    goalsFavor: '9',
    goalsOwn: '6',
    goalsBalance: '3',
    efficiency: '53.33',
  },
  {
    name: 'Ferroviária',
    totalPoints: '7',
    totalGames: '6',
    totalVictories: '2',
    totalDraws: '1',
    totalLosses: '3',
    goalsFavor: '7',
    goalsOwn: '8',
    goalsBalance: '-1',
    efficiency: '38.89',
  },
  {
    name: 'São José-SP',
    totalPoints: '6',
    totalGames: '5',
    totalVictories: '2',
    totalDraws: '0',
    totalLosses: '3',
    goalsFavor: '5',
    goalsOwn: '6',
    goalsBalance: '-1',
    efficiency: '40',
  },
  {
    name: 'Flamengo',
    totalPoints: '5',
    totalGames: '5',
    totalVictories: '1',
    totalDraws: '2',
    totalLosses: '2',
    goalsFavor: '2',
    goalsOwn: '5',
    goalsBalance: '-3',
    efficiency: '33.33',
  },
  {
    name: 'Minas Brasília',
    totalPoints: '5',
    totalGames: '6',
    totalVictories: '1',
    totalDraws: '2',
    totalLosses: '3',
    goalsFavor: '5',
    goalsOwn: '9',
    goalsBalance: '-4',
    efficiency: '27.78',
  },
  {
    name: 'Cruzeiro',
    totalPoints: '4',
    totalGames: '5',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '3',
    goalsFavor: '8',
    goalsOwn: '10',
    goalsBalance: '-2',
    efficiency: '26.67',
  },
  {
    name: 'Avaí/Kindermann',
    totalPoints: '4',
    totalGames: '5',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '3',
    goalsFavor: '4',
    goalsOwn: '8',
    goalsBalance: '-4',
    efficiency: '26.67',
  },
  {
    name: 'Botafogo',
    totalPoints: '4',
    totalGames: '5',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '3',
    goalsFavor: '3',
    goalsOwn: '8',
    goalsBalance: '-5',
    efficiency: '26.67',
  },
  {
    name: 'Bahia',
    totalPoints: '2',
    totalGames: '5',
    totalVictories: '0',
    totalDraws: '2',
    totalLosses: '3',
    goalsFavor: '2',
    goalsOwn: '6',
    goalsBalance: '-4',
    efficiency: '13.33',
  },
  {
    name: 'Napoli-SC',
    totalPoints: '2',
    totalGames: '5',
    totalVictories: '0',
    totalDraws: '2',
    totalLosses: '3',
    goalsFavor: '3',
    goalsOwn: '12',
    goalsBalance: '-9',
    efficiency: '13.33',
  },
]
```
</details>

