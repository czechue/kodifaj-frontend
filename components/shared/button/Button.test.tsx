import React from 'react';
import { render } from '@testing-library/react';
import Button, { ButtonType } from './Button';

describe('Button tests', () => {
  it('No props, empty button', () => {
    const { queryByTestId } = render(<Button></Button>);
    const button = queryByTestId('button');
    expect(button?.className).toContain('bg-white text-gray-700');
    expect(button?.innerHTML).toBe('');
  });
  it('No props with children', () => {
    const { queryByTestId } = render(<Button>Child element</Button>);
    const button = queryByTestId('button');
    expect(button?.className).toContain('bg-white text-gray-700');
    expect(button?.innerHTML).toEqual('Child element');
  });
  it('type Black', () => {
    const { queryByTestId } = render(<Button type={ButtonType.Black}></Button>);
    const button = queryByTestId('button');
    expect(button?.className).toContain('bg-gray-900 hover:bg-gray-800 text-white');
    expect(button?.innerHTML).toBe('');
  });
  it('type Black with children', () => {
    const { queryByTestId } = render(<Button type={ButtonType.Black}>Child element</Button>);
    const button = queryByTestId('button');
    expect(button?.className).toContain('bg-gray-900 hover:bg-gray-800 text-white');
    expect(button?.innerHTML).toEqual('Child element');
  });
});
