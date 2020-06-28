import { FieldValidator } from 'final-form';

export function composeValidators(...validators: FieldValidator<string>[]) {
  return (value: string, allValues: object): void =>
    validators.reduce((error, validator) => error || validator(value, allValues), undefined);
}
