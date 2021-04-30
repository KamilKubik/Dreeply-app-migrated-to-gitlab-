// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { storage, db } from '../../../lib/firebase';
// import { useAuth } from '../../../lib/newAuth';
// import { useRouter } from 'next/router';
// import ImagesModal from './ImagesModal';
// import Router from 'next/router';

// const StartupModal = ({ setStartupPageContainerClass }) => {
//   const [projectId, setProjectId] = useState();

//   const [ideaName, setIdeaName] = useState('');
//   const [ideaDesc, setIdeaDesc] = useState('');
//   const [startupField, setStartupField] = useState('');
//   const [ideaCountry, setIdeaCountry] = useState('');
//   const [imageName, setImageName] = useState('blank');

//   const [imagesModal, setImagesModal] = useState(false);

//   const router = useRouter();

//   const { currentUser } = useAuth();
//   const [fileUrl, setFileUrl] = useState(null);

//   const [routeClass, setRouteClass] = useState(true);

//   // if (process.browser) {
//   //   window.onbeforeunload = () => {
//   //     return async () => {
//   //       setStartupPageContainerClass(false);
//   //       await db.collection('projects').doc(projectId).delete();
//   //       await db.collection('currentProject').doc(currentUser.uid).delete();
//   //     }
//   //   }
//   // }

//   const beforeunload = async () => {
//     setStartupPageContainerClass(false);
//     console.log('Im leaving');
//     await db.collection('projects').doc(projectId).delete();
//     await db.collection('currentProject').doc(currentUser.uid).delete();
//   };
//   console.log(projectId);

//   const onFileChange = async (e) => {
//     setImagesModal(false);
//     const file = e.target.files[0];
//     const storageRef = storage.ref();
//     const fileRef = storageRef.child(file.name);
//     await fileRef.put(file);
//     setFileUrl(await fileRef.getDownloadURL());
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setRouteClass(false);
//     // const username = e.target.username.value; // To jest ważny punkt, bo jeśli nie ma użytkownika, to url zdjęcia się nie zapisze!
//     // if (!username || !fileUrl) {
//     //   return;
//     // }
//     if (
//       !(fileUrl ? fileUrl : imageName) ||
//       !ideaName ||
//       !ideaDesc ||
//       !startupField ||
//       !ideaCountry
//     ) {
//       alert('You have to pass every information');
//       return;
//     }

//     const avatarExists = fileUrl ? fileUrl : 'blank';
//     const imageNameExists = imageName ? imageName : 'blank';

//     await db.collection('currentProject').doc(currentUser.uid).set(
//       {
//         projectId,
//         avatarExists,
//         ideaName,
//         ideaDesc,
//         startupField,
//         ideaCountry,
//         imageNameExists,
//       },
//       { merge: true }
//     );
//     await db.collection('projects').doc(projectId).set(
//       {
//         projectId,
//         avatarExists,
//         ideaName,
//         ideaDesc,
//         startupField,
//         ideaCountry,
//         imageNameExists,
//       },
//       { merge: true }
//     );
//     router.push('/dashboard/startup/creator/overview');
//     return;
//   };

//   useEffect(() => {
//     const getProjectId = async () => {
//       const data = await db
//         .collection('currentProject')
//         .doc(currentUser.uid)
//         .get();
//       const {
//         projectId,
//         avatarExists,
//         ideaName,
//         ideaDesc,
//         startupField,
//         ideaCountry,
//         imageNameExists,
//       } = data.data();
//       return (
//         setProjectId(projectId),
//         setFileUrl(avatarExists),
//         setIdeaName(ideaName),
//         setIdeaDesc(ideaDesc),
//         setStartupField(startupField),
//         setIdeaCountry(ideaCountry)
//         // setImageName(imageNameExists)
//       );
//     };
//     getProjectId();
//   }, [projectId]);

//   useEffect(() => {
//     if (routeClass) {
//       window.onbeforeunload = (e) => {
//         const event = e || window.e;
//         event.preventDefault();
//         if (event) { // To się odpala kiedy klikamy odśwież
//           console.log('event-', event);
//           event.returnValue = 'You have unfinished changes';
//           console.log('option1');
//           return beforeunload();
//         }
//         console.log('option2');
//         return;
//       };
//       Router.beforePopState(() => {
//         beforeunload();
//       });
//       Router.events.on('routeChangeStart', beforeunload);
//     }

//     return () => {
//       window.onbeforeunload = () => {
//         return null;
//       };
//       Router.beforePopState(() => {
//         return true;
//       });
//       Router.events.off('routeChangeStart', beforeunload);
//     };
//   }, [routeClass]);

