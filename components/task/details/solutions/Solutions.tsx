import React from 'react';
import Stars from '../../../stars/Stars';
import Button, { ButtonType, ButtonSize } from '../../../shared/button/Button';

interface SolutionsProps {
  solutions?: string[];
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Solutions: React.FC<SolutionsProps> = ({ solutions, setIsModalVisible }) => {
  const numberOfSolutions = solutions ? solutions.length : 0;
  const userPhoto =
    'https://avatars2.githubusercontent.com/u/21274642?s=400&u=d2f9f822cccbbd841e2c37e2c9b790644f51b8d8&v=4';

  return (
    <section className="mt-4">
      <h4 className="text-sm font-bold pb-3">Rozwiązania ({numberOfSolutions})</h4>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={userPhoto} alt="User photo" className="w-8 h-8 rounded-full mr-2" />
          <p className="text-xs">@czechue</p>
        </div>
        <Stars rating={4.7} />
        <p className="text-gray-700 text-xl font-thin w-2/12 text-right">10 h</p>
      </div>
      <div className="border border-b-2 mt-4 mx-2" />
      <div className="text-center my-8">
        <Button
          type={ButtonType.Black}
          size={ButtonSize.Big}
          onClick={(): void => setIsModalVisible(true)}
        >
          Dodaj rozwiązanie
        </Button>
      </div>
    </section>
  );
};

export default Solutions;
