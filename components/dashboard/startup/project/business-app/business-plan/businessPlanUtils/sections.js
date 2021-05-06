import Router from 'next/router';
import firebase, { db } from '../../../../../../../lib/firebase';

// Add new section
export const newSectionPage = async (title, sections, setSelectedSection, projectId) => {
  const section = {
    position: sections.length,
    title: title,
    body: '',
  };
  const newFromDB = await db
    .collection('projects')
    .doc(projectId)
    .collection('businessPlan')
    .doc(Router.query.project)
    .collection('inputs')
    .add({
      position: section.position,
      title: section.title,
      // body: section.body,
      fields: [],
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      createdAt: new Date(),
    });
  const newID = newFromDB.id;
  // await this.setState({ sections: [...this.state.sections, section] });
  const newSectionIndex = sections.indexOf(sections.filter((_section) => _section.id === newID)[0]);
  setSelectedSection(sections[newSectionIndex]);
};

// Select section
export const selectSectionPage = (section, index, setSelectedSection) => setSelectedSection(section);
