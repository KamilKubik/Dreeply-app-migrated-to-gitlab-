import React, { useEffect, useState, createContext, useRef, useMemo } from 'react';
import NavbarTemplate from '../../components/dashboard/NavbarTemplate';

import { db } from '../../lib/firebase';
import { useAuth } from '../../lib/newAuth';
import { useRouter } from 'next/router';
import EmptyStartup from '../../components/dashboard/startup/EmptyStartup';
import Link from 'next/link';
import gsap, { Power4 } from 'gsap';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

import useSWR, { mutate } from 'swr';
// import { getAllProjects } from '../../lib/db';

import styled from 'styled-components';
import Tippy from '@tippyjs/react';
import TippyMonster from '../../components/dashboard/Tippy';

// PDF
import { saveAs } from 'file-saver';
import MyDocument1 from '../../components/dashboard/startup/PDFDocument';
import { pdf } from '@react-pdf/renderer';

import { deleteProject } from '../../lib/db';
import { format, getISODay, parseISO } from 'date-fns';

import fetcher from '../../utils/fetcher';
import StartupSkeleton from '../../components/dashboard/startup/StartupSkeleton';

const DivComponent = styled.div`
  position: relative;
  z-index: 2;
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  ::after {
    content: '';
    background-color: ${(props) => (props.filledSection ? '#0aff00' : '#fc573b')};
    height: 1px;
    width: 150%;
    display: block;
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
  @media (min-width: 1800px) {
    ::after {
      width: 225%;
    }
  }
`;

const DivComponent1 = styled.div`
  position: relative;
  z-index: 2;
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  ::after {
    content: '';
    background-color: ${(props) => (props.filledSection1 ? '#0aff00' : '#fc573b')};
    height: 1px;
    width: 150%;
    display: block;
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
  @media (min-width: 1800px) {
    ::after {
      width: 225%;
    }
  }
`;

const DivComponent2 = styled.div`
  position: relative;
  z-index: 2;
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  ::after {
    content: '';
    background-color: ${(props) => (props.filledSection2 ? '#0aff00' : '#fc573b')};
    height: 1px;
    width: 150%;
    display: block;
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
  @media (min-width: 1800px) {
    ::after {
      width: 225%;
    }
  }
`;

const DivComponent3 = styled.div`
  position: relative;
  z-index: 2;
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  ::after {
    content: '';
    background-color: ${(props) => (props.filledSection3 ? '#0aff00' : '#fc573b')};
    height: 1px;
    width: 150%;
    display: block;
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
  @media (min-width: 1800px) {
    ::after {
      width: 225%;
    }
  }
`;

const DivComponent4 = styled.div`
  position: relative;
  z-index: 2;
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  ::after {
    content: '';
    background-color: ${(props) => (props.filledSection4 ? '#0aff00' : '#fc573b')};
    height: 1px;
    width: 150%;
    display: block;
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
  @media (min-width: 1800px) {
    ::after {
      width: 225%;
    }
  }
`;

export const DataContext = createContext();

