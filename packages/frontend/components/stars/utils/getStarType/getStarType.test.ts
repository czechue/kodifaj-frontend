import getStarType from './getStarType';

describe('getStarType helper', () => {
  it('empty star - rating 0', () => {
    expect(getStarType(0, 0)).toEqual('EMPTY');
    expect(getStarType(0, 1)).toEqual('EMPTY');
    expect(getStarType(0, 2)).toEqual('EMPTY');
    expect(getStarType(0, 3)).toEqual('EMPTY');
    expect(getStarType(0, 4)).toEqual('EMPTY');
  });

  it('one full star - rating 1', () => {
    expect(getStarType(1, 0)).toEqual('FULL');
    expect(getStarType(1, 1)).toEqual('EMPTY');
    expect(getStarType(1, 2)).toEqual('EMPTY');
    expect(getStarType(1, 3)).toEqual('EMPTY');
    expect(getStarType(1, 4)).toEqual('EMPTY');
  });

  it('half star - rating 1.6 ', () => {
    expect(getStarType(1.6, 0)).toEqual('FULL');
    expect(getStarType(1.6, 1)).toEqual('HALF');
    expect(getStarType(1.6, 2)).toEqual('EMPTY');
    expect(getStarType(1.6, 3)).toEqual('EMPTY');
    expect(getStarType(1.6, 4)).toEqual('EMPTY');
  });

  it('full stars - rating 5 ', () => {
    expect(getStarType(5, 0)).toEqual('FULL');
    expect(getStarType(5, 1)).toEqual('FULL');
    expect(getStarType(5, 2)).toEqual('FULL');
    expect(getStarType(5, 3)).toEqual('FULL');
    expect(getStarType(5, 4)).toEqual('FULL');
  });

  it('mixed stars - rating 3.6 ', () => {
    expect(getStarType(3.6, 0)).toEqual('FULL');
    expect(getStarType(3.6, 1)).toEqual('FULL');
    expect(getStarType(3.6, 2)).toEqual('FULL');
    expect(getStarType(3.6, 3)).toEqual('HALF');
    expect(getStarType(3.6, 4)).toEqual('EMPTY');
  });
});
