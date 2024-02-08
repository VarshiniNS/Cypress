/// <reference types="cypress" />
describe('dropdown',function()
{
    it('staticdropdown',function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.wait(2000);
        cy.get("input[type='checkbox']").check(['option1','option2']).should('be.checked');
        cy.get('#dropdown-class-example').select('option3').should('have.value','option3');
        cy.get('#autocomplete').type('ind');
        cy.wait(2000);
        cy.get("li[class='ui-menu-item'] div").each(($e1,index,$list)=>{

            const countryname=$e1.text()
            if(countryname==='India'){
              cy.wrap($e1).click() 
            }
        
        }   
        )
    // Visible & Invisiblity
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
    // Radio Button
        cy.get("input[value='radio1']").check().should('be.checked');
        // multiple radio button
        cy.get("input[type='radio']").check(['radio1','radio2']).should('be.checked');

    }
    
    )
}
)
