# goBarberAPI

API NodeJS desenvolvida no curso Bootcamp goStack da [rocketseat](https://rocketseat.com.br/)

## Índice

- [Instalações](#instalações)
- [Instalações opicionais](#instalações-opicionais)
- [Plugins VSCode](#plugins-vscode)
- [Bibliotecas utilizadas](#bibliotecas-utilizadas)
- [Configuração](#configuração)
- [Executar](#executar)

### Instalações

- [VS Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/)

### Instalações opicionais

- [Insomnia](https://insomnia.rest/)
- [MongoDB Compass](https://www.mongodb.com/products/compass)
- [Postbird](https://electronjs.org/apps/postbird)

### Plugins VSCode

- [Color Highligth](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Rocketseat ReactJS](https://marketplace.visualstudio.com/items?itemName=rocketseat.RocketseatReactJS)
- [RocketSeat React Native](https://marketplace.visualstudio.com/items?itemName=rocketseat.RocketseatReactNative)

### Bibliotecas utilizadas:

- [@sentry/node](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/@sentry-node.md)
- [bcrypt.js](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/bcryptjs.md)
- [Bee-Queue](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/bee-queue.md)
- [CORS](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/cors.md)
- [date-fns](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/date-fns.md)
- [dotenv](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/dotenv.md)
- [ESLint](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/eslint.md)
- [eslint-config-prettier](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/eslint-config-prettier.md)
- [eslint-plugin-prettier](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/eslint-plugin-prettier.md)
- [Express](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/express.md)
- [Express Handlebars](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/express-handlebars.md)
- [Express Handlebars plugin for Nodemailer](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/nodemailer-express-handlebars.md)
- [ExpressJS Async Errors](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/express-async-errors.md)
- [Json Web Token](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/jsonwebtoken.md)
- [Mongoose](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/mongoose.md)
- [Multer](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/multer.md)
- [Nodemailer](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/nodemailer.md)
- [Nodemon](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/nodemon.md)
- [pg](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/pg.md)
- [pg-hstore](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/pg-hstore.md)
- [Prettier](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/prettier.md)
- [Sequelize](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/sequelize.md)
- [sequelize-cli](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/sequelize-cli.md)
- [Sucrase](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/sucrase.md)
- [Youch](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/youch.md)
- [Yup](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/yup.md)

### Configuração

Instale todas as bibliotecas da API do GoBarber:

```
yarn
```

#### Docker

A API do GoBarber usa 3 bancos diferentes. O PostgreSQL para armazenar os dados
do sistema, o MongoDB para armazenar as notificações e o Redis para armazenar a
fila de tarefas que será usada no sistema. Então será necessário criar 3 containers
do Docker.

##### Instalando as imagens

Para criar um container com o Postgres:

```
docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

Quando não passa o POSTGRES_USER, é criado um user chamado 'postgres'.

Se preferir configurar seu usuário e sua senha, o comendo abaixo cria o container Postgres passando as informações de usuário e senha.

```
docker run --name database -e POSTGRES_USER=user POSTGRES_PASSWORD=senha -p 5432:5432 -d postgres
```

---

Para criar um container com o MongoDB:

```
docker run --name mongobarber -p 27017:27017 -d  -t mongo
```

Para criar um container com o Redis:

```
docker  run  --name redisbarber -p 6379:6379 -d  -t redis:alpine
```

---

Caso já tenha criado os containers com as imagems, confira se os containers
estão sendo executados (exibe apenas as imagens que estão rodando):

```
docker ps
```

Se não tiver executando, liste todas as imagens do Docker:

```
docker ps -a
```

Use o comando para as imagens que deseja executar:

```
docker container start CONTAINER_ID
```

---

Para gerar as tabela do banco de dados do Postgres conforme as migrations, só executar no terminal:

```
yarn sequelize db:migrate
```

A conexão com o Mongo e Redis é feita automaticamente quando executa o node.

---

#### Configurando Nodemailer

Foi utilizado o Mailtrap para poder enviar o email para uma caixa de entrada fake, o email pode até ser verdadeiro, porém quando é enviado, ele não chega na caixa de entrada da pessoa, isso é ideal para termos em ambiente de desenvolvimento.

Primeiro passo é criar um conta no https://mailtrap.io/ e pegar as configurações.

Ao criar uma conta, crie uma caixa de entrada e dê o nome que desejar. usaremos a
credencial para configurar o arquivo .env na raiz do projeto.

#### Tratamento de Exceções

Faremos o tratamento de exceções que ocorrem em produção, na fila de envio de email, query de banco de dados, etc.

Ver logs de erro no servidor é muito complicado, chato e trabalhoso, vamos utilizar uma ferramenta mais amigável com uma boa UI que fica fácil de descobrir o erro, dessa forma não vamos correr atrás do erro, o erro vem até nós.

- Primeiro passo é criar a conta no https://sentry.io/.

- Crie um projeto Express

- Clique em "Installation Instructions"

Vamos precisar do DSN para configuração do arquivo .env na raiz do projeto.

#### Configurando o arquivo .env

O arquivo de configuração .env está no .gitignore porque contém informações sensíveis e
que varia para cada ambiente de desenvolvimento, tem um arquivo chamado .env.example para
seguir como base, renomei-o apenas para .env e adicione as seguintes informações.

```
# create a .env and configure it for you environment

APP_URL=http://localhost:3333
NODE_ENV=development

# Auth

APP_SECRET=a3ea7aaac69ab6fe8c69b4986a25123d

# Database

DB_HOST=localhost
DB_USER=postgres
DB_PASS=docker
DB_NAME=gobarber

# Mongo

MONGO_URL=mongodb://localhost:27017/gobarber

# Redis

REDIS_HOST=127.0.0.1
REDIS_POST=6379

# Mail

MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USER=55j4b9863512c5
MAIL_PASS=f27ab987sd6s56
MAIL_FROM=Mateus Castro <noreplay@mateus.com>

# Sentry

SENTRY_DSN=https://sd35446sdf4s65df456sd4f6@sentry.io/1870469
```

APP_URL: URL que a API está executando
NODE_ENV: Ambiente em que a API está rodando
APP_SECRET: palavra segredo da autenticação da API
DB_HOST: Host do Postgres
DB_USER: user do Postgres
DB_PASS: Senha do Postgres
DB_NAME: nome da base de dados do Postgres
MONGO_URL: URL do MongoDB
REDIS_HOST: Host do Redis
REDIS_POST: Senha do Redis
MAIL_HOST: Host do email
MAIL_PORT: porta do email
MAIL_USER: User do email
MAIL_PASS: Senha do email
MAIL_FROM: Usuário padrão do email
SENTRY_DSN: DSN do Sentry

A partir de agora a API do GoBarber está configurada!

### Executar

Para executar precisa de 2 processos diferentes, um para rodar o NodeJS e o outro
para rodar o Queue, que é a fila de tarefas que irá rodar em background. Execute em
dois terminais diferentes:

```
yarn dev
```

```
yarn queue
```

Agora a aplicação está rodando.
