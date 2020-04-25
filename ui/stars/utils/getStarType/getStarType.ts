export enum StarType {
  Full = 'FULL',
  Half = 'HALF',
  Empty = 'EMPTY',
}

export default function getStarType(rating: number, index: number): StarType {
  if (index < Math.floor(rating) || (index === Math.floor(rating) && rating % 1 === 1)) {
    return StarType.Full;
  }
  if (index === Math.floor(rating) && rating % 1 > 0.5) {
    return StarType.Half;
  }
  return StarType.Empty;
}
