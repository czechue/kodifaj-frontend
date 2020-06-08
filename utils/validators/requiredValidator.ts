export function required(error: string): (value: string) => string | undefined {
  return (value: string): string | undefined => (value ? undefined : error);
}
