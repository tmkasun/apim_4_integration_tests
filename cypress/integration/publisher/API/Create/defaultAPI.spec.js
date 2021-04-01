import Utils from "../../../../support/utils"

const CARBON_ORIGIN = "https://localhost:8081"
describe("API Create flow", () => {
    const username = 'admin'
    const password = 'admin'
    beforeEach(function () {
        // login before each test
        cy.loginToPublisher(username, password)
    })
    it.skip("Deploy sample API", () => {
        cy.viewport(1920, 980)
        cy.visit(`${CARBON_ORIGIN}/publisher/apis`)
        cy.get('#itest-rest-api-create-menu').click()
        cy.get('#itest-id-deploy-sample').click()
        cy.get('#itest-api-name-version', { timeout: 10000 }).should('be.visible');
        cy.url().should('contains', '/overview');
        cy.get("#itest-api-name-version").contains('PizzaShackAPI');
    })

    it.skip("Create an API", () => {
        cy.visit(`${CARBON_ORIGIN}/publisher/apis`)
        cy.get('#itest-create-api-menu-button').click()
        cy.get('#itest-id-landing-rest-create-default').click()
        const random_number = Math.floor(Date.now() / 1000);
        cy.get('#itest-id-apiname-input').type(`sample_api_${random_number}`);
        cy.get('#itest-id-apicontext-input').click();
        cy.get('#itest-id-apicontext-input').type(`/sample_context_${random_number}`);
        cy.get('#itest-id-apiversion-input').click();
        cy.get('#itest-id-apiversion-input').type(`v${random_number}`);
        cy.get('#itest-id-apiendpoint-input').click();
        cy.get('#itest-id-apiendpoint-input').type(`https://apis.wso2.com/sample${random_number}`);
        cy.get('#itest-create-default-api-button').click();
        cy.get("#itest-api-name-version").contains(`sample_api_${random_number}`);
    })


    it("Create 15~25 APIs", () => {
        let i = Utils.getRandomRange(15,25);
        while (i > 0) {
            cy.visit(`${CARBON_ORIGIN}/publisher/apis`)
            cy.get('#itest-create-api-menu-button').click()
            cy.get('#itest-id-landing-rest-create-default').click()
            const random_number = Math.round(Math.random() * 1000);
            cy.get('#itest-id-apiname-input').type(`sample_api_${random_number}`);
            cy.get('#itest-id-apicontext-input').click();
            cy.get('#itest-id-apicontext-input').type(`/sample_context_${random_number}`);
            cy.get('#itest-id-apiversion-input').click();
            cy.get('#itest-id-apiversion-input').type(`v${random_number}`);
            cy.get('#itest-id-apiendpoint-input').click();
            cy.get('#itest-id-apiendpoint-input').type(`https://apis.wso2.com/sample${random_number}`);
            cy.get('#itest-create-default-api-button').click();
            cy.get("#itest-api-name-version").contains(`sample_api_${random_number}`);
            i -= 1;
        }
    });
})