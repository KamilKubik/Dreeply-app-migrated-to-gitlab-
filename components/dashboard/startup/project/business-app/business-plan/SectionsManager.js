import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import SectionManagerItem from './SectionManagerItem';
import { newSectionPage, selectSectionPage } from './businessPlanUtils/sections';

const SectionsManager = ({ projectId, sections, selectedSection, setSelectedSection }) => {
  const [title, setTitle] = useState(null);
  const [addingSection, setAddingSection] = useState(false);

  const onNewSectionAdd = () => {
    setTitle(null);
    setAddingSection(!addingSection);
  };

  const updateTitle = (titleValue) => {
    setTitle(titleValue);
  };

  const onParticularSectionAdd = () => {
    newSectionPage(title, sections, setSelectedSection, projectId);
    setTitle(null);
    setAddingSection(false);
  };

  const selectSection = (section, index) => {
    selectSectionPage(section, index, setSelectedSection);
  };

  const deleteSection = (section) => {
    deleteSectionPage(section);
  };

  const handleOnDragEnd = () => {};
  console.log(sections);
  console.log(selectedSection);

  return (
    <div className="mt-12">
      <div className="w-full mt-1 bg-white flex flex-col py-5 px-4 rounded-2xl">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="sections">
            {(provided) => (
              <div className="sections" {...provided.droppableProps} ref={provided.innerRef}>
                {sections &&
                  sections.map((_section, _index) => {
                    console.log(_section);
                    return (
                      <Draggable key={_section.id} draggableId={_section.id} index={_index}>
                        {(provided) => (
                          <SectionManagerItem
                            provided={provided}
                            key={_index}
                            _section={_section}
                            _index={_index}
                            selectSection={selectSection}
                            deleteSection={deleteSection}
                          />
                        )}
                      </Draggable>
                    );
                  })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <div className="h-10 rounded-2xl flex justify-around items-center">
          <button
            onClick={onNewSectionAdd}
            className="hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary dark:text-primarydark dark:border-primarydark text-sm font-light py-2 px-6 rounded-2xl"
          >
            {addingSection ? '...whoops, cancel' : 'Add new section'}
          </button>
        </div>
        <div className="flex flex-col justify-center items-center place-content-center place-items-center">
          {addingSection ? (
            <div className="flex flex-col justify-center items-center place-content-center place-items-center">
              <input
                autoComplete="off"
                type="text"
                placeholder="Enter section title"
                onKeyUp={(e) => updateTitle(e.target.value)}
                id="section-placeholder"
                className="focus:outline-none text-primarydark bg-white pb-4 pt-4"
              ></input>
              <button
                onClick={onParticularSectionAdd}
                className="hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary dark:text-primarydark dark:border-primarydark text-sm font-light py-2 px-6 rounded-2xl"
              >
                Add new section
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SectionsManager;
