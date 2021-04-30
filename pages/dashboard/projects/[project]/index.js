import React, { useEffect, useState } from 'react';
import { db } from '../../../../lib/firebase-admin';
import { useRouter } from 'next/router';

const ProjectPage = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const router = useRouter();
  useEffect(() => {
    projects && setSelectedProject(projects[0]);
  }, [projects]);
  console.log(projects);
  if (router.isFallback) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div>
      <h2>Welcome to the project page! Project name:</h2>
      {selectedProject && <p>{selectedProject.projectName}</p>}
    </div>
  );
};

export const getStaticPaths = async () => {
  // const { projects } = await getAllProjects();
  const snapshot = await db.collection('projects').get();

  const projects = [];
  snapshot.forEach((doc) => {
    projects.push(doc.data());
  });

  const paths = projects.map((project) => ({
    params: {
      project: project.projectName.toString(),
    },
  }));

  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  // const { projects } = await getParticularProject(params.work);
  let ref = db.collection('projects').where('projectName', '==', params.project);

  const snapshot = await ref.get();
  const projects = [];

  snapshot.forEach((doc) => {
    projects.push({ id: doc.id, ...doc.data() });
  });

  return {
    props: { projects },
    revalidate: 1,
  };
};

// export const getServerSideProps = async ({ params }) => {
//   let ref = db.collection('projects').where('projectName', '==', params.project);

//   const snapshot = await ref.get();
//   const projects = [];

//   snapshot.forEach((doc) => {
//     projects.push({ id: doc.id, ...doc.data() });
//   });

//   return {
//     props: { projects },
//   };
// };

export default ProjectPage;
