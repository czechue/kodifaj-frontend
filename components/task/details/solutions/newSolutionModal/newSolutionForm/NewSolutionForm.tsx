import React, { FormEventHandler, useState, ChangeEvent } from 'react';
import Button, { ButtonType } from '../../../../../shared/button/Button';
import Select, { ValueType } from 'react-select';
import { formStyles } from './formStyles';

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

interface Technology {
  value: string;
  label: string;
}

const NewSolutionForm: React.FC = () => {
  const [solutionLink, setSolutionLink] = useState('');
  const [liveLink, setLiveLink] = useState('');
  const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]);

  const handleSolutionChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSolutionLink(e.target.value);
  };

  const handleLiveLinkChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setLiveLink(e.target.value);
  };

  const handleSelectedTechnologies = (selectedOpion: ValueType<Technology>): void => {
    const selectedTechs = selectedOpion as Technology[];
    setSelectedTechnologies(selectedTechs);
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    console.log(selectedTechnologies);
  };
  return (
    <form onSubmit={handleSubmit} action="" className="w-full flex flex-col items-start">
      <div className="w-full lg:w-3/4">
        <div className="flex flex-col pt-4 w-full">
          <label htmlFor="solutionLinkInput" className="text-xs mb-1 text-gray-600">
            Link do rozwiązania
          </label>
          <input
            type="text"
            name="solution"
            id="solutionLinkInput"
            className="w-full h-10 border rounded-sm px-2 bg-gray-200"
            onChange={handleSolutionChange}
          />
        </div>
        <div className="flex flex-col pt-4 w-full">
          <label htmlFor="liveLinkInput" className="text-xs mb-1 text-gray-600">
            Link do wersji live
          </label>
          <input
            type="text"
            name="live"
            id="liveLinkInput"
            className="w-full h-10 border rounded-sm px-2 bg-gray-200"
            onChange={handleLiveLinkChange}
          />
        </div>
        <div className="flex flex-col pt-4 w-full">
          <label htmlFor="technologiesSelect" className="text-xs mb-1 text-gray-600">
            Użyte technologie
          </label>
          <Select
            options={technologies}
            onChange={handleSelectedTechnologies}
            styles={formStyles}
            id="technologiesSelect"
            placeholder="Wybierz technologie..."
            isMulti
          />
        </div>
      </div>
      <div className="w-full border border-gray-200 border-b-1 mt-10" />
      <div className="mt-10 w-full flex justify-between">
        <button type="button" className="text-gray-700 hover:underline">
          Wróć
        </button>
        <div className="-mx-4">
          <Button submit type={ButtonType.Black}>
            Wyślij
          </Button>
        </div>
      </div>
    </form>
  );
};

export default NewSolutionForm;
