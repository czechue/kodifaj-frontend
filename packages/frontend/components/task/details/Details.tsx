import React from 'react';
import Gallery from './gallery/Gallery';
import Solutions from './solutions/Solutions';
import Description from './description/Description';

const TaskDetails: React.FC = () => {

  return (
    <>
      <div className="w-full max-w-8xl mx-auto px-4 pt-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 md:mr-4">
            <Description />
          </div>
          <div className="w-full md:w-1/3">
            <Gallery />
            <Solutions />
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskDetails;
