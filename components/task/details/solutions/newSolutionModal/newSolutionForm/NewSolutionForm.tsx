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
    <form onSubmit={handleSubmit} action="" className="w-6/12 flex flex-col items-center">
      <div className="flex flex-col pt-4 w-full">
        <label htmlFor="">Link do rozwiązania</label>
        <input
          type="text"
          name="solution"
          id="solution"
          className="w-full h-10 border rounded-sm px-2"
          onChange={handleSolutionChange}
        />
      </div>
      <div className="flex flex-col pt-4 w-full">
        <label htmlFor="">Link do wersji live</label>
        <input
          type="text"
          name="live"
          id="live"
          className="w-full h-10 border rounded-sm px-2"
          onChange={handleLiveLinkChange}
        />
      </div>
      <div className="flex flex-col pt-4 w-full">
        <label htmlFor="">Użyte technologie</label>
        <Select
          options={technologies}
          onChange={handleSelectedTechnologies}
          styles={formStyles}
          placeholder="Wybierz technologie..."
          isMulti
        />
      </div>
      <div className="mt-4">
        <Button submit type={ButtonType.Black}>
          Wyślij
        </Button>
      </div>
    </form>
  );
};

export default NewSolutionForm;
