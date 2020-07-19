import React from 'react';
import { mount } from 'cypress-react-unit-test';
import { UserDetails } from '../../../packages/frontend/components/user/details/Details';

describe('Load user page', () => {
  it('Visit simple user page', () => {
    cy.visit('http://localhost:3000/users/5edf6edbd8411b39e5f24e71');
    cy.contains('Rozwiązania').click();
  });
  it('works mounting', () => {
    mount(<UserDetails />)
    cy.contains('Rozwiązania')
  });
});
