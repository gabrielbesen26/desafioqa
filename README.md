# Desafio para a vaga de Analista de Testes
Candidato: Gabriel Thomaz H. Besen

## Introdução
Olá, este é um repositório que contém os seguintes artefatos:
- Arquivo read-me (este que você está lendo :D)
- Casos de testes 
- Scripts de teste
- Explicação sobre o report após a execução dos testes
- Framework de automação (Cypress)

Por favor, leia as instruções abaixo para melhor entendimento das estratégias adotadas que eu utilizei para este desafio. Você já deve ter percebido que a estrutura de pastas está diferente conforme solicitado, mas calma, há uma explicação :D

### Sobre a estrutura de pastas e ferramenta
Primeiramente, comecei por escolher o framework de automação e escolhi utilizar o Cypress. Para ser bem resumido, Cypress é uma ferramenta de testes end-to-end e all in one. Com ela basicamente você centraliza todos os testes feitos por desenvolvedores e qa, ou seja, dentro dela pode conter testes unitários, de integração e de comportamento tudo em um só lugar. Esta ferramenta contém todos os utilitários necessários para a automação e para melhorar, ela é open source.

No site https://docs.cypress.io/plugins/ você encontra diversos plugins desenvolvidos pela comunidade. Além disso, você pode customizar seus próprios comandos para reutilização de código e aumentar ainda mais a sua produtividade.

Porém, com esta ferramenta, você precisa seguir alguns padrões de estrutura de pastas e este é o motivo de o porque eu não segui a estrutura de pastas solicitadas no desafio. Por exemplo: Os scripts de execução DEVEM estar contidos em um diretório conforme a documentação, caso contrário, a ferramenta não encontra os scripts. Já é dito pelos desenvolvedores da ferramenta que Cypress não está finalizada, ela está em constante evolução.

Abaixo você encontrará informações sobre as estratégias adotadas, instruções para instalação, execução dos testes, resultados da execução e também onde está cada artefato solicitado para o desafio ok?

## Desafio 1 - Planejamento de testes
Acessando a URL do evento https://evento.moblee.com.br/ByKtijSZQ notei que a página é dividida por partes (cabeçalho, rodapé, conteúdo, eventos passados, programação, mapa e etc) ou seja, me parece que o usuário pode optar por modelos de componentes para inserir em seu evento eu diria, do qual o usuário pode editar o texto e conteúdo.
Notei que por conta disso, os identificadores dos elementos html são dinâmicos, ou seja, o "id" de um botão de se "inscrever" por exemplo nunca será o mesmo para outros eventos, neste caso a automação de testes terá que interagir com os elementos de outra forma, sem ser por "id", "name" ou "class". Teste automatizado trabalha com pré-condições e dados concretos e isso vai dificultar um monte a vida do QA quando o assunto é automação.

A página do evento com certeza poderia conter casos de testes mas nesse caso, eu foquei somente na compra de ingressos conforme foi solicitado. Sem possuir qualquer tipo de artefato como estórias de usuário/requisitos contendo as regras de negócio para me basear, optei por especificar e automatizar somente os testes de "caminho feliz" (smoke test) para que os testes levem menos tempo de execução, provendo rápido feedback se o funcionalidade está sendo impedindo o usuário de comprar ingressos ou não e para que não haja problemas em sua identificação. 

Identifiquei que os possíveis testes poderiam ser realizados
- Clicar no botão de se inscrever e verificar se a janela de compra foi aberta com os devidos campos e botões 
- Realizar a compra de um ingresso gratuíto e verificar campos e mensagens
- Realizar a compra de um ingresso pago e verificar os campos e janela de pagamento
- Realizar a compra de um ingresso gratuito, não informar os campos obrigatórios e verificar a mensagem de obrigatoriedade
- Realizar a compra de um ingresso pago, não informar os campos obrigatórios e verificar a mensagem de obrigatoriedade
- Realizar a compra de um ingresso pago, informar o nome com um espaço e verificar mensagem de nome inválido.

Os casos de teste você irá encontrar no diretório "1_planejamento" e os casos de testes implementados no diretório "/cypress/integration/compra_de_ingresso.feature"

## Desafio 2 - Execução dos testes
O relatório de execução de testes você vai encontrar no diretório: */2_execucao/Report 15_10_2019.xlsx

No relatório você encontra informações como data de execução, quem o executou, funcionalidade, casos executados, status da execução de cada caso e observações em caso de falhas, alertando assim quem está lendo o relatório sobre issues geradas, informações sobre falsos positivos e etc.

A ferramenta de automação Cypress contém um CI próprio e dentro da ferramenta você encontra também o report de execução. Basta acessar o diretório raiz do projeto e executar o comando: "npm run cypress:open"
- Quando a ferramenta abrir, realize o login com seu usuário e senha (convite foi enviado para o email luckas@moblee.net)
- Acesse a aba Runs

Observação: A ferramenta possui integração com o Github, podendo enviar o report para o repositório.

## Desafio 3 - Automação dos testes
Como falado anteriormente, escolhi a ferramenta Cypress para a automação por conta de ser uma ferramenta prática, muito completa, produtiva que utiliza uma linguagem de programação muito comum (JavaScript)

- Para executar os testes, por favor, clone este repositório de preferência no caminho: X:/repositories/  (onde "X" é a unidade de disco de sua preferência)
- Acesse o diretório para onde vc clonou o projeto e execute o comando: 
"npm install" e aguarde o fim da execução
- Com o projeto baixado e as dependencias instaladas, execute o comando:
"npm run cypress:run"
- Note que os testes serão executados em modo headless.
- Para executar os testes com interface, execute o comando:
"npm run cypress:open" e aguarde o software abrir.
- Quando o cypress abrir, clique na feature de testes.

Observações: Como falado anteriormente, Cypress e seus plugins estão em constante evolução, até o momento, o Cucumber para Cypress não tem suporte pt-br para a escrita do Gherkin. Foi codificado também apenas 3 casos de testes como solicitado.

### Feedback
É importante ressaltar que a parte de automação consumiu um certo tempo, não por conta da ferramenta ou linguagem mas sim pela dificuldade de manusear os elementos da página para a automação. Note que os elementos da página que são passiveis de interação (botões, campos, links e etc) não possuem qualquer identificador para fácil codificação dos scripts. Muitos desses elementos contém somente o "class" como identificador, porém, muitos deles são repetidos pois o mesmo elemento se encontra em diversas partes da página. 
Em um ambiente de desenvolvimento ágil, é necessário que o QA trabalhe junto com o desenvolvedor com o objetivo de espalhar o senso de qualidade e produtividade para o time. 