import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../pages';

test('renders deploy link', () => {
  const { getByText } = render(<Home projects={[{ id: 'foo-id' }]} />);
  const linkElement = getByText('foo-id');
  expect(linkElement).toBeInTheDocument();
});
