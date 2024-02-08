/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'


describe ('frames',function()
{
    it('frameslast',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href='learning-path']").eq(0). click({force:true})
        cy.iframe().find("div[class='inner-box']  ").then(function(title){
            var titletext = title.text()
            titletext.trim()
            cy.log(titletext)
        })
    })
})