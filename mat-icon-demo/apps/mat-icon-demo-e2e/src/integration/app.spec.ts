import { getGreeting } from '../support/app.po';

describe('mat-icon-demo', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to mat-icon-demo!');
  });
});
