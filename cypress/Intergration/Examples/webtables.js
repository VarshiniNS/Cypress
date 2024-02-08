///  <reference types='cypress' />



describe ('webtable',function(){
    it('webtableiterate',function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get("table[name='courses'] tbody tr td:nth-child(2) ").each(($e1,index,$list)=>
            {
                const coursename = $e1.text();
                if (coursename.includes('Python'))
                {
                    cy.get($e1).next().then(function(price){
                        const pricevalue= price.text()
                        expect(pricevalue).to.equal('25')
                    })
                }
            })
        {

        }
    })
})