# Estruturação de Front-end
Essa é uma ideia de estruturação do front-end de um projeto com AngularJS.

## Iniciativa
A cada projeto que eu trabalho perco um bom tempo analisando e pensando qual a melhor organização de estrutura do projeto.
Sei que existe várias ideias e padrões por aí, mas ainda nada que seja exatamente o que eu quero ou penso como deve ser meu projeto.
Pensando nisso, por que não cria meu próprio padrão? talvez isso seja apenas mais uma ideia, mas pode ser que alguém se identifique e queira usar.
Você pode clonar este repositório para gerar um boilerplate com a estrutura preparada para você começar a desenvolver.
Este boilerplate foi desenvolvido utilizando as seguintes dependências:

* [Bower](https://bower.io/)
* - [AngularJS](https://angularjs.org/)
* - [ngAnimate](https://docs.angularjs.org/api/ngAnimate)
* - [ngCookies](https://docs.angularjs.org/api/ngCookies)
* - [ngSanitize](https://docs.angularjs.org/api/ngSanitize)
* [Gulp](http://gulpjs.com/)

## CSS
É claro que você pode usar o pré-processador e metodologia que quiser para escrever seu css, mas colocarei aqui as que eu uso atualmente.

### Stylus
Atualmente trabalho e estou fissurado pelo [Stylus](http://stylus-lang.com), então utilizarei esse pré-processador nos exemplos.

### RSCSS
Utilizo também a metodologia do [RSCSS](http://rscss.io/variants.html), gosto pelo fato de não sujar muito o HTML com nomes de classes gigantescos.

### Estrutura
Para organizar os arquivos e pastas do css vou usar a ideia do Atomic Design:
```
stylus/
  00-base/
  |  _reset.styl
  |  _flexbox.styl
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
  app.styl
```
Acho fantástica essa ideia de separar cada elemento do css, isso facilita muito na organização e manutenção do projeto.
Como você pode ver a pasta `00-base/` é resopnsável pelos arquivos bases do projeto, como um normalize, variáveis, mixins e outras configurações globais do projeto.
As pastas seguintes é a estruturação senguindo a ideia do Atomic Design e por fim o arquivo `app.styl` importa todos os arquivos.
No Stylus consigo importar todos os arquivos de uma pasta, veja:

```
/* app.styl */

@import '00-base/**/*',
        '01-atoms/**/*',
        '02-molecules/**/*',
        '03-organisms/**/*',
        '04-templates/**/*'
```

## HTML e JS
É nessa parte que tive muita dificuldade em achar algo que funcionasse para mim, então a ideia aqui seria manter o html e o js referente ao mesmo template juntos:
```
app/
  00-base/
  |  _app.module.js
  |  _app.config.js
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
Então seguindo a mesma ideia do Atomic Design, porém separando na pasta `00-base/` os arquivos de configurações globais do projeto.
Na pasta `01-global/` responsável por manter as funcionalidades globais, como services, directives etc...
E na pasta `02-templates/` os arquivos separados por pastas para cada página/funcionalidade do projeto.
Os arquivos HTML e CSS ficam juntos facilitando o desenvolvimento e a manutenção de cada página/funcionalidade pois a view (html) e o controller (js) andam juntos.

## Ambiente de desenvolvimento
Essa estrutura devemos manter durante o desenvolvimento dentro de uma pasta chamada `source/`.
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
Essa estrura fica organizada para desenvolver e fácil de se achar.
O arquivo `index.hmtl` na raiz será o arquivo principal da aplicação.

## npm

Para gerenciar as dependências da aplicação vamos usar o [npm](https://www.npmjs.com/) para instalar o Bower e Gulp.
```
npm install
```

## Bower

Agora precisamos pensa na instalação das dependências e módudos que vamos utilizar no projeto.
Nesse caso estou utilizando o [Bower](https://bower.io/)
```
bower install
```

## Gulp

Enquanto desenvolvemos precisamos acompanhar nossa aplicação, para isso precisamos compilar e mover os arquivos da estrutura de desenvolvimento para uma pasta onde tudo deve funcionar ser publicada em produção.
O [Gulp](http://gulpjs.com/) fará esse serviço gerando um único arquivo com as dependências do Bower e de nossos scripts, além de mover nossos arquivos HTML para apasta de publicação.

*Importante*
Por mais que os arquivos HTML mudarão de pasta, a estrutura e caminho dos arquivos seguirá a mesma.

## Compilando

Na pasta `source/` estão os arquivos de desenvolvimento, o Gulp irá compilar e mover os arquivos dessa estrutura em um pasta para ser publicada, vamos chamar de `public/`.
Vamos ver a estrutura final que o Gulp vai gerar:
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
  |  js/
  |  |  app.js
  |  |  vendor.js
  index.html
```
Veja que o Gulp gerará uma pasta chamada `public/` que é onde os arquivos de produção ficarão.
Seguindo o exemplo da estrutura, veja que na pasta `public/app/` ficou apenas com os arquivos HTML enquanto os scripts foram concatenados em um único arquivo `public/assets/js/app.js`. O mesmo para o CSS e imagens.
Então o caminhos dos arquivos continuaram o mesmos.

Exemplo de caminho no CSS (Stylus):
```
'../images/my-image.jpg'
```
HMTL e JS:
```
'app/02-templates/home/home.html'
```

