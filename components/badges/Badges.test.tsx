import React from 'react';
import { render } from '@testing-library/react';
import Badges from './Badges';

describe('Badges test', () => {
  it('empty list', () => {
    const { queryByTestId } = render(<Badges tags={[]} />);
    const tags = queryByTestId('tag');
    expect(tags).toBeNull();
  });

  it('3 element list', () => {
    const { getAllByTestId } = render(<Badges tags={['css', 'html', 'js']} />);
    const tags = getAllByTestId('tag');
    expect(tags.length).toBe(3);
  });
});
