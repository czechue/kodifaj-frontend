import React from 'react';
import { useTaskState } from '../../../context/TaskDetailContext';

const Gallery: React.FC = () => {
  const { images } = useTaskState();
  const numberOfImages = images ? images.length : 0;
  if (images?.length === 0) return null;
  return (
    <section>
      <h4 className="text-sm font-bold pb-3">Przykładowe zdjęcia ({numberOfImages})</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images &&
          images.map((image, index) => {
            return (
              <img
                key={index}
                src={image}
                alt="Image"
                className="w-full relative md:w-48 transform scale-100 transition-transform duration-500 md:hover:scale-150 hover:z-10"
              />
            );
          })}
      </div>
    </section>
  );
};

export default Gallery;
