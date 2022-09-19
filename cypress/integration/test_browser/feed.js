describe('Feed', () => {
    it('perform search', () => {
        cy.visit('https://sandiego.craigslist.org/')
        cy.get('#query').type('bike{enter}')
        cy.get('.result-row').should('have.length', 120)
    })

    it('contains correct number of listing items', () => {
        cy.visit('https://sandiego.craigslist.org/')
        cy.get('span').contains('services').click()
        cy.get('.result-row').should('have.length', 120)

    })

    it('contains no listing search results', () => {
        cy.intercept({
            method: 'GET',
            url: 'https://sandiego.craigslist.org/search/bbb'
        }, {
            statusCode: 200,
            body: [
                {}
            ]
        })

        cy.visit('https://sandiego.craigslist.org/')
        cy.get('span').contains('services').click()
        // cy.get('.result-row').should('have.length', 0)
        // imagine hitting backend API through intercept to mock API response
    })
})