Feature: Buy tickets

Background: Acesss the event
    Given the user access the event 'https://evento.moblee.com.br/ByKtijSZQ'

Scenario: Click on the Buy button and verify the fields
    When the user clicks on the button "Inscreva-se"
    Then should be displayed the tickets selection window
    
    

    