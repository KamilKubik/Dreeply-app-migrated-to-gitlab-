import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { db } from '../../lib/firebase';
import { useAuth } from '../../lib/newAuth';
import ManagerTippy from './startup/project/business-app/tippys/ManagerTippy';
import BounceLoader from 'react-spinners/BounceLoader';

const MembersCodeComponent = () => {
  const [projectIdInputValue, setProjectIdInputValue] = useState('');
  const [projectLoading, setProjectLoading] = useState(false);
  const { currentUser } = useAuth();
  const router = useRouter();

  const onNewProjectAdd = async () => {
    // Fetch particular project
    try {
      const data = await db.collection('projects').doc(projectIdInputValue).get();
      const projectData = data.data();
      if (projectData.uid === currentUser.uid) {
        alert('You are already a member of this project!');
        return;
      } else {
        setProjectLoading(true);
        // Fetch particular user
        const usersData = await db.collection('users').doc(currentUser.uid).get();
        const { name, userCountry, formatedUser } = usersData.data();
        // Update particular project users
        const newUsersArray = projectData.projectUsers;
        newUsersArray.push({
          role: 'member',
          userEmail: formatedUser.email,
          stripeRole: formatedUser.stripeRole,
          token: formatedUser.token,
          userUid: formatedUser.uid,
          userName: name,
          userCountry,
        });
        // Update firebase
        await db.collection('projects').doc(projectIdInputValue).update({ projectUsers: newUsersArray });
        // Page reload
        router.reload();
        setProjectLoading(false);
      }
    } catch {
      alert('Your project code is invalid');
      return;
    }
  };

  return (
    <div className="z-50 text-primarydark rounded-2xl mb-32 mt-12 flex flex-col">
      <div className="flex">
        <p className="text-lg dark:text-background">Become a project member</p>
        <ManagerTippy />
      </div>
      <div className="py-8 px-8 mt-1 w-full flex justify-between items-center border-r-6 rounded-2xl bg-white dark:bg-background">
        {/* <p>Paste the project code here:</p> */}
        <input
          value={projectIdInputValue}
          onChange={(e) => setProjectIdInputValue(e.target.value)}
          placeholder="project code"
          className="w-8/12 bg-white text-base focus:outline-none text-gray"
        />
        {projectLoading ? (
          <BounceLoader color={'#6C63FF'} size={38} />
        ) : (
          <button
            onClick={onNewProjectAdd}
            className="z-30 hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-6 rounded-2xl dark:text-primarydark dark:border-primarydark"
          >
            Add Project
          </button>
        )}
      </div>
    </div>
  );
};

export default MembersCodeComponent;
