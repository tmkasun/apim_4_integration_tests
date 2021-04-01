const CARBON_ORIGIN = "https://localhost:8081"
describe("API Create flow", () => {
    const username = 'admin'
    const password = 'admin'
    beforeEach(function () {
        // login before each test
        cy.loginToPublisher(username, password)
    })

    it("Delete all APIs", () => {
        cy.visit(`${CARBON_ORIGIN}/publisher/apis`);
        cy.get('#itest-apis-listing-total')
            .then(
                (countElement) => {
                    let totalAPIs = parseInt(countElement.text());
                    while (totalAPIs > 0) {
                        cy.get('#itest-id-deleteapi-icon-button').click();
                        cy.get('#itest-id-deleteconf').click();
                        totalAPIs -= 1;
                    }
                    cy.get('#itest-apis-welcome-msg').should('be.visible')
                }
            )
    });
})
 // cy.intercept('/api/am/publisher/v2/apis', (req) => {
        //     req.reply((res) => {
        //         const { total: totalAPIs } = res.body.pagination;
        //     })
        // })