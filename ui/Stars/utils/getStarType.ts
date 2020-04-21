export enum StarType {
  Full,
  Half,
  Empty,
}

export default function getStarType(rating: number, index: number): StarType {
  if (index < Math.floor(rating) || (index === Math.floor(rating) && rating % 1 === 1)) {
    return 0;
  }
  if (index === Math.floor(rating) && rating % 1 > 0.5) {
    return 1;
  }
  return 2;
}
