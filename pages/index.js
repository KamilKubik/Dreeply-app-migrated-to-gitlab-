import React, { useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  useEffect(async () => {
    const snapshot = await db.collection('projects').get();

    const projects = [];
    snapshot.forEach((doc) => {
      projects.push({ id: doc.id, ...doc.data() });
    });
    console.log(projects);
  }, []);

  const onProjectCreate = async () => {
    const projectId = uuidv4();
    const newProject = {
      projectId,
      projectName: inputValue,
    };
    await db.collection('projects').doc(projectId).set(newProject);
    // router.push('/dashboard/projects/[project]', `/dashboard/projects/${inputValue}`);
  };
  return (
    // <div>
    //   <Head>
    //     <title>Next.js on the Jamstack with Netlify!</title>
    //   </Head>
    //   <h1>
    //     Next.js on the <a href="https://jamstack.org">Jamstack</a>
    //   </h1>

    //   <h3>
    //     Hooray 🎉 - you've built this with <a href="https://nextjs.org">Next.js</a>!
    //   </h3>
    //   <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Add new project" />
    //   <Link href="/dashboard/projects/[project]" as={`/dashboard/projects/${inputValue}`}>
    //     <a onClick={onProjectCreate}>Create your project!</a>
    //   </Link>
    //   {/* <button onClick={onProjectCreate}>Create your project!</button> */}
    // </div>
    <>
      <Head>
        {/* <script
        dangerouslySetInnerHTML={{ // Jeśli jesteśmy zalogowani, będzie kierowało nas cały czas na stronę /dashboard. Po zalogowaniu także, jeśli odświeżymy stronę
          __html: `
        if (document.cookie && document.cookie.includes('start-up-auth')) {
          window.location.href = "/dashboard"
        }
      `,
        }}
      /> */}
      </Head>
      <div className="h-screen w-full flex justify-center items-center flex-col">
        <div className="text-center">
          <p className="text-4xl font-medium"> Hello!</p>
          <p className="text-lg pb-4 font-medium text-gray">
            Let's grow your business together{' '}
            <img src="/gifs/hit.gif" height={40} width={40} className="inline-block relative bottom-0.5" />
          </p>
        </div>
        <Link href="/signup">
          <a className="text-center mt-2 text-base text-primary border-2 border-primary rounded-2xl px-4 py-1 hover:bg-primary hover:text-white">
            Start for free
          </a>
        </Link>
      </div>
    </>
  );
};

export default Home;
