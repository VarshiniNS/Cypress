/// <reference types="cypress"  />



describe('childtab',function()
{
    it('navigatetochildtab',function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#opentab').invoke('removeAttr','target').click();
        cy.origin('https://www.qaclickacademy.com', function() {
            cy.get("ul[class] li a[href='contactus.html']").click();
            cy.get("div[class='section-title'] h2").should('contain','Keep')
        })
       
    })
})