const StartupPage = () => {
  // const { projectser } = getAllProjects();
  // if (projectser) {
  //   console.log(projectser);
  // }

  const { currentUser } = useAuth();
  const [projects, setProjects] = useState();

  const router = useRouter();

  const containerRef = useRef();
  const tippyRef = useRef();

  const [visible, setVisible] = useState(false);
  const show = () => {
    gsap.fromTo(tippyRef.current, { autoAlpha: 0, scale: 0 }, { autoAlpha: 1, scale: 1, duration: 1, ease: Power4.easeOut });
    setVisible(true);
  };
  const hide = async () => {
    await gsap.to(tippyRef.current, {
      autoAlpha: 0,
      scale: 0,
      duration: 1,
      ease: Power4.easeIn,
    });
    setVisible(false);
  };

  useEffect(() => {
    // gsap.fromTo(projectRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 5, ease: Power4.easeIn })
    // GSAP

    gsap.fromTo(containerRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 2, ease: Power4.easeOut });
    // TIPPY
    setVisible(true);

    // const deleteCurrentProject = async () => {
    //   await db.collection('currentProject').doc.delete();
    // };
    // deleteCurrentProject();

    const fetchProjects = async () => {
      const userProjects = await db.collection('projects').where('uid', '==', currentUser.uid).get();
      const arrays = [];
      userProjects.docs.map((doc) => {
        if (doc.data().uid == currentUser.uid) {
          return arrays.push(doc.data()), setProjectsArray(doc.data());
        }
        return;
      });
      setProjects(arrays);
    };
    fetchProjects();
  }, []);

  // const onProjectCreate = (e) => {
  //   e.preventDefault();
  //   gsap.to(containerRef.current, {
  //     autoAlpha: 0,
  //     duration: 1,
  //     ease: Power4.easeOut,
  //   });
  //   setTimeout(() => {
  //     router.push('/dashboard/startup/creator');
  //   }, 1200);
  // };

  const onProjectCreate = (e) => {
    e.preventDefault();
    gsap.to(containerRef.current, {
      autoAlpha: 0,
      duration: 1,
      ease: Power4.easeOut,
    });
    // const projectName = uuidv4();
    // const newProject = {
    //   projectName: '',
    //   projectDescription: '',
    //   projectField: '',
    //   projectCountry: '',
    //   projectEmail: '',
    //   projectNumber: '',
    //   projectImage: '',
    //   createdAt: new Date().toISOString(),
    //   projectId: projectName,
    //   uid: currentUser.uid,
    // };
    // await db.collection('projects').doc(projectName).set(newProject);

    setTimeout(() => {
      router.push('/dashboard/project/new-startup');
    }, 1200);
  };

  const [projectsArray, setProjectsArray] = useState();

  const onProjectEdit = async (e, currentProject) => {
    e.preventDefault();
    await db
      .collection('currentProject')
      .doc(currentUser.uid)
      .set({ projectId: currentProject.projectId, ...currentProject });
    router.push('/dashboard/project/creator/overview');
  };
  console.log(projects);

  const [activeClass, setActiveClass] = useState(false);

  const classRef = useRef(null);
  const projectRef = useRef(null);
  // MAGIC
  const classArrayref = useRef([]);
  classArrayref.current = [];

  const chooseClasses = (el) => {
    if (el && !classArrayref.current.includes(el)) {
      classArrayref.current.push(el);
    }
    console.log(classArrayref.current);
  };

  const chooseClassesClick = (projectId) => {
    // console.log('CURRENT - ', classArrayref.current.find(project => project.id == number.toString()));
    // console.log('CURRENT NUMBER - ', number);
    console.log(
      'CURRENT - ',
      classArrayref.current.find((project) => project.id == projectId)
    );
    console.log('CURRENT PROJECT - ', projectId);
    if (activeClass) {
      gsap.to(
        classArrayref.current.find((project) => project.id == projectId),
        { autoAlpha: 0 }
      );
      setActiveClass(false);
    } else {
      gsap.to(
        classArrayref.current.find((project) => project.id == projectId),
        { autoAlpha: 1 }
      );
      setActiveClass(true);
    }
  };

  const compare = (date1, date2) => {
    const dateOne = date1.createdAt;
    const dateTwo = date2.createdAt;
    return new Date(date2.createdAt) - new Date(date1.createdAt);
  };

  if (projects) {
    projects.sort(compare);
    console.log(projects);
  }

  // PROJECTS FETCHER FROM API
  console.log(currentUser);

  const [datas, setData] = useState();

  // const fetching = () => {
  //   // const v = useMemo(() => currentUser.token);
  //   // const { data } = useMemo(() => useSWR(currentUser ? ['/api/projects', currentUser.token] : null, fetcher));
  //   // console.log('v - ', data)

  //   // const { data } = useSWR(
  //   //   currentUser ? ['/api/projects', currentUser.token] : null,
  //   //   fetcher, {
  //   //     revalidateOnFocus: false,
  //   //     // revalidateOnMount:false,
  //   //     // loadingTimeout: 3000,
  //   //     // onSuccess: () => {setData(data)},
  //   //     isPaused: () => true,}
  //   // );

  //   const { data } = useSWR(currentUser ? ['/api/projects', currentUser.token] : null,
  //     fetcher,)
  //   console.log('lets try...', data);

  //   // if (data) {
  //   //   const projectss = [];
  //   //   data.snapshot.forEach((doc) => {
  //   //     projectss.push({ id: doc.id, ...doc.data() });
  //   //   });
  //   //   console.log(projectss);
  //   // }
  // }

  // fetching();

  const [specialData, setSpecialData] = useState();

  const doingMyBest = () => {
    const { data } = useSWR(currentUser ? ['/api/projects', currentUser.token] : null, fetcher);
    useMemo(() => data && setSpecialData(data), [data]); // ZMIENIAMY DATA, TYLKO JEŚLI SĄ PROJEKTY. Problem był taki, że te projekty raz były, a raz ich nie było. Teraz będą zawsze, bo zmieniają się tylko wtedy, kiedy istnieją!
  };

  doingMyBest();

  // console.log('OFFICIAL: ', data);
  console.log('OFFICIAL11: ', specialData);

  const fn = () => {
    if (datas) {
      // DATA (PROJECTS) SORT BY DATE
      datas.projects.sort(compare);
    }
  };

  fn();

  const onProjectDelete = (e, projectId) => {
    // e.preventDefault();
    deleteProject(projectId);
    mutate(
      ['/api/projects', currentUser.token],
      async (data) => {
        return {
          projects: data.projects.filter((project) => project.projectId !== projectId),
        };
      },
      false
    );
    // mutate(['/api/projects', currentUser.token]);
  };

  console.log('PROJECTS - ', datas);
  console.log('PROJECTS MAIN - ', projects);

  return (
    <>
      <TippyMonster
        startups
        contentClass="h-36 w-80 shadow-lg rounded-2xl bg-primary flex justify-center items-center"
        contentText="This is a place where magical things happen "
        contentText1=" Just start creating your startup and bring your idea into reality. Once you've done that, you can manage it from the main panel. Feel free to edit, save or delete your idea"
      />
      <NavbarTemplate>
        <div ref={containerRef} className="min-h-screen w-full relative flex flex-col items-center">
          <div className="w-full sm:max-w-smContainer md:max-w-mdContainer lg:max-w-lgContainer xl:max-w-xlContainer 2xl:max-w-xxlContainer normal:max-w-normalContainer relative mt-16">
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
                <p className="text-primarydark text-2xl mt-2 pl-2 dark:text-background">Startups</p>
              </div>
              <div className="flex justify-end mt-2">
                <button
                  onClick={(e) => onProjectCreate(e)}
                  className="hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-6 rounded-2xl mt-2 dark:text-primarydark dark:border-primarydark"
                >
                  New startup
                </button>
              </div>
            </div>
            <div>
              <h1 className="text-secondary text-md text-gray">Bring your idea into reality</h1>
            </div>
            <div>
              <h1 className="text-primarydark text-lg mt-10 -mb-6 dark:text-background">Ideas you invented</h1>
            </div>
            {/* <StartupSkeleton /> */}
            {!specialData ? (
              <StartupSkeleton />
            ) : specialData.projects[0] ? (
              <div className="w-full grid sm:grid-cols-1 md:grid-cols-2fr lg:grid-cols-3fr 2xl:grid-cols-4fr gap-8 border-r-6 rounded-2xl bg-white mt-8 mb-8 dark:bg-background p-8 text-center">
                {specialData &&
                  specialData.projects.map((image) => {
                    console.log('TEST - ', image.projectId);
                    const data = {
                      ideaName: image.ideaName,
                      ideaDesc: image.ideaDesc,
                      ideaCountry: image.ideaCountry,
                      startupField: image.startupField,
                      startupEmail: image.startupEmail,
                      startupPhone: image.startupPhone,
                      imageNameExists: image.imageNameExists,
                      avatarExists: image.avatarExists,
                      marketProblemSection: image.marketProblemSectionData,
                      marketSolutionSection: image.marketSolutionSectionData,
                      foundersSection: image.foundersSectionData,
                      productOverviewSection: image.productOverviewSectionData,
                      productPromotionSection: image.productPromotionSectionData,
                      productBenefitsSection: image.productBenefitsSectionData,
                      marketOverviewSection: image.marketOverviewSectionData,
                      competitorsSection: image.competitorsSectionData,
                      targetCustomersSection: image.targetCustomersSectionData,
                      competitionDistinguishSection: image.competitionDistinguishSectionData,
                      startupCostsSection: image.startupCostsSectionData,
                      runningCostsSection: image.runningCostsSectionData,
                      financingSection: image.financingSectionData,
                      businessModelOverviewSection: image.businessModelOverviewSectionData,
                      businessGrowSection: image.businessGrowSectionData,
                      whySuccessSection: image.whySuccessSectionData,
                    };

                    return (
                      <div
                        key={image.projectId}
                        className="shadow rounded-2xl flex flex-wrap justify-center items-center flex-col hover:shadow-lg transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out"
                      >
                        {/* ---------------------------------- DROPDOWN START -------------------------------- */}
                        <div className="relative inline-block text-right w-4/5 top-2">
                          <Image
                            onClick={() => chooseClassesClick(image.projectId)}
                            src="/dots-menu2.svg"
                            height={25}
                            width={25}
                            className="cursor-pointer"
                          />
                          <div
                            ref={chooseClasses}
                            id={image.projectId}
                            className="origin-top-right absolute left-1/2 transform -translate-x-1/2 w-44 lg:w-48 rounded-md shadow-xl bg-white focus:outline-none invisible rounded-2xl"
                            // role='menu'
                            // aria-orientation='vertical'
                            // aria-labelledby='options-menu'
                          >
                            <div className="pt-1 text-left">
                              <div className="transition duration-500 ease-in-out flex items-center justify-between hover:bg-primary rounded-tl-2xl rounded-tr-2xl">
                                <a
                                  onClick={async (e) => {
                                    e.preventDefault();
                                    const doc = <MyDocument1 data={data} />;
                                    const asPdf = pdf([]); // {} is important, throws without an argument
                                    asPdf.updateContainer(doc);
                                    const blob = await asPdf.toBlob();
                                    saveAs(blob, `${image.ideaName}.pdf`);
                                  }}
                                  href="#"
                                  className="block px-4 py-2 2xl:py-3 text-sm text-primarydark transition duration-500 ease-in-out hover:text-background"
                                  // role='menuitem'
                                >
                                  Save / Share
                                </a>
                                <p className="mr-3 flex justify-center items-center">
                                  <Image src="/gifs/rocket.gif" height={30} width={30} />
                                </p>
                              </div>
                              <div className="transition duration-500 ease-in-out flex items-center justify-between hover:bg-primary">
                                <a
                                  onClick={(e) => onProjectEdit(e, image)}
                                  href="#"
                                  className="block px-4 py-2 2xl:py-3 text-sm text-primarydark transition duration-500 ease-in-out hover:text-background"
                                  // role='menuitem'
                                >
                                  Edit
                                </a>
                                <p className="mr-3 flex justify-center items-center relative bottom-1">
                                  <Image src="/gifs/whale.gif" height={30} width={30} />
                                </p>
                              </div>
                              <div className="transition duration-500 ease-in-out flex items-center justify-between hover:bg-primary rounded-bl-2xl rounded-br-2xl">
                                <a
                                  onClick={(e) => onProjectDelete(e, image.projectId)}
                                  href="#"
                                  className="block px-4 py-2 2xl:py-3 text-sm text-primarydark transition duration-500 ease-in-out hover:text-background"
                                  // role='menuitem'
                                >
                                  Remove
                                </a>
                                <p className="mr-3 flex justify-center items-center relative bottom-1">
                                  <Image src="/gifs/bomb.gif" height={30} width={30} />
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ---------------------------------- DROPDOWN END -------------------------------- */}
                        <img
                          src={image.avatarExists == 'blank' ? `/modal/${image.imageNameExists}.svg` : image.avatarExists}
                          className=" h-40 w-40 p-4 border-b border-primary"
                        />
                        <div className="mb-4">
                          <p className="text-primarydark text-sm mt-2 px-4 mt-2">{image.ideaName}</p>
                          <p className="text-primarydark text-xs text-gray px-4">{image.startupField}</p>
                        </div>
                        <div className="flex w-3/4 justify-between items-center -mt-4">
                          <p className="text-xs text-primarydark">Vision</p>
                          <DivComponent filledSection={image.filledSection}>
                            <Image src={`/progress/${image.filledSection ? 'check' : 'remove'}.svg`} height={26} width={26} />
                          </DivComponent>
                        </div>
                        <div className="flex w-3/4 justify-between items-center -mt-4">
                          <p className="text-xs text-primarydark">Product</p>
                          <DivComponent1 filledSection1={image.filledSection1}>
                            <Image src={`/progress/${image.filledSection1 ? 'check' : 'remove'}.svg`} height={26} width={26} />
                          </DivComponent1>
                        </div>
                        <div className="flex w-3/4 justify-between items-center -mt-4">
                          <p className="text-xs text-primarydark">Market</p>
                          <DivComponent2 filledSection2={image.filledSection2}>
                            <Image src={`/progress/${image.filledSection2 ? 'check' : 'remove'}.svg`} height={26} width={26} />
                          </DivComponent2>
                        </div>
                        <div className="flex w-3/4 justify-between items-center -mt-4">
                          <p className="text-xs text-primarydark">Finances</p>
                          <DivComponent3 filledSection3={image.filledSection3}>
                            <Image src={`/progress/${image.filledSection3 ? 'check' : 'remove'}.svg`} height={26} width={26} />
                          </DivComponent3>
                        </div>
                        <div className="flex w-3/4 justify-between items-center -mt-4">
                          <p className="text-xs text-primarydark">Model</p>
                          <DivComponent4 filledSection4={image.filledSection4}>
                            <Image src={`/progress/${image.filledSection4 ? 'check' : 'remove'}.svg`} height={26} width={26} />
                          </DivComponent4>
                        </div>
                        <p className="text-primarydark text-xs text-gray px-4 pb-2">{format(parseISO(image.createdAt), 'PPP')}</p>
                      </div>
                    );
                  })}
              </div>
            ) : (
              <EmptyStartup onProjectCreate={onProjectCreate} />
            )}
          </div>
        </div>
      </NavbarTemplate>
    </>
  );
};

export default StartupPage;
