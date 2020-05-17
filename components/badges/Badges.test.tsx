import React from 'react';
import { render } from '@testing-library/react';
import Badges from './Badges';

describe('Badges component', () => {
  it('empty list', () => {
    const { queryByTestId } = render(<Badges tags={[]} />);
    const tags = queryByTestId('tag');
    expect(tags).toBeNull();
  });

  it('3 element list', () => {
    const { queryByText, getAllByTestId } = render(<Badges tags={['css', 'html', 'js']} />);
    const tags = getAllByTestId('tag');
    expect(queryByText('css', { exact: false })).toBeInTheDocument();
    expect(queryByText('html', { exact: false })).toBeInTheDocument();
    expect(queryByText('js', { exact: false })).toBeInTheDocument();
    expect(tags.length).toBe(3);
  });
});
