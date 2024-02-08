/// <reference types="cypress" />


describe('Trial Suite',function() 
{
  it('Trail Scenarion' ,function()
  {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type('ca');
    cy.wait(2000);
    //cy.get('.product').should('have.length',5);
    //to get only visible products
    cy.get('.product:Visible').should('have.length',4);
    //with help of parent dom element(Parent child chaining)
    cy.get('.products').find('.product').should('have.length',4);
    //clicking using index from list 
    cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();
    //Add to cart by searching name of product
    cy.get('.products').find('.product').each(($e1,index,$list)=>{

      const vegtext=$e1.find('h4.product-name').text()
      if(vegtext.includes('Cashews')){
        cy.wrap($e1).find('button').click()
      }

    })
    
  }
  )

}

)