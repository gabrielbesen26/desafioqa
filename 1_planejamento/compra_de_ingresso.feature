#language: pt-br
Funcionalidade: Comprar ingressos

Contexto: Acessar o evento
    Dado que o usuario acessa o evento 'https://evento.moblee.com.br/ByKtijSZQ'

Cenario: Se inscrever e verificar os campos que aparecem
    Quando o usuario clica no botao "Inscreva-se"
    Entao devera aparecer a janela de selecao de ingressos

Cenario: Comprar um ingresso gratis e verificar campos e mensagem
    E clicou no botao "Inscreva-se"
    Quando o usuario adicionar um ticket gratis
    E clicar em "Continuar"
    E preencher todos os campos obrigatorios das informacoes credenciais
    Entao a janela de confirmacao deve ser exibida

Cenario: Comprar um ingresso pago e verificar campos e mensagem
    E clicou no botao "Inscreva-se"
    E o usuario adicionou um ingresso pago
    E preencheu todos os campos obrigatorios das informacoes credenciais
    Quando o usuario clicar em "Continuar"
    Entao os campos de pagamento devem ser exibidos
    Quando o usuario preencher todos os campos com valores validos
    Entao a janela de confirmacao deve ser exibida

Cenario: Comprar um ingresso pago, nao preencher todos os campos obrigatorios e verificar mensagem
    E clicou no botao "Inscreva-se"
    E o usuario adicionou um ingresso pago
    E nao preencheu todos os campos obrigatorios das informacoes credenciais
    Quando o usuario clicar em "Continuar"
    Entao a mensagem sobre os campos obrigatorios deve ser exibido

Cenario: Comprar um ingresso pago, nao preencher todos os campos obrigatorios das informacoes de pagamento
    E escolheu comprar um ingresso pago
    E preencheu todos os campos obrigatorios das informacoes credenciais
    E nao preencheu todos os campos obrigatorios das informacoes de pagamento
    Quando o usuario clicar em "Continuar"
    Entao a mensagem sobre os campos obrigatorios deve ser exibido

Cenario: Comprar um ingresso pago e preencher os campos de credenciais com informacoes invalidas
    E escolheu um comprar um ingresso pago
    E preencheu os campos obrigatorios com espaco em branco
    Quando o usuario clicar em "Continuar"
    Entao a mensagem sobre os campos obrigatorios deve ser exibido