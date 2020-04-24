import React from 'react';
import { render } from '@testing-library/react';

import { Task } from '../../../common/models/task.types';
import Home from '../../views/Index';

test('renders deploy link', () => {
  const { getByText } = render(<Home tasks={[{ _id: 'foo-id' } as Task]} />);
  const linkElement = getByText('foo-id');
  expect(linkElement).toBeInTheDocument();
});
