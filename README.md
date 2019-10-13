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
Notei que por conta disso, os identificadores dos elementos html são dinâmicos, ou seja, o "id" de um botão de se "inscrever" por exemplo nunca será o mesmo para outros eventos, neste caso a automação de testes terá que interagir com os elementos de outra forma, sem ser por "id", "name" ou "class". Teste automatizado trabalha com pré-condições e dados concretos e isso vai dificultar um monte a vida do QA.

A página do evento com certeza poderia conter casos de testes mas nesse caso, eu foquei somente na compra de ingressos conforme foi solicitado. Sem possuir qualquer tipo de artefato como estórias de usuário/requisitos contendo as regras de negócio, optei por especificar e automatizar somente os testes de "caminho feliz" (smoke test) para que os testes levem menos tempo de execução, provendo rápido feedback se o usuário está sendo impedido de comprar ingresso ou não. 

Identifiquei que os possíveis testes poderiam ser realizados
- Clicar no botão de se inscrever e verificar se a janela de compra foi aberta com os devidos campos e botões 
- Realizar a compra de um ingresso gratuíto e verificar campos e mensagens
- Realizar a compra de um ingresso pago e verificar os campos e janela de pagamento
- Realizar a compra de um ingresso gratuito, não informar os campos obrigatórios e verificar a mensagem de obrigatoriedade
- Realizar a compra de um ingresso pago, não informar os campos obrigatórios e verificar a mensagem de obrigatoriedade
- Realizar a compra de um ingresso pago, informar o nome com um espaço e verificar mensagem de nome inválido.

Os casos de teste você irá encontrar no diretório "1_planejamento" e os casos de testes implementado no diretório "/cypress/integration/compra_de_ingresso.feature"

## Desafio 2 - Execução dos testes

## Desafio 3 - Automação dos testes
