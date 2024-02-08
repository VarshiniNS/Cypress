/// <reference types="cypress"/>
describe('mousehover', function()
    {
        it('mouseactions',function()
            {
                cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
                //if we want validate mouse hover then we use invoke and show
                // cy.get("div[class='mouse-hover-content']").invoke('show');
                // cy.contains('Top').click();
                //if we want jsut click on hidden button we can pass a force arg in click and click on hide elements 
                cy.contains('Top').click({force:true});
                cy.wait(2000);
                cy.url().should('include','top');
            }
        )
    })


