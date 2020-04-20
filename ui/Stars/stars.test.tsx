import React from 'react';
import { render } from '@testing-library/react';
import StarsManager from './StarsManager';

describe('Stars tests', () => {
  it('no star - rating 0', () => {
    const { getAllByTestId, queryByTestId } = render(<StarsManager rating={0} />);
    const fullStars = queryByTestId('full-star');
    const halfStar = queryByTestId('half-star');
    const grayStars = getAllByTestId('gray-star');
    expect(grayStars.length).toBe(5);
    expect(fullStars).toBeNull();
    expect(halfStar).toBeNull();
  });
  it('one star - rating 1', () => {
    const { getAllByTestId, queryByTestId } = render(<StarsManager rating={1} />);
    const fullStars = getAllByTestId('full-star');
    const grayStars = getAllByTestId('gray-star');
    const halfStar = queryByTestId('half-star');
    expect(fullStars.length).toBe(1);
    expect(grayStars.length).toBe(4);
    expect(halfStar).toBeNull();
  });
  it('one and half star - rating 1.6', () => {
    const { getAllByTestId } = render(<StarsManager rating={1.6} />);
    const fullStars = getAllByTestId('full-star');
    const grayStars = getAllByTestId('gray-star');
    const halfStar = getAllByTestId('half-star');
    expect(fullStars.length).toBe(1);
    expect(halfStar.length).toBe(1);
    expect(grayStars.length).toBe(3);
  });
  it('one star - rating 1.123', () => {
    const { getAllByTestId, queryByTestId } = render(<StarsManager rating={1.123} />);
    const fullStars = getAllByTestId('full-star');
    const grayStars = getAllByTestId('gray-star');
    const halfStar = queryByTestId('half-star');
    expect(fullStars.length).toBe(1);
    expect(grayStars.length).toBe(4);
    expect(halfStar).toBeNull();
  });
  it('two stars - rating 2.5', () => {
    const { getAllByTestId, queryByTestId } = render(<StarsManager rating={2.5} />);
    const fullStars = getAllByTestId('full-star');
    const grayStars = getAllByTestId('gray-star');
    const halfStar = queryByTestId('half-star');
    expect(fullStars.length).toBe(2);
    expect(grayStars.length).toBe(3);
    expect(halfStar).toBeNull();
  });
  it('five stars - rating 5', () => {
    const { getAllByTestId, queryByTestId } = render(<StarsManager rating={5} />);
    const fullStars = getAllByTestId('full-star');
    const grayStars = queryByTestId('gray-star');
    const halfStar = queryByTestId('half-star');
    expect(fullStars.length).toBe(5);
    expect(halfStar).toBeNull();
    expect(grayStars).toBeNull();
  });
});
