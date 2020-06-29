import React from 'react';
import Button, { ButtonLayout } from '../button/Button';
import Select from 'react-select';
import clsx from 'clsx';
import { Form, Field } from 'react-final-form';
import { correctUrlValidator } from '../../../utils/validators/correctUrlValidator';
import { required } from '../../../utils/validators/requiredValidator';
import { composeValidators } from '../../../utils/validators/composeValidators';
import { useUser } from '../../context/UserContext';
import SolutionFormInput from './solutionFormInput/SolutionFormInput';
import { formStyles } from './formStyles';
import { addSolution } from './utils/addSolution';
import { updateSolution } from './utils/updateSolution';
import { getSolutions } from './utils/getSolutions';
import { Solution } from '@kodifaj/common';

export const technologies = [
  { value: 'html', label: '#html' },
  { value: 'css', label: '#css' },
  { value: 'js', label: '#js' },
  { value: 'nodejs', label: '#nodejs' },
  { value: 'python', label: '#python' },
  { value: 'react', label: '#react' },
  { value: 'vue', label: '#vue' },
  { value: 'angular', label: '#angular' },
];

interface SolutionFormProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  taskId: string;
  repoLink?: string;
  liveLink?: string;
  technologies?: string[];
  reviewCheckbox?: boolean;
  techs?: string[];
  phase?: string;
  solutionId?: string;
  updateSolutions?: (solutions: Solution[]) => void;
}

export interface TechnologiesSelect {
  label: string;
  value: string;
}
export interface FormValues {
  solutionLinkInput: string;
  liveLinkInput?: string;
  technologiesSelect: TechnologiesSelect[];
  reviewCheckbox?: boolean;
}

const SolutionForm: React.FC<SolutionFormProps> = ({
  setIsModalOpen,
  taskId,
  repoLink,
  liveLink,
  techs,
  phase,
  solutionId,
  updateSolutions,
}) => {
  const user = useUser();

  const onSubmit = (values: FormValues): void => {
    // todo: do zrefactorowania
    try {
      if (updateSolutions) {
        if (!solutionId) {
          addSolution(values, taskId, user)
            .then(() => getSolutions(taskId))
            .then((res) => updateSolutions(res))
            .then(() => setIsModalOpen(false));
        } else {
          updateSolution(values, solutionId)
            .then(() => getSolutions(taskId))
            .then((res) => updateSolutions(res))
            .then(() => setIsModalOpen(false));
        }
      } else {
        console.log('Brak możliwości dodania');
      }
    } catch (error) {
      return error.message;
    }
  };

  const ReviewCheckboxLabelStyles = (value?: boolean): string =>
    clsx('w-full text-xs text-right', value ? 'text-white' : 'text-gray-600');

  const ReviewCheckboxBoxStyles = (value?: boolean): string =>
    clsx(
      'flex w-full h-10 mt-10 border rounded-sm items-center px-4 cursor-pointer',
      value && 'bg-gray-800 text-white',
    );

  const getDefaultSelect = (props: string[]): TechnologiesSelect[] => {
    const initialSelectValues: TechnologiesSelect[] = [];
    for (let i = 0; i < props.length; i++) {
      technologies.map((item) => item.value === props[i] && initialSelectValues.push(item));
    }
    return initialSelectValues;
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{
        reviewCheckbox: phase && phase === 'review' ? true : false,
        solutionLinkInput: repoLink,
        liveLinkInput: liveLink,
      }}
      render={({ handleSubmit }): React.ReactNode => {
        return (
          <form onSubmit={handleSubmit} action="" className="w-full flex flex-col items-start">
            <div className="w-full lg:w-3/4">
              <Field<string>
                name="solutionLinkInput"
                validate={composeValidators(
                  required('Pole wymagane'),
                  correctUrlValidator('Wpisz poprawny adres'),
                )}
                render={(props): JSX.Element => {
                  const { name, value, onChange } = props.input;
                  return (
                    <>
                      <SolutionFormInput name={name} value={value} onChange={onChange}>
                        Link do rozwiązania
                      </SolutionFormInput>
                      {props.meta.error && props.meta.touched && <span>{props.meta.error}</span>}
                    </>
                  );
                }}
              />
              <Field
                name="liveLinkInput"
                render={(props): JSX.Element => (
                  <>
                    <SolutionFormInput
                      name={props.input.name}
                      value={props.input.value}
                      onChange={props.input.onChange}
                    >
                      Link do wersji live
                    </SolutionFormInput>
                    {props.meta.error && props.meta.touched && <span>{props.meta.error}</span>}
                  </>
                )}
              />
              <Field
                name="technologiesSelect"
                validate={composeValidators(required('Wybierz zastosowane technologie'))}
                render={(props): JSX.Element => {
                  return (
                    <div className="flex flex-col pt-4 w-full">
                      <label htmlFor="technologiesSelect" className="text-xs mb-1 text-gray-600">
                        Użyte technologie
                      </label>
                      <Select
                        options={technologies}
                        styles={formStyles}
                        id="technologiesSelect"
                        placeholder="Wybierz technologie..."
                        isMulti
                        defaultValue={techs && getDefaultSelect(techs)}
                        name={props.input.name}
                        onChange={props.input.onChange}
                      />
                      {props.meta.error && props.meta.touched && <span>{props.meta.error}</span>}
                    </div>
                  );
                }}
              />
              <Field name="reviewCheckbox" component="input" type="checkbox">
                {(props): JSX.Element => {
                  return (
                    <div className={ReviewCheckboxBoxStyles(props.input.checked)}>
                      <input
                        type="checkbox"
                        name={props.input.name}
                        className="cursor-pointer"
                        onChange={props.input.onChange}
                        defaultChecked={phase && phase === 'review' ? true : false}
                      />
                      <label
                        htmlFor="reviewCheckbox"
                        className={ReviewCheckboxLabelStyles(props.input.checked)}
                      >
                        Prośba o recenzję
                      </label>
                    </div>
                  );
                }}
              </Field>
            </div>
            <div className="w-full border border-gray-200 border-b-1 mt-10" />
            <div className="mt-10 w-full flex justify-between">
              <button
                type="button"
                className="text-gray-700 hover:underline"
                onClick={(): void => setIsModalOpen(false)}
              >
                Wróć
              </button>
              <div className="-mx-4">
                <Button type="submit" layout={ButtonLayout.Black}>
                  Wyślij
                </Button>
              </div>
            </div>
          </form>
        );
      }}
    />
  );
};

export default SolutionForm;
