import React from 'react';
import Button, { ButtonLayout } from '../../../../shared/button/Button';
import Select from 'react-select';
import { formStyles } from './formStyles';
import clsx from 'clsx';
import NewSolutionFormInput from './newSolutionFormInput/NewSolutionFormInput';
import { Form, Field } from 'react-final-form';
import { correctUrlValidator } from '../../../../../utils/validators/correctUrlValidator';
import { required } from '../../../../../utils/validators/requiredValidator';
import { composeValidators } from '../../../../../utils/validators/composeValidators';
import { useUser } from '../../../../context/UserContext';

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

interface NewSolutionFormProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  taskId: string;
}

interface TechnologiesSelect {
  label: string;
  value: string;
}
interface FormValues {
  solutionLinkInput: string;
  liveLinkInput?: string;
  technologiesSelect: TechnologiesSelect[];
  reviewCheckbox?: boolean;
}

const NewSolutionForm: React.FC<NewSolutionFormProps> = ({ setIsModalOpen, taskId }) => {
  const user = useUser();

  async function postSolutionToDatabase(values: FormValues): Promise<void> {
    const data = {
      repo: values.solutionLinkInput,
      demo: values.liveLinkInput,
      comment: 'komentarz',
      phase: values.reviewCheckbox ? 'Do zatwierdzenia' : '',
      taskId: taskId,
      authorId: user._id,
    };

    fetch('/api/solutions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((data) => data.json())
      .then((res) => {
        console.log('Success:', res);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  const onSubmit = (values: FormValues): any => {
    try {
      postSolutionToDatabase(values);
      setIsModalOpen(false);
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

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ reviewCheckbox: false }}
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
                      <NewSolutionFormInput name={name} value={value} onChange={onChange}>
                        Link do rozwiązania
                      </NewSolutionFormInput>
                      {props.meta.error && props.meta.touched && <span>{props.meta.error}</span>}
                    </>
                  );
                }}
              />

              <Field
                name="liveLinkInput"
                render={(props): JSX.Element => (
                  <>
                    <NewSolutionFormInput
                      name={props.input.name}
                      value={props.input.value}
                      onChange={props.input.onChange}
                    >
                      Link do wersji live
                    </NewSolutionFormInput>
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

export default NewSolutionForm;
