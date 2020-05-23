import React from 'react';

interface GalleryProps {
  images?: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const numberOfImages = images ? images.length : 0;
  return (
    <section>
      <h4 className="text-sm font-bold pb-3">Przykładowe zdjęcia ({numberOfImages})</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images &&
          images.map((image, index) => {
            return <img key={index} src={image} alt="Image" className="w-full md:w-48" />;
          })}
      </div>
    </section>
  );
};

export default Gallery;
