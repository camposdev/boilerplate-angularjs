# Padronização baseada em Atomic Design com AngularJS
Boilerplate com estrutura para AngularJS baseada em Atomic Design.

## Instalação
* De um fork neste repositório
* `git clone git@github.com:SEU-USUARIO/boilerplate-angularjs.git` 
* `cd boilerplate-angularjs`
* `npm install`
* `bower install`
* `gulp start`
* `gulp watch`

## Iniciativa
A cada projeto que eu trabalho perco um bom tempo analisando e pensando qual a melhor organização de estrutura do projeto.

Sei que existem várias ideias e padrões por aí, mas ainda nada que seja exatamente o que eu quero ou penso como deve ser meu projeto.

Pensando nisso, por que não cria minha própria estrutura? talvez isso seja apenas mais uma ideia, mas pode ser que alguém se identifique e queira usar.

Você pode clonar este repositório para gerar um boilerplate com a estrutura preparada para você começar a desenvolver.

Este boilerplate ja trás as seguintes dependências:

* [Normalize](https://necolas.github.io/normalize.css) para resetar o css
* [AngularJS](https://angularjs.org/)
* [ngAnimate](https://docs.angularjs.org/api/ngAnimate)
* [ngCookies](https://docs.angularjs.org/api/ngCookies)
* [ngSanitize](https://docs.angularjs.org/api/ngSanitize)
* [ui.router](https://ui-router.github.io/ng1) para rotas

E quem gerencia essas dependências são meus melhores amigos Gulp e Bower :)

## CSS
É claro que você pode usar o pré-processador e metodologia que quiser para escrever seu css, mas colocarei aqui as que eu uso atualmente, o Stylus.

### Stylus
Atualmente trabalho e estou fissurado pelo [Stylus](http://stylus-lang.com), então já coloquei um arquivo com mixins básicos e um mixin do flexbox que sempre uso em meus projetos.

### RSCSS
Utilizo também a metodologia do [RSCSS](http://rscss.io/index.html), gosto pelo fato de não sujar muito o HTML com nomes de classes enormes e a identação muito extendida.

### Estrutura
Para organizar os arquivos e pastas do css vou usar a ideia do Atomic Design:
```
stylus/
  00-base/
  |  _mixins.styl   -> Deixei esse cara com o basico de mixins para usar
  |  _flexbox.styl  -> Esse também, pronto para usar ;)
  |  _variables.styl
  |  ...
  01-atoms/
  |  _buttons.styl
  |  _forms.styl
  |  _tipography.styl
  |  ...
  02-molecules/
  |  _menu.styl
  |  _search-form.styl
  |  _widgets.styl
  |  ...
  03-organisms/
  |  _header.styl
  |  _sidebar.styl
  |  _footer.styl
  |  ...
  04-templates/
  |  _home.styl
  |  _about.styl
  |  _contact.styl
  |  ...
  app.styl  -> Esse é o arquivo principal que importará todos os outros
```
Acho fantástica essa ideia de separar cada elemento do css, isso facilita muito na organização e manutenção do projeto.

Como você pode ver a pasta `00-base/` é responsável pelos arquivos bases do projeto, como um normalize, variáveis, mixins e outras configurações ou utilizações globais que pode ser usado no projeto.

As pastas seguintes é a estruturação senguindo a ideia do Atomic Design e por fim o arquivo `app.styl` importa todos os arquivos.

No Stylus consigo importar todos os arquivos de uma pasta sem precisar listar todos os arquivos um por um, veja:

```
/* app.styl */

@import '00-base/**/*'
        '01-atoms/**/*'
        '02-molecules/**/*'
        '03-organisms/**/*'
        '04-templates/**/*'
```

## HTML e JS
É nessa parte que tive muita dificuldade em achar algo que funcionasse para mim, então a ideia aqui seria manter o html e o js referente ao mesmo template juntos na mesma pasta:
```
app/
  00-base/
  |  _app.module.js   -> Arquivo inicial do projeto
  |  _app.config.js   -> Arquivo de configuração, rotas, etc...
  |  ...
  01-global/
  |  services/
  |  |  web.service.js
  |  |  ...
  |  filters/
  |  |  toTrusted.filter.js
  |  |  ...
  |  directives/
  |  |  tables/
  |  |  |  table.html
  |  |  |  table.directive.js
  |  |  |  ...
  |  ...
  02-templates/
  |  home/
  |  |  home.html
  |  |  home.controller.js
  |  |  home.service.js
  |  |  ...
  |  login/
  |  |  login.html
  |  |  login.controller.js
  |  |  ...
  |  ...
```
Então baseada na ideia do Atomic Design, porém separando na pasta `00-base/` os arquivos de iniciação e configurações do projeto.

Na pasta `01-global/` responsável por manter as funcionalidades globais, como services, directives etc...

E na pasta `02-templates/` os arquivos separados por pastas para cada página ou funcionalidade do projeto.

Os arquivos HTML e JS ficam juntos facilitando o desenvolvimento e a manutenção de cada página ou funcionalidade, pois a view (html) e o controller (js) andam juntos.

## Ambiente de desenvolvimento
Toda essa estrutura devemos manter durante o desenvolvimento dentro de uma pasta chamada `source/`.

Então numa visão geral a estrutura completa fica assim:
```
source/
  app/
  |  00-base/
  |  |  _app.module.js
  |  |  _app.config.js
  |  |  ...
  |  01-global/
  |  |  services/
  |  |  |  web.service.js
  |  |  |  ...
  |  |  filters/
  |  |  |  toTrusted.filter.js
  |  |  |  ...
  |  |  directives/
  |  |  |  tables/
  |  |  |  |  table.html
  |  |  |  |  table.directive.js
  |  |  |  ...
  |  |  ...
  |  02-templates/
  |  |  home/
  |  |  |  home.html
  |  |  |  home.controller.js
  |  |  |  home.service.js
  |  |  |  ...
  |  |  login/
  |  |  |  login.html
  |  |  |  login.controller.js
  |  |  |  ...
  |  |  ...
  assets/
  |  images/
  |  |  ...
  |  stylus/
  |  |  00-base/
  |  |  |  _reset.styl
  |  |  |  _flexbox.styl
  |  |  |  _variables.styl
  |  |  |  ...
  |  |  01-atoms/
  |  |  |  _buttons.styl
  |  |  |  _forms.styl
  |  |  |  _tipography.styl
  |  |  |  ...
  |  |  02-molecules/
  |  |  |  _menu.styl
  |  |  |  _search-form.styl
  |  |  |  _widgets.styl
  |  |  |  ...
  |  |  03-organisms/
  |  |  |  _header.styl
  |  |  |  _sidebar.styl
  |  |  |  _footer.styl
  |  |  |  ...
  |  |  04-templates/
  |  |  |  _home.styl
  |  |  |  _about.styl
  |  |  |  _contact.styl
  |  |  |  ...
  |  |  app.styl
  index.html
bower.json
gulpfile.js
package.json
```
Essa estrutura fica organizada para desenvolver e fácil de se achar.

O arquivo `index.html` na raiz será o arquivo principal da aplicação.

## Iniciando
### npm

Para gerenciar as dependências da aplicação vamos usar o [npm](https://www.npmjs.com/) para instalar o Bower e Gulp.
```
npm install
```

### Bower

Agora precisamos baixar as dependências e módudos que vamos utilizar no projeto.

Nesse caso estou utilizando o [Bower](https://bower.io/)
```
bower install
```

## Gulp

Enquanto desenvolvemos precisamos acompanhar nossa aplicação, para isso precisamos compilar e mover os arquivos da estrutura de desenvolvimento para uma pasta onde tudo deve funcionar e será a mesma a ser publicada em produção.

O [Gulp](http://gulpjs.com/) fará esse serviço gerando um único arquivo com as dependências do Bower e de nossos scripts, além de mover nossos arquivos HTML para a pasta de publicação que será a `public/`.

*Por mais que os arquivos HTML mudarão de pasta, a estrutura e caminho dos arquivos seguirá a mesma.*

## Compilando

Para gerar a pasta `public/` onde a aplicação funcionará precisamos dar o comando para o Gulp montar a estrutura:
```
gulp start
```

O Gulp irá compilar e mover os arquivos da estrutura de desenvolvimento e das dependências no Bower na pasta `public/`.

Seguindo este exemplo vamos ver a estrutura final que o Gulp gerará:
```
public/
  app/
  |  01-global/
  |  |  directives/
  |  |  |  tables/
  |  |  |  |  table.html
  |  02-templates/
  |  |  home/
  |  |  |  home.html
  |  |  login/
  |  |  |  login.html
  assets/
  |  images/
  |  |  ...
  |  css/
  |  |  app.css
  |  |  vendor.css
  |  |  all.min.css -> Arquivos css minificados para produção
  |  js/
  |  |  app.js
  |  |  vendor.js
  |  |  all.min.js -> Arquivos js minificados para produção
  index.html
```
Veja que o Gulp criará uma pasta chamada `public/` que é onde os arquivos de produção devem ficar.

Seguindo o exemplo da estrutura, veja que na pasta `public/app/` ficou apenas com os arquivos HTML enquanto os scripts foram concatenados em um único arquivo `public/assets/js/app.js`. O mesmo para o CSS e imagens.

Então o caminho dos arquivos continuaram os mesmos.

Exemplo de caminho no CSS:
```
'../images/my-image.jpg'
```

HMTL e JS:
```
'app/02-templates/home/home.html'
```

Após gerar estes arquivos ja compilados, para automatizar as tarefas do Gulp rode o comando: 
```
gulp watch
```

E em outra aba do terminal ative o server pelo gulp também:
```
gulp server
```
E seu projeto estará rodando em `http://localhost:8000` e com o livereload ativado.

Leia sobre o [gulp-webserver](https://www.npmjs.com/package/gulp-webserver).

Pronto agora está tudo pronto e rodando para começar o desenvolvimento ;)

O Gulp não irá minificar os arquivos de CSS e JS, isso porque no desenvolvimento, qualquer erro em seu script será mais fácil de achar o bug, quando os arquivos estão minificados isso dificulta muito.

Então antes de publicar rode o comando:
```
gulp build
```
Este comando gerará os arquivos da pasta `public` com os arquivos minificados e preparados para deploy.

Após a minificação dos arquivos altere as chamadas dos arquivos css e css no `index.html` para `app/assets/css/all.min.css` e `app/assets/js/all.min.js`.

## é isso ae

Qualquer sugestão será muito bem vinda, afinal, se nós como desenvolvedores não soubermos aceitar críticas que nos leve a melhorar não temos como crescer, e isso é o que eu busco diariamente.
