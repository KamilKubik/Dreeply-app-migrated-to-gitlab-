import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import gsap, { Linear } from 'gsap';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from '../../../lib/newAuth';
import { db } from '../../../lib/firebase';
import NavbarTemplate from '../../../components/dashboard/NavbarTemplate';
import { CountryDropdown } from 'react-country-region-selector';
import ImagesModal from '../../../components/dashboard/startup/ImagesModal';
import Image from 'next/image';
import Link from 'next/link';

const newStartupPage = () => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectField, setProjectField] = useState('');
  const [projectCountry, setProjectCountry] = useState('');
  const [projectEmail, setProjectEmail] = useState('');
  const [projectNumber, setProjectNumber] = useState('');
  const [projectImage, setProjectImage] = useState('');
  const [imageName, setImageName] = useState('blank');

  const [imagesModal, setImagesModal] = useState(false);
  const [fileUrl, setFileUrl] = useState(null);

  const router = useRouter();
  const { currentUser } = useAuth();

  const [projects, setProjects] = useState();
  useEffect(async () => {
    const userProjects = await db.collection('projects').where('uid', '==', currentUser.uid).get();
    const arrays = [];
    userProjects.docs.map((doc) => {
      if (doc.data().uid == currentUser.uid) {
        return arrays.push(doc.data());
      }
      return;
    });
    setProjects(arrays);
  }, []);

  const onProjectCreate = async (e) => {
    projects.map((project) => {
      if (project.projectName == projectName) {
        alert('This name already exists');
        return;
      }
    });
    e.preventDefault();
    // NEW PROJECT
    const projectId = uuidv4();
    const newProject = {
      projectName: projectName,
      projectDescription: projectDescription,
      projectField: projectField,
      projectCountry: projectCountry,
      projectEmail: projectEmail,
      projectNumber: projectNumber,
      imageName,
      imageFileUrl: fileUrl,
      createdAt: new Date().toISOString(),
      projectId: projectId,
      uid: currentUser.uid,
      isIdeaPlanCreated: false,
      isBusinessPlanCreated: false,
      isCashflowCreated: false,
      isCompetitorsAnalysisCreated: false,
      isMembersManagerCreated: false,
    };
    await db.collection('projects').doc(projectId).set(newProject);
    // await db.collection('currentProject').doc(currentUser.uid).set(newProject);

    // router.push(`/dashboard/works/${projectName}`);
  };

  const onFileChange = async (e) => {
    if (imageName && fileUrl) {
      setImageName('blank');
    }
    setImagesModal(false);
    const file = e.target.files[0];
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const browseImageOpen = () => {
    setImagesModal(true);
    setImageName('blank');
  };

  return (
    <>
      {imagesModal && (
        <ImagesModal currentUser={currentUser} onFileChange={onFileChange} setImagesModal={setImagesModal} setImageName={setImageName} />
      )}
      <NavbarTemplate>
        <div className="min-h-screen w-full max-w-full relative px-32 py-16 flex items-center flex-col">
          <div className="z-10 p-10 h-auto grid grid-cols-1 grid-rows-3 w-auto max-w-nameContainer w-full bg-white rounded-3xl">
            <div className="row-span-1 text-center">
              <div className="text-2xl font-medium flex items-center justify-center">
                <Image src="/project-create/rocket.svg" height={36} width={36} className="inline-block relative bottom-2" />
                <p className="ml-2 text-primarydark">Let's create your startup!</p>
              </div>
              <div className="text-base text-gray px-4">Oops, one more tiny step and we will get down to business.</div>
            </div>
            <div className="row-span-2">
              {/* <form onSubmit={onNewProjectCreate} className="z-50 px-4 pt-2 rounded-2xl mt-4"> */}
              <div className="z-50 px-4 pt-2 rounded-2xl mt-4">
                <div className="mb-4">
                  <input
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    id="startup-name"
                    className="border border-background focus:border-primary shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl mr-2"
                    type="startup-name"
                    placeholder="startup name"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    id="startup-description"
                    style={{ maxHeight: 160 }}
                    className="border border-background focus:border-primary shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl mr-2 pb-12"
                    type="startup-description"
                    placeholder="startup description"
                  />
                </div>
                <div className="mb-4">
                  <div className="flex justify-items-stretch">
                    <input
                      value={projectField}
                      onChange={(e) => setProjectField(e.target.value)}
                      autoComplete="none"
                      className="border border-background focus:border-primary shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl mr-2"
                      type="text"
                      placeholder="Startup field"
                    />
                    <CountryDropdown
                      value={projectCountry}
                      onChange={(country) => setProjectCountry(country)}
                      id="test"
                      defaultOptionLabel="Country"
                      className={`${
                        projectCountry ? 'text-primarydark' : 'text-placeholder'
                      } border border-background focus:border-primary shadow appearance-none rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl ml-2`}
                    />
                  </div>
                  <div className="flex justify-items-stretch mt-4">
                    <input
                      value={projectEmail}
                      onChange={(e) => setProjectEmail(e.target.value)}
                      autoComplete="none"
                      className="border border-background focus:border-primary shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl mr-2"
                      type="text"
                      placeholder="E-mail"
                    />
                    <input
                      value={projectNumber}
                      onChange={(e) => setProjectNumber(e.target.value)}
                      autoComplete="none"
                      className="border border-background focus:border-primary shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl ml-2"
                      type="text"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center p-6 z-10">
                  {fileUrl || imageName !== 'blank' ? (
                    imageName == 'blank' ? (
                      <img
                        style={{ height: '200px', width: '200px' }}
                        src={fileUrl}
                        onClick={() => setImagesModal(true)}
                        className="cursor-pointer"
                      />
                    ) : (
                      <Image
                        onClick={() => setImagesModal(true)}
                        src={`/modal/${imageName}.svg`}
                        height={200}
                        width={200}
                        className="cursor-pointer"
                        style={{ height: '200px', width: '200px' }}
                      />
                    )
                  ) : (
                    <Image
                      onClick={() => browseImageOpen()}
                      src="/edit-photo.svg"
                      height={200}
                      width={200}
                      className="cursor-pointer"
                      style={{ height: '200px', width: '200px' }}
                    />
                  )}
                </div>
                <hr style={{ width: '100%', color: '#6C63FF' }} />
                <div className="flex items-center justify-between mt-8">
                  <p className="text-primarydark">Back</p>
                  <Link href="/dashboard/projects/[project]" as={`/dashboard/projects/${inputValue}`}>
                    <a
                      className="z-50 border-2 border-primary hover:bg-primary hover:text-white text-primary font-medium py-1.5 px-6 rounded-2xl focus:outline-none"
                      onClick={onProjectCreate}
                    >
                      Create your project!
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NavbarTemplate>
    </>
  );
};

export default newStartupPage;