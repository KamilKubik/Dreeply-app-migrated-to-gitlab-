import React, { useEffect, useState, useRef } from 'react';
import { db } from '../../../../lib/firebase-admin';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { db as dbClient } from '../../../../lib/firebase';
import { useAuth } from '../../../../lib/newAuth';
import NavbarTemplate from '../../../../components/dashboard/NavbarTemplate';
import TippyMonster from '../../../../components/dashboard/Tippy';
// import ProjectNav from '../../../../components/dashboard/startup/project/ProjectNav';
import { isMobile } from 'react-device-detect';
import MobilePrevent from '../../../../components/MobilePrevent';
import BounceLoaderComponent from '../../../../components/BounceLoader';
import UsersManager from '../../../../components/dashboard/startup/project/business-app/UsersManager';

const ProjectPage = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef();
  const { currentUser } = useAuth();
  const router = useRouter();
  useEffect(() => {
    const uid = Cookies.get('uid');
    const filteredArray = projects && projects.filter((project) => project.uid == uid);
    console.log(filteredArray);
    filteredArray && filteredArray.length == 1 && setSelectedProject(filteredArray[0]);
  }, [projects]);

  // STARTUP IDEA CREATE
  const onStartupIdeaCreate = async () => {
    if (selectedProject && selectedProject.isIdeaPlanCreated) {
      router.push(`/dashboard/projects/${router.query.project}/startup-idea/vision`);
      return;
    }
    await dbClient.collection('projects').doc(selectedProject.projectId).collection('startupIdea').doc(router.query.project).set({
      uid: currentUser.uid,
      projectId: selectedProject.projectId,
      pathName: selectedProject.projectName,
    });
    await dbClient
      .collection('projects')
      .doc(selectedProject.projectId)
      .collection('startupIdea')
      .doc(router.query.project)
      .collection('inputs')
      .doc()
      .set({
        uid: currentUser.uid,
        projectId: selectedProject.projectId,
        pathName: selectedProject.projectName,
        filledSection: false,
        filledSection1: false,
        filledSection2: false,
        filledSection3: false,
        filledSection4: false,
        marketProblemSectionData: 'blank',
        marketSolutionSectionData: 'blank',
        foundersSectionData: 'blank',
        productOverviewSectionData: 'blank',
        productPromotionSectionData: 'blank',
        productBenefitsSectionData: 'blank',
        marketOverviewSectionData: 'blank',
        competitorsSectionData: 'blank',
        targetCustomersSectionData: 'blank',
        competitionDistinguishSectionData: 'blank',
        startupCostsSectionData: 'blank',
        runningCostsSectionData: 'blank',
        financingSectionData: 'blank',
        businessModelOverviewSectionData: 'blank',
        businessGrowSectionData: 'blank',
        whySuccessSectionData: 'blank',
      });
    await dbClient.collection('projects').doc(selectedProject.projectId).update({ isIdeaPlanCreated: true });
    router.push(`/dashboard/projects/${router.query.project}/startup-idea/vision`);
  };

  // BUSINESS PLAN CREATE
  const onBusinessPlanCreate = async () => {
    if (selectedProject && selectedProject.isBusinessPlanCreated) {
      router.push(`/dashboard/projects/${router.query.project}/business-plan`);
      return;
    }
    await dbClient.collection('projects').doc(selectedProject.projectId).collection('businessPlan').doc(router.query.project).set({
      uid: currentUser.uid,
      projectId: selectedProject.projectId,
      pathName: selectedProject.projectName,
    });
    await dbClient.collection('projects').doc(selectedProject.projectId).update({ isBusinessPlanCreated: true });
    router.push(`/dashboard/projects/${router.query.project}/business-plan`);
  };

  console.log('CURRENT PROJECT --> ', selectedProject);

  const onCashFlowAnalysisCreate = async () => {
    if (selectedProject && selectedProject.isCashflowCreated) {
      router.push(`/dashboard/projects/${router.query.project}/cash-flow`);
      return;
    }
    await dbClient
      .collection('projects')
      .doc(selectedProject.projectId)
      .collection('cashFlow')
      .doc(router.query.project)
      .collection('inputs')
      .doc()
      .set({
        uid: currentUser.uid,
        projectId: selectedProject.projectId,
        pathName: selectedProject.projectName,
        revenueElements: [],
        costsElements: [],
        budgetElements: [],
        globalStartDate: '',
        globalEndDate: '',
        periods: [],
        tax: '0',
      });
    await dbClient.collection('projects').doc(selectedProject.projectId).update({ isCashflowCreated: true });
    router.push(`/dashboard/projects/${router.query.project}/cash-flow`);
  };

  const onCompetitorsAnalysisCreate = async () => {
    if (selectedProject && selectedProject.isCompetitorsAnalysisCreated) {
      router.push(`/dashboard/projects/${router.query.project}/competitors`);
      return;
    }
    await dbClient
      .collection('projects')
      .doc(selectedProject.projectId)
      .collection('competitors')
      .doc(router.query.project)
      .collection('inputs')
      .doc()
      .set({
        uid: currentUser.uid,
        projectId: selectedProject.projectId,
        pathName: selectedProject.projectName,
        competitorsArray: [],
      });
    await dbClient.collection('projects').doc(selectedProject.projectId).update({ isCompetitorsAnalysisCreated: true });
    router.push(`/dashboard/projects/${router.query.project}/competitors`);
  };

  if (router.isFallback) {
    return <BounceLoaderComponent />;
  }

  return (
    <>
      <TippyMonster
        projectManager
        contentClass="h-40 w-80 shadow-lg rounded-2xl bg-primary flex justify-center items-center"
        contentText="We are in a space where you can manage your startup in various possible ways "
        contentText1=' For a good start, begin with "Startup idea" that will guide you through the entire process of creating a plan for your startup! '
      />
      <NavbarTemplate>
        {selectedProject ? (
          <div ref={containerRef} className="min-h-screen w-full relative flex flex-col items-center">
            <div className="w-full sm:max-w-smContainer md:max-w-mdContainer lg:max-w-lgContainer xl:max-w-xlContainer 2xl:max-w-xxlContainer normal:max-w-normalContainer relative mt-16">
              {/* <div className="w-full max-w-full relative mt-16 mb-16 px-32"> */}
              <div className="grid grid-cols-2 grid-rows-1 grid-flow-col">
                <div className="flex items-center">
                  <svg
                    height="32"
                    width="32"
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
                  <p className="text-primarydark text-2xl screenLarge:text-3xl mt-3 pl-2 dark:text-background">
                    {selectedProject && selectedProject.projectName}
                  </p>
                </div>
                <div className="flex justify-end">
                  {/* <ProjectNav /> */}
                  <button
                    onClick={() => router.push(`/dashboard/projects/${router.query.project}/edit`)}
                    className="hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-base font-light relative top-2 py-2 px-8 rounded-2xl mt-2 dark:text-primarydark dark:border-primarydark"
                  >
                    Settings
                  </button>
                </div>
              </div>
              <div>
                <h1 className="text-secondary text-md screenLarge:text-base text-gray -mt-1">This is the best startup in the tech field</h1>
              </div>
              {/* SECTION */}
              <div className="grid grid-cols-1frr screenSmall:grid-cols-2fr grid-rows-4fr screenSmall:grid-rows-2fr mt-8 gap-x-16 gap-y-16 mb-16">
                {/* SHOWUP1 */}
                <div className="rounded-2xl transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out">
                  <h1 className="text-primarydark text-lg dark:text-background">Startup idea</h1>
                  <div
                    style={{ maxHeight: 330 }}
                    className="p-6 shadow-lg mt-1 w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white dark:bg-background"
                  >
                    <img style={{ maxHeight: 140 }} height={300} width={300} src="/launch-maker.svg" />
                    <p className="text-base text-gray text-center px-4 py-4 inline-block">
                      Startup idea will guide you through the process of creating your business plan
                      {/* <img src="/project-manager/bulb.svg" height={18} width={18} className="ml-1 inline-block relative bottom-0.5" /> */}
                    </p>
                    <button
                      onClick={onStartupIdeaCreate}
                      className="hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary dark:text-primarydark dark:border-primarydark text-sm font-light py-2 px-6 rounded-2xl"
                    >
                      {selectedProject.isIdeaPlanCreated ? 'Manage your startup idea plan' : 'Create your startup idea plan'}
                    </button>
                  </div>
                </div>
                {/* SHOWUP2 */}
                <div className="rounded-2xl transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out">
                  <h1 className="text-primarydark text-lg dark:text-background">Business plan</h1>
                  <div
                    style={{ maxHeight: 330 }}
                    className="p-6 shadow-lg mt-1 w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white dark:bg-background"
                  >
                    <img style={{ maxHeight: 140 }} height={300} width={300} src="/main-sections/business-plan.svg" />
                    <p className="text-base text-gray text-center px-4 py-4">
                      Let's create your business plan, which will be the core of your startup presentation
                      {/* <img
                        src="/project-manager/business-plan.svg"
                        height={18}
                        width={18}
                        className="ml-1 inline-block relative bottom-0.5"
                      /> */}
                    </p>
                    <button
                      onClick={onBusinessPlanCreate}
                      className="hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary dark:text-primarydark dark:border-primarydark text-sm font-light py-2 px-6 rounded-2xl"
                    >
                      {selectedProject.isBusinessPlanCreated ? 'Manage your business plan' : 'Create your business plan'}
                    </button>
                  </div>
                </div>
                {/* SHOWUP3 */}
                <div className="rounded-2xl transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out">
                  <h1 className="text-primarydark text-lg dark:text-background">Cash flow analysis</h1>
                  <div
                    style={{ maxHeight: 330 }}
                    className="p-6 shadow-lg mt-1 w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white dark:bg-background"
                  >
                    <img style={{ maxHeight: 140 }} height={300} width={300} src="/main-sections/cash-flow2.svg" />
                    <h1 className=" text-base text-gray text-center px-4 py-4">
                      Cash flow analysis will allow you to analyze the liquidity of your startup
                    </h1>
                    <button
                      onClick={onCashFlowAnalysisCreate}
                      className="hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary dark:text-primarydark dark:border-primarydark text-sm font-light py-2 px-6 rounded-2xl"
                    >
                      {selectedProject.isCashflowCreated ? 'Manage your startup cash flow' : 'Create your startup cash flow'}
                    </button>
                  </div>
                </div>
                {/* SHOWUP4 */}
                <div className="rounded-2xl transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out">
                  <h1 className="text-primarydark text-lg dark:text-background">Competitors analysis</h1>
                  <div
                    style={{ maxHeight: 330 }}
                    className="p-6 shadow-lg mt-1 w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white dark:bg-background"
                  >
                    <img style={{ maxHeight: 140 }} height={300} width={300} src="/main-sections/competitors.svg" />
                    <p className="text-base text-gray text-center px-4 py-4">
                      Competitor analysis will help you better prepare to enter a given market
                    </p>
                    <button
                      onClick={onCompetitorsAnalysisCreate}
                      className="hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary dark:text-primarydark dark:border-primarydark text-sm font-light py-2 px-6 rounded-2xl"
                    >
                      {selectedProject.isCompetitorsAnalysisCreated
                        ? 'Manage your competitors analysis'
                        : 'Create your competitors analysis'}
                    </button>
                  </div>
                </div>
              </div>
              <UsersManager selectedProject={selectedProject} />
            </div>
          </div>
        ) : (
          <BounceLoaderComponent />
        )}
      </NavbarTemplate>
    </>
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
  // const uid = Cookies.get('uid');
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
