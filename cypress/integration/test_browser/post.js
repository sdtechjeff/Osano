describe('Post', () => {
    context('post different listings', () => {
        beforeEach(() => {
          cy.visit('https://sandiego.craigslist.org/')
            cy.get('#post').should('have.text', 'create a posting').click()
        })
  
        it('create new listing for sale by owner', () => {
            cy.get('li input').first().check()
            cy.get('span').contains('for sale by owner').click()
            cy.get('span').contains('bicycles - by owner').click()
            cy.get('#PostingTitle').type('Tour De France Champion Bike')
            cy.get('#postal_code').type('95111')
            cy.get('#PostingBody').type('This is a bike Description')
            cy.get('.submit_button').click()
            // cy.get('#PostingSuccess').should('be.visible')
            // imagine assert statements to verify posting since no posting takes place
        })

        it('create new listing service offered', () => {
            cy.get('li input').first().check()
            cy.get('span').contains('service offered').click()
            cy.get('span').contains('beauty services').click()
            cy.get('#PostingTitle').type('Make up artist wanted')
            cy.get('#postal_code').type('95111')
            cy.get('#PostingBody').type('Looking for high quality stylist')
            cy.get('.submit_button').click()
            // cy.get('#PostingSuccess').should('be.visible')
            // imagine assert statements to verify posting since no posting takes place
        })

        // it('create a post using ', () => {
        //     cy.request('POST', 'https://sandiego.craigslist.org/search/bbb', {
        //         'itemTitle': 'Bike for sale',
        //         'itemDescription': 'Amazing and cheap bike',
        //         'itemPrice': '$79.00'
        //     }
        //     expect(response.body).to.have.property('message_response', 'successfully added listing')
        // })
      })
    }
)