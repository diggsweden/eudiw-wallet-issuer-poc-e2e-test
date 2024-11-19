describe('Auth flow', () => {


    it('authenticates user', () => {
        cy.visit('https://local.dev.swedenconnect.se:9091/start-test-1-authorisation-flow');
        cy.contains('Sweden Connect Referens-IdP').click();
        cy.origin('https://local.dev.swedenconnect.se:9020', () => {
            
            cy.get('[id="selectSimulatedUser"]').select('197309069289');
            cy.get('[id="selectLoa"]').select('http://id.elegnamnden.se/loa/1.0/eidas-nf-high');
            cy.get('[id="submitButton"]').click();
        });

        cy.origin('https://local.dev.swedenconnect.se:9090', () => {
            cy.url()
            cy.get('[id="profile"]').click();
            cy.get('[id="VerifiablePortableDocumentA1"]').click();
            cy.get('[id="submit-consent"]').click();
        });

        cy.origin('https://local.dev.swedenconnect.se:9091', () => {
            cy.url().should('contain', '/callback-test-1-authorisation-flow');
        });
    });
});