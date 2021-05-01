import React, { Component, useEffect, useState, useMemo } from 'react';
import SectionManagerItem from './SectionManagerItem';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const SectionManager = ({ selectedSection, reorderSections, field, selectSectionPage, deleteSectionPage, newSectionPage, sections, selectedSectionIndex }) => {
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
    newSectionPage(title);
    setTitle(null);
    setAddingSection(false);
  };

  const selectSection = (section, index) => {
    selectSectionPage(section, index);
    console.log('select section');
  };

  const deleteSection = (section) => {
    deleteSectionPage(section);
    console.log('delete section');
  };

  // Problem występuje przy zmianie sekcji. Dane, które wprowadzimy w danej sekcji, przy zmianie na inną, a później przy powrocie, zostają usunięte z firebase'a
  useEffect(() => {
    console.log('SECTIONS --> ', sections);
    console.log('SECTIONS ARRAY --> ', sectionsArray);
    if (!sectionsArray && sections) {
      console.log('Its running...');
      setSectionsArray(sections);
      return;
    }
  }, [sections])

  useEffect(() => {
    if (sections && sectionsArray) {
      if (sections.length !== sectionsArray.length) {
        console.log('Is this running twice?');
        console.log(sections);
        console.log(sectionsArray);
        setSectionsArray(sections);

        console.log(sections);
      }
    }
  }, [sections])

  const [sectionsArray, setSectionsArray] = useState();

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(sectionsArray);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    console.log(result);
    setSectionsArray(items);
    reorderSections(items);
  }

  return (
    <div className='col-start-7 col-end-9 mt-12'>
      {/* <h1 className='ml-4 text-primarydark text-base dark:text-background'>
        Manage your sections
      </h1> */}
      <div className='w-full ml-4 mt-1 bg-white flex flex-col py-5 px-4 rounded-2xl'>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='sections'>
          {(provided) => (
            <div className='sections' {...provided.droppableProps} ref={provided.innerRef}>
              {sectionsArray &&
                sectionsArray.map((_section, _index) => {
                  console.log(_section);
                  return (
                    <Draggable key={_section.id} draggableId={_section.id} index={_index}>
                      {(provided) => (
                        <SectionManagerItem
                          provided={provided}
                          key={_index}
                          _section={_section}
                          _index={_index}
                          selectedSectionIndex={selectedSectionIndex}
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
        <div className='h-10 rounded-2xl flex justify-around items-center'>
          <button
            onClick={onNewSectionAdd}
            className='hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary dark:text-primarydark dark:border-primarydark text-sm font-light py-2 px-6 rounded-2xl'
          >
            {addingSection ? '...whoops, cancel' : 'Add new section'}
          </button>
        </div>
        <div className='flex flex-col justify-center items-center place-content-center place-items-center'>
          {addingSection ? (
            <div className='flex flex-col justify-center items-center place-content-center place-items-center'>
              <input
                autoComplete='off'
                type='text'
                placeholder='Enter section title'
                onKeyUp={(e) => updateTitle(e.target.value)}
                id='section-placeholder'
                className='focus:outline-none text-primarydark bg-white pb-4 pt-4'
              ></input>
              <button
                onClick={onParticularSectionAdd}
                className='hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary dark:text-primarydark dark:border-primarydark text-sm font-light py-2 px-6 rounded-2xl'
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

export default SectionManager;

// Class based component
// class SectionManager extends Component {
//   constructor() {
//     super();
//     this.state = {
//       addingSection: false,
//       title: null
//     };
//   }
//   render() {

//     const { sections, selectedSectionIndex } = this.props;

//     if(notes) {
//       return(
//         <div className={classes.sidebarContainer}>
//           <Button
//             onClick={this.newNoteBtnClick}
//             className={classes.newNoteBtn}>{this.state.addingNote ? 'Cancel' : 'New Note'}</Button>
//             {
//               this.state.addingNote ? 
//               <div>
//                 <input type='text'
//                   className={classes.newNoteInput}
//                   placeholder='Enter note title'
//                   onKeyUp={(e) => this.updateTitle(e.target.value)}>
//                 </input>
//                 <Button 
//                   className={classes.newNoteSubmitBtn}
//                   onClick={this.newNote}>Submit Note</Button>
//               </div> :
//               null
//             }
//             <List>
//               {
//                 notes.map((_note, _index) => {
//                   return(
//                     <div key={_index}>
//                       <SidebarItemComponent
//                         _note={_note}
//                         _index={_index}
//                         selectedNoteIndex={selectedNoteIndex}
//                         selectNote={this.selectNote}
//                         deleteNote={this.deleteNote}>
//                       </SidebarItemComponent>
//                       <Divider></Divider>
//                     </div>
//                   )
//                 })
//               }
//             </List>
//         </div>
//       );
//     } else {
//       return(<div></div>);
//     }
//   }

//   newNoteBtnClick = () => {
//     this.setState({ title: null, addingNote: !this.state.addingNote });
//   }
//   updateTitle = (txt) => {
//     this.setState({ title: txt });
//   }
//   newNote = () => {
//     this.props.newNote(this.state.title);
//     this.setState({ title: null, addingNote: false });
//   }
//   selectNote = (n, i) => this.props.selectNote(n, i);
//   deleteNote = (note) => this.props.deleteNote(note);

// }

// export default SectionManager;
