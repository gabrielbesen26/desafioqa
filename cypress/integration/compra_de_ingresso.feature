Feature: Buy tickets

Background: Acesss the event
    Given the user access the event 'https://evento.moblee.com.br/ByKtijSZQ'

Scenario: Click on the Buy button and verify the fields
    When the user clicks on the button "Inscreva-se"
    Then should be displayed the tickets selection window

Scenario: Buy a free ticket and verify the fields and message
    And clicked on the button "Inscreva-se"
    When the user add a free ticket
    And clicks on "Continuar"
    And fill all the mandatory fields of credential informations
    Then a confirmation window should be displayed

Scenario: Buy a paid ticket and fill with invalid values the mandatory fields of credential informations
    And choosed to buy a paid ticket
    And fill the mandatory fields with blank space
    When the user clicks on "Continuar"
    Then the message about mandatory fields should be displayed