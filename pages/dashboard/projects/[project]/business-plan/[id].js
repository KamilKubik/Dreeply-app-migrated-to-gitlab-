import React, { useEffect, useState, useRef } from 'react';
import { db } from '../../../../../lib/firebase-admin';
import { db as dbClient } from '../../../../../lib/firebase';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
const safeJsonStringify = require('safe-json-stringify');
import Sections from '../../../../../components/dashboard/startup/project/business-app/business-plan/unique/Sections';
import SectionEditor from '../../../../../components/dashboard/startup/project/business-app/business-plan/unique/SectionEditor';

const UniqueBusinessPlanPage = ({ project }) => {
  console.log('Particular project --> ', project);
  // useEffect(() => {
  //   project && setSelectedProject(project[0]);
  // }, [project]);
  // const [selectedProject, setSelectedProject] = useState(null);
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  const [selectedSection, setSelectedSection] = useState(project[0]);

  const selectSectionPage = (section, index) => setSelectedSection(section);

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center">
      <div className="w-full max-w-full relative mt-16 px-8 screenSmall:px-32 text-primarydark">
        <div className="grid grid-cols-2 grid-rows-1 grid-flow-col">
          <div className="flex items-center">
            <svg
              height="30"
              width="30"
              className="fill-current text-primary dark:text-primarydark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
            >
              <title>Landing Success</title>
              <g id="Landing_Success" data-name="Landing Success">
                <path
                  className="cls-1"
                  d="M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z"
                />
              </g>
            </svg>
            <p className="text-primarydark text-2xl screenLarge:text-3xl mt-2 pl-2 dark:text-background">Business plan</p>
          </div>
        </div>
        <div>
          <h1 className="text-secondary text-md screenLarge:text-base text-gray">Insight into a detailed business plan</h1>
        </div>
        {/* SECTIONS */}
        <div className="grid grid-cols-businessSmall screenSmall:grid-cols-business screenMedium:grid-cols-businessMedium grid-flow-col gap-x-8">
          <div className="w-full h-maxcontent mt-12 pb-20">
            {selectedSection ? (
              <SectionEditor selectedSection={selectedSection} />
            ) : (
              <div className="w-full bg-white rounded-2xl p-8 flex justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  <img src="/empty-business-plan/empty1.svg" height={300} width={300} />
                  <p className="mt-4">Start creating your business plan by adding a new section!</p>
                </div>
              </div>
            )}
          </div>
          <Sections selectSectionPage={selectSectionPage} selectedProject={project} />
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const snapshot = await db.collection('projects').get();

  const projects = [];
  snapshot.forEach((doc) => {
    projects.push(doc.data());
  });

  const paths = projects.map((project) => ({
    params: {
      project: project.projectName.toString(),
      id: project.projectId.toString(),
    },
  }));

  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  console.log(params);
  let ref = db.collection('projects').doc(params.id).collection('businessPlan').doc(params.project).collection('inputs');
  //   const project = await ref.get();
  //   project.docs.forEach((doc) => {
  //   })

  const snapshot = await ref.get();
  const project = [];

  snapshot.docs.forEach((doc) => {
    const data = JSON.parse(safeJsonStringify(doc.data()));
    project.push({ ...data });
  });

  return {
    props: { project },
    revalidate: 1,
  };
};

export default UniqueBusinessPlanPage;
