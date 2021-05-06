import React from 'react';

const SectionManagerItem = ({ project, index, selectSection }) => {
  const onSelectSection = (section, index) => selectSection(section, index);

  return (
    <div
      onClick={() => onSelectSection(project, index)}
      key={index}
      className="flex justify-center items-center z-10 h-10 w-full bg-background mb-4 px-3 py-3 rounded-2xl transform hover:scale-105 hover:-translate-y-1 hover:-translate-x-1 transition duration-500 ease-in-out cursor-pointer"
    >
      <input
        className="text-center text-primarydark text-sm bg-background focus:outline-none w-full mr-2 self-start cursor-pointer"
        value={project.title}
      />
    </div>
  );
};

export default SectionManagerItem;
