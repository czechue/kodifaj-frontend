import React from 'react';
import { render } from '@testing-library/react';
import Button, { ButtonType } from './Button';

describe('Button component', () => {
  it('should display default style button', () => {
    const { queryByText } = render(<Button>Child element</Button>);
    expect(queryByText('Child element')).toHaveTextContent('Child element');
    expect(queryByText('Child element')).toHaveClass('bg-white text-gray-700');
  });
  it('should display button with correct type', () => {
    const { queryByText } = render(<Button type={ButtonType.Black}>Child element</Button>);
    expect(queryByText('Child element')).toHaveTextContent('Child element');
    expect(queryByText('Child element')).toHaveClass('bg-gray-900 hover:bg-gray-800 text-white');
  });
});
