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
Cypress.Commands.add('portalLogin', (username, password) => {
    Cypress.log({
        name: 'carbonLogin',
        message: `${username} | ${password}`,
    })

    cy.visit('https://localhost:9443/devportal');
    cy.get('#itest-devportal-sign-in').click();
    cy.url().should('contains', 'https://localhost:9443/authenticationendpoint/login.do');
    cy.get('[data-testid=login-page-username-input]').click();
    cy.get('[data-testid=login-page-username-input]').type('admin');
    cy.get('[data-testid=login-page-password-input]').type('admin');
    cy.get('#loginForm').submit();
    cy.url().should('contains', 'https://localhost:9443/devportal/apis');
})
