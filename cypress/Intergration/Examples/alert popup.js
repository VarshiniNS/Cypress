/// <reference types="cypress" />
describe('alertpopup',function()
{
    it('alertlearn',function()
        {
            cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
            cy.get('#alertbtn').click();
            cy.get("input[id='confirmbtn']").click();
            //Alert window text
            cy.on('window:alert',(str)=>
            {
                expect(str).to.equal('Hello , share this practice page and share your knowledge')
            }
            )
            //Confirmation pop up text
            cy.on('window:confirm',(str)=>
            {
                expect(str).to.equal('Hello , Are you sure you want to confirm?')
            }
            )
            //need check how to click cancel /no in pop up using cypress
        })

})