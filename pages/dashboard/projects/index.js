import React, { useEffect, useRef, useState } from 'react';
import Cookies from 'js-cookie';
import cookie from 'cookie';
import { db } from '../../../lib/firebase';
import TippyMonster from '../../../components/dashboard/Tippy';
import NavbarTemplate from '../../../components/dashboard/NavbarTemplate';
import { useRouter } from 'next/router';
import gsap, { Power4 } from 'gsap';
import { useAuth } from '../../../lib/newAuth';
import BounceLoaderComponent from '../../../components/BounceLoader';
import EmptyStartup from '../../../components/dashboard/startup/EmptyStartup';
import StartupSuccess from '../../../components/dashboard/startup/StartupSuccess';
import MembersCode from '../../../components/dashboard/MembersCode';

const ProjectsManager = () => {
  const [projects, setProjects] = useState([]);
  useEffect(async () => {
    const projectsArray = [];
    const userUid = Cookies.get('uid');
    db.collection('projects').onSnapshot((querySnapshot) => {
      querySnapshot.docs.map((doc) => {
        const data = doc.data();
        data.projectUsers.map((user) => {
          if (user.userUid === userUid) {
            projectsArray.push(data);
          }
        });
      });
      setProjects(projectsArray);
    });
    // let ref = db.collection('projects');
    // const snapshot = await ref.get();
    // snapshot.forEach((doc) => {
    //   const data = doc.data();
    //   data.projectUsers.map((user) => {
    //     if (user.userUid === userUid) {
    //       projectsArray.push({ ...data });
    //     }
    //   });
    //   setProjects(projectsArray);
    // });
  }, []);

  console.log(projects);
  console.log(projects.length);
  const router = useRouter();
  const containerRef = useRef();
  const { currentUser } = useAuth();
  console.log(currentUser);

  const onProjectCreate = (e) => {
    e.preventDefault();
    gsap.to(containerRef.current, {
      autoAlpha: 0,
      duration: 1,
      ease: Power4.easeOut,
    });
    // setTimeout(() => {
    router.push('/dashboard/projects/new-startup');
    // }, 1200);
  };

  const [activeClass, setActiveClass] = useState(false);

  const chooseClassesClick = (index) => {
    const menuDots = document.getElementById(`menu${index}`);
    if (activeClass) {
      gsap.to(menuDots, { autoAlpha: 0 });
      setActiveClass(false);
    } else {
      gsap.to(menuDots, { autoAlpha: 1 });
      setActiveClass(true);
    }
  };
  return (
    <>
      <TippyMonster
        startups
        contentClass="h-36 w-80 shadow-lg rounded-2xl bg-primary flex justify-center items-center"
        contentText="This is a place where magical things happen "
        contentText1=" Just start creating your startup and bring your idea into reality. Once you've done that, you can manage it from the main panel. Feel free to edit, save or delete your idea"
      />
      <NavbarTemplate>
        <div ref={containerRef} className="min-h-screen w-full relative flex flex-col items-center text-primarydark">
          <div className="w-full sm:max-w-smContainer md:max-w-mdContainer lg:max-w-lgContainer xl:max-w-xlContainer 2xl:max-w-xxlContainer normal:max-w-normalContainer relative mt-12">
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
                <p className="self-end text-2xl pl-2 dark:text-background">Startups</p>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={(e) => onProjectCreate(e)}
                  className="hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-base font-light py-2 px-6 rounded-2xl dark:text-primarydark dark:border-primarydark"
                >
                  New startup
                </button>
              </div>
            </div>
            <div>
              <h1 className="text-secondary text-md text-gray">Bring your idea into reality</h1>
            </div>
            <div>
              <p className="text-lg mt-10 -mb-6 dark:text-background">Ideas you invented</p>
            </div>
            <div className="w-full grid sm:grid-cols-1 md:grid-cols-2fr lg:grid-cols-3fr 2xl:grid-cols-4fr gap-8 border-r-6 rounded-2xl bg-white mt-8 mb-8 dark:bg-background p-8 text-center">
              {projects ? (
                projects.length == 0 ? (
                  <EmptyStartup onProjectCreate={onProjectCreate} />
                ) : (
                  projects.map(({ imageName, imageFileUrl, projectName, projectDescription, projectId }, index) => {
                    return (
                      <div className="shadow rounded-2xl flex flex-wrap justify-center items-center flex-col hover:shadow-lg transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out">
                        {/* ---------------------------------- DROPDOWN START -------------------------------- */}
                        <div className="relative inline-block text-right w-4/5 top-4 right-2">
                          <img
                            onClick={() => chooseClassesClick(index)}
                            src="/dots-menu2.svg"
                            height={26}
                            width={26}
                            className="cursor-pointer"
                          />
                          <div
                            id={`menu${index}`}
                            className="origin-top-right absolute left-1/2 transform -translate-x-1/2 w-44 lg:w-48 shadow-xl bg-white focus:outline-none invisible rounded-2xl"
                          >
                            <div className="pt-1 text-left">
                              <div className="transition duration-500 ease-in-out flex items-center justify-between hover:bg-primary">
                                <a
                                  //   onClick={(e) => onProjectEdit(e, image)}
                                  href="#"
                                  className="block px-4 py-2 2xl:py-3 text-sm text-primarydark transition duration-500 ease-in-out hover:text-background"
                                >
                                  Edit
                                </a>
                                <p className="mr-3 flex justify-center items-center relative bottom-1">
                                  <img src="/gifs/whale.gif" height={30} width={30} />
                                </p>
                              </div>
                              <div className="transition duration-500 ease-in-out flex items-center justify-between hover:bg-primary rounded-bl-2xl rounded-br-2xl">
                                <a
                                  //   onClick={(e) => onProjectDelete(e, image.projectId)}
                                  href="#"
                                  className="block px-4 py-2 2xl:py-3 text-sm text-primarydark transition duration-500 ease-in-out hover:text-background"
                                >
                                  Remove
                                </a>
                                <p className="mr-3 flex justify-center items-center relative bottom-1">
                                  <img src="/gifs/bomb.gif" height={30} width={30} />
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <img
                          src={imageFileUrl == null ? `/modal/${imageName}.svg` : imageFileUrl}
                          className=" h-40 w-40 p-4 border-b border-primary"
                        />
                        <div style={{ height: 180 }} className=" overflow-scroll mt-2">
                          <input className="bg-white text-center" value={projectName} />
                          <p className="text-center mt-1 text-sm text-gray">{projectDescription}</p>
                        </div>
                      </div>
                    );
                  })
                )
              ) : (
                <BounceLoaderComponent />
              )}
            </div>
            <MembersCode />
          </div>
        </div>
      </NavbarTemplate>
    </>
  );
};

// export const getServerSideProps = async (context) => {
//   const cookies = await context.req.headers.cookie;
//   const parsedCookies = cookie.parse(cookies);
//   const projects = [];
//   let ref = db.collection('projects');

//   const snapshot = await ref.get();

//   snapshot.forEach((doc) => {
//     const data = doc.data();
//     data.projectUsers.map((user) => {
//       if (user.userUid === parsedCookies.uid) {
//         projects.push({ ...data });
//       }
//     });
//   });
//   return {
//     props: { projects },
//   };
// };

export default ProjectsManager;
