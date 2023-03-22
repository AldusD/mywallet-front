# mywallet-front
[Read this page in English](https://github.com/AldusD/mywallet-front#readme)


## Interface SPA de MyWallet criada usando *Create React App*

*MyWallet é responsivo somente para dispositivos mobile*

*[Deploy da aplicação](https://mywalletfinances.vercel.app)* |
*[Repositório back-end](https://github.com/AldusD/mywallet-back)*

Como um dos projetos semanais do bootcamp Desenvolvedor Web Full Stack da Driven Education, MyWallet surgiu com a intenção de reforçar o aprendizado os seguintes conhecimentos aprendidods no período: 
- Registrar usuários e salvar senhas com criptografia
- Gerenciar o acesso dos usuários com sessões e tokens de acesso
- CRUD de entidaddes com MongoDb 
- Separação de responsabilidades em arquivos separados: Routers, middlewares e controllers 
- Criação de single page application usando o Framework React

#### Como iniciar MyWallet
- 1 - Clone os repositórios de front-end e back-end
- 2 - Instale todas as dependências de  produção usando 'npm install'
- 3 - Se preferir, preencha arquivos .env para especificar onde a API deve executar e como o app front-end vai encontra-lo 
- 4 - Execute na pasta raiz do projeto back-end 'node app.js'
- 5 - Execute na pasta raiz do projeto front-end 'npm start'

#### Explicando a nova branch
- A branch Feat/finishing-project foi criada para completar features do projeto que por gestão de tempo não consegui terminar na semana especifica   
- As features trazidas pela branch feat/finishing-project branch respeitam as limitações de tecnologias e práticas que eu possuia quando iniciei o projeto

#### Problemas e limitações conhecidos:
- Botões na home vão, em alguns dispositivos, bloquear o saldo  
- Chamadas da API estão expostas nos arquivos dos componentes
- Não uso de Custom Hooks

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