//   const onProjectLeave = async () => {
//     setStartupPageContainerClass(false);
//     await db.collection('projects').doc(projectId).delete();
//     await db.collection('currentProject').doc(currentUser.uid).delete();
//     // if (!fileUrl || !ideaName || !ideaDesc || !startupField || !ideaCountry) {
//     //   return (
//     //     await db.collection('projects').doc(projectId).delete(),
//     //     await db.collection('currentProject').doc(currentUser.uid).delete()
//     //   );
//     // }
//     // await db.collection('currentProject').doc(currentUser.uid).delete();
//     // await db.collection('projects').doc(projectId).set(
//     //   {
//     //     projectId,
//     //     avatar: fileUrl,
//     //     ideaName,
//     //     ideaDesc,
//     //     startupField,
//     //     ideaCountry,
//     //   },
//     //   { merge: true }
//     // );
//   };

//   console.log(imageName);
//   console.log('fileUrl -', fileUrl);

//   return (
//     <>
//       {imagesModal && (
//         <ImagesModal
//           setStartupPageContainerClass={setStartupPageContainerClass}
//           projectId={projectId}
//           currentUser={currentUser}
//           onFileChange={onFileChange}
//           setImagesModal={setImagesModal}
//           setImageName={setImageName}
//         />
//       )}
//       <div className='h-screen w-full flex flex-col items-center justify-center absolute z-10 -mt-12'>
//         <div className='w-full max-w-screen-md relative pl-6 pr-6'>
//           <p className='text-primarydark text-2xl mt-2 pl-2 dark:text-background text-center'>
//             What do you have on your mind?
//           </p>
//           <p className='text-primarydark text-base mt-2 pl-2 dark:text-background text-center'>
//             Startup idea creator will help you create the initial mockup of your
//             future startup 🌱
//           </p>
//           {/* <div>
//           <h1 className='text-primarydark text-lg mt-10 -mb-6 dark:text-background'>
//             Your vision
//           </h1>
//         </div> */}
//           {/* <button onClick={onSubmit}>Upload</button> */}
//           <div className='w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white mt-8 dark:bg-background'>
//             <div className=' relative h-full w-full grid grid-cols-1fr grid-flow-col px-8 pt-8 pb-4'>
//               <div className='border-r border-primary dark:border-primarydark flex justify-center items-center p-6 z-10'>
//                 {fileUrl || imageName !== 'blank' ? (
//                   imageName == 'blank' ? (
//                     <img src={fileUrl} />
//                   ) : (
//                     <Image
//                       onClick={() => setImagesModal(true)}
//                       src={`/modal/${imageName}.svg`}
//                       height={200}
//                       width={200}
//                       className='cursor-pointer'
//                     />
//                   )
//                 ) : (
//                   <Image
//                     onClick={() => setImagesModal(true)}
//                     src='/edit-photo.svg'
//                     height={200}
//                     width={200}
//                     className='cursor-pointer'
//                   />
//                 )}
//                 {/* {imageName !== 'blank' ? <Image src={`/modal/${imageName}.svg`} height={200} width={200} /> : <Image onClick={() => setImagesModal(true)} src='/edit-photo.svg' height={200} width={200} /> } */}
//                 {/* <input
//                 type='file'
//                 id='upload-button'
//                 style={{ display: 'none' }}
//                 // onChange={onFileChange}
//               /> */}
//               </div>
//               <div className='ml-8'>
//                 <input
//                   contentEditable
//                   onChange={(e) => setIdeaName(e.target.value)}
//                   value={ideaName}
//                   className='shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl'
//                   type='text'
//                   placeholder='Name your idea'
//                 />
//                 <textarea
//                   onChange={(e) => setIdeaDesc(e.target.value)}
//                   value={ideaDesc}
//                   className='shadow appearance-none rounded pb-24 py-3 px-4 w-full text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl mt-4 mb-2 max-h-56'
//                   type='textarea'
//                   placeholder='Introduction about your idea'
//                 />
//                 <div className='flex justify-items-stretch'>
//                   <input
//                     contentEditable
//                     onChange={(e) => setStartupField(e.target.value)}
//                     value={startupField}
//                     className='shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl mr-2'
//                     type='text'
//                     placeholder='Startup field'
//                   />
//                   <input
//                     onChange={(e) => setIdeaCountry(e.target.value)}
//                     value={ideaCountry}
//                     className='shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl ml-2'
//                     type='text'
//                     placeholder='Country'
//                   />
//                 </div>
//               </div>
//             </div>
//             <hr style={{ width: '90%', color: '#a0aec0' }} />
//             <div className='w-full grid grid-cols-2fr grid-flow-column px-8 py-4'>
//               <div className='flex items-center mt-1 text-primarydark text-sm'>
//                 <Link href='/dashboard/startup'>
//                   <a onClick={onProjectLeave}>Back</a>
//                 </Link>
//               </div>
//               <div className='flex justify-end items-center'>
//                 <button
//                   onClick={(e) => onSubmit(e)}
//                   className='hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-8 rounded-2xl dark:text-primarydark dark:border-primarydark'
//                 >
//                   Start new project
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default StartupModal;
