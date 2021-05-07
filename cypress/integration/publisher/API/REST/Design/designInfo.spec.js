import Utils from "../../../../../support/utils"

const CARBON_ORIGIN = Utils.getAppOrigin();
describe("Add business information", () => {
    const username = 'admin'
    const password = 'admin'
    beforeEach(function () {
        // login before each test
        cy.viewport(1920, 980)
        cy.loginToPublisher(username, password)
    })

    it("Create a API", () => {
        cy.visit(`${CARBON_ORIGIN}/publisher/apis`);
        cy.get('#itest-rest-api-create-menu').click()
        cy.get('#itest-id-landing-rest-create-default').click()
        const random_number = Math.round(Math.random() * 100);
        const apiName = `SamplAPIforBusinessInfo`
        cy.get('#itest-id-apiname-input').type(apiName);
        cy.get('#itest-id-apicontext-input').click();
        cy.get('#itest-id-apicontext-input').type(`/sample_context_${random_number}`);
        cy.get('#itest-id-apiversion-input').click();
        cy.get('#itest-id-apiversion-input').type(`v${random_number}`);
        cy.get('#itest-id-apiendpoint-input').click();
        cy.get('#itest-id-apiendpoint-input').type(`https://apis.wso2.com/sample${random_number}`);
        cy.get('#itest-create-default-api-button').click();

    });

    it("Add business info", () => {
        cy.visit(`${CARBON_ORIGIN}/publisher/apis`);
        cy.contains('#itest-api-name','SamplAPIforBusinessInfo').click();
        cy.get('#itest-api-details-portal-config-acc [role=button]').click();
        cy.get('.leftLInk').eq(2).click();
        cy.get('#businessOwnerName').type('John Dwoe');
        cy.get('#businessOwnerEmail').type('jhohn@pizza.com');
        cy.get('#technicalOwnerName').type('Jane Dwoe');
        cy.get('#technicalOwnerEmail').type('jane@pizza.com');
        cy.get('#businessInfoSaveButton').click();
    });

    it("Add business plans", () => {
        cy.visit(`${CARBON_ORIGIN}/publisher/apis`);
        cy.contains('#itest-api-name','SamplAPIforBusinessInfo').click();
        cy.get('#itest-api-details-portal-config-acc [role=button]').click();
        cy.get('.leftLInk').eq(3).click();
        cy.get('[type="checkbox"]').check()
        cy.get('[type="submit"]').contains('Save').click();
    });

    it("Download API project", () => {
        cy.visit(`${CARBON_ORIGIN}/publisher/apis`);
        cy.contains('#itest-api-name','SamplAPIforBusinessInfo').click();
        cy.get('#downloadAPIButton').click();
    });

    it("Enable schema validation", () => {
        cy.visit(`${CARBON_ORIGIN}/publisher/apis`);
        cy.contains('#itest-api-name','SamplAPIforBusinessInfo').click();
        cy.get('#itest-api-details-api-config-acc [role=button]').click();
        cy.get('.leftLInk').eq(6).click();
        cy.get('#itest-enable-schema-validation').check()
        cy.get('[type="button"]').contains('Yes').click();
        cy.get('[type="button"]').contains('Save').click();
    });

    it("Delete API", () => {
        cy.visit(`${CARBON_ORIGIN}/publisher/apis`);
        cy.get('#itest-id-deleteapi-icon-button').click();
        cy.get('#itest-id-deleteconf').click();
    });

})
