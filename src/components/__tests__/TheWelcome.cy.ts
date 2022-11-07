import TheWelcome from '../TheWelcome.vue';

describe('TheWelcome', () => {
  it('renders properly', () => {
    cy.mount(TheWelcome, { props: { msg: 'Hello Cypress' } });
    const EXPECTED_HEADERS = [
      'Documentation',
      'Tooling',
      'Ecosystem',
      'Community',
      'Support Vue',
    ];
    EXPECTED_HEADERS.forEach(header => {
      cy.contains('h3', header).should('be.visible');
    });
  });
});
