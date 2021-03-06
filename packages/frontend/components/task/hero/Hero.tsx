import React from 'react';
import Badges from '../../badges/Badges';
import Stars from '../../stars/Stars';
import { useTaskState } from '../../context/TaskDetailContext';

export const Hero: React.FC = () => {

  const { title, _user: author, tags, createdAt } = useTaskState();

  return (
    <div className="bg-white w-full px-4">
      <section className="max-w-8xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center md:px-8">
        <div className="py-8 flex flex-col items-start">
          <p className="self-start text-sm">Data utworzenia: {createdAt.slice(0, 10)}</p>
          <h2 className="max-w-xl text-2xl md:text-4xl font-bold tracking-wide leading-tight">
            {title}
          </h2>
          <p className="text-xs md:text-sm text-gray-700 mb-2 font-bold">Autor: {author}</p>
          <Stars rating={4.7} />
          <div className="self-start">
            <Badges tags={tags} />
          </div>
        </div>
      </section>
    </div>
  );
};
