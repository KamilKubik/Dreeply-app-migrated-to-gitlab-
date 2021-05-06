import React, { useState } from 'react';
import SectionsItem from './SectionsItem';

const UniqueSectionManagerPage = ({ selectedProject, selectSectionPage }) => {
  const selectSection = (section, index) => {
    selectSectionPage(section, index);
  };
  console.log(selectedProject);

  return (
    <div className="mt-12">
      <div className="w-full mt-1 bg-white flex flex-col py-5 px-4 rounded-2xl">
        {selectedProject &&
          selectedProject.map((project, index) => <SectionsItem selectSection={selectSection} project={project} index={index} />)}
      </div>
    </div>
  );
};

export default UniqueSectionManagerPage;
