import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

// ----- GIVEN ----- //
Given('the user access the event {string}', (url) => {
    cy.viewport(1920, 1080);
    cy.visit(url);
    cy.get('.c01202').click();
})

// ----- WHEN ----- //
When('the user clicks on the button {string}', (button) => {
    cy.contains(button).click();
    cy.wait(3000);
})

When('the user add a free ticket', () => {
    cy.get('div.c01205 > div:nth-child(3) > div.c01217.c01216 > button:nth-child(3) > svg').click();
})

When('the user clicks on {string}', (button) => {
    cy.contains(button).click();
    cy.wait(2000);
})

// ----- AND ----- //
And('clicked on the button {string}', (button) => {
    cy.contains(button).click();
    cy.wait(3000);
})

And('clicks on {string}', (button) => {
    cy.contains(button).click();
})

And('fill all the mandatory fields of credential informations', () => {
    cy.get('input[name=credentialName]').clear().type('Teste');
    cy.get('input[name=email]').clear().type('teste@teste.com.br');
    cy.contains('Continuar').click();
})

And('choosed to buy a paid ticket', () => {
    cy.contains('Inscreva-se').click();
    cy.wait(3000);
    cy.get('form > div.c01205 > div:nth-child(4) > div.c01217.c01216 > button:nth-child(3) > svg').click();
    cy.contains('Continuar').click();
})

And('fill the mandatory fields with blank space', () => {
    cy.get("input[name='name']").type(" ");
    cy.get('form > div.c01235 > div.c01238 > div:nth-child(3) > div.c01240.c01241 > div.c0162.c0163.c01248.c01249 > input').type('75267520802');
    cy.get("form > div.c01235 > div.c01238 > div:nth-child(4) > div:nth-child(1) > input").type("teste@teste.com.br");
    cy.get("input[name='phone']").type('4800000000');
    cy.get("form > div.c01235 > div.c01255 > div > div:nth-child(1) > input").type(" ");
    cy.get('form > div.c01235 > div.c01255 > div > div:nth-child(3) > input').type("teste@teste.com.br");
})

// ----- THEN ----- //
Then('should be displayed the tickets selection window', () => {
    //cy.contains('Carregando ingressos...').should('not.visible');
    cy.contains('Ingressos').should('be.visible');
    cy.contains('Usar cupom promocional').should('be.visible');
    cy.get('.c01216.c01217').should(($buttons) => {
        expect($buttons).to.have.length(2)
      })
    cy.contains('Ingresso gratuito').should('be.visible');
    cy.contains('Ingresso pago').should('be.visible');
    cy.get('.c0135.c0137.c01213').should(($valor) => {
        expect($valor).to.have.length(2);
      })
    cy.contains('0 ingresso').should('be.visible');
})

Then('a confirmation window should be displayed', () => {
    cy.contains('Seus ingressos estão garantidos').should('be.visible');
    cy.contains('Seus dados foram salvos e agora você já pode começar a se preparar para o evento.').should('be.visible');
    cy.contains('1 x Ingresso gratuito').should('be.visible');
    cy.contains('Enviamos um e-mail com o ingresso a todos os participantes inscritos. Recomendamos que esse e-mail seja salvo para o dia do evento ou que o ingresso seja impresso para garantir o seu acesso.').should('be.visible');
    cy.contains('Voltar para o site').should('be.visible');
})

Then('the message about mandatory fields should be displayed', () => {
    cy.contains('Preencha corretamente os campos do formulário').should('be.visible');
})