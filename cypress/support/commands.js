const CARBON_ORIGIN = "https://localhost:8081"

Cypress.Commands.add('carbonLogin', (username, password) => {
    Cypress.log({
        name: 'carbonLogin',
        message: `${username} | ${password}`,
    })

    cy.visit('https://localhost:9443/carbon/admin/login.jsp');
    cy.get('#txtUserName').type(username);
    cy.get('#txtPassword').type(password);
    cy.get('form').submit();
})
Cypress.Commands.add('portalLogin', (username, password, portal) => {
    Cypress.log({
        name: 'portalLogin',
        message: `${username} | ${password}`,
    })

    cy.visit(`${CARBON_ORIGIN}/${portal}`);
    if (portal === 'devportal') {
        cy.get('#itest-devportal-sign-in').click();
    }
    cy.url().should('contains', 'https://localhost:9443/authenticationendpoint/login.do');
    cy.get('[data-testid=login-page-username-input]').click();
    cy.get('[data-testid=login-page-username-input]').type('admin');
    cy.get('[data-testid=login-page-password-input]').type('admin');
    cy.get('#loginForm').submit();
    cy.url().should('contains', `${CARBON_ORIGIN}/${portal}`);
})

Cypress.Commands.add('loginToPublisher', (username, password) => {
    cy.portalLogin(username, password, 'publisher');
})

Cypress.Commands.add('loginToDevportal', (username, password) => {
    cy.portalLogin(username, password, 'devportal');
})
