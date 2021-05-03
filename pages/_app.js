import 'tailwindcss/tailwind.css';
import '../styles/global.css';
import { AuthProvider } from '../lib/newAuth';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import Navbar from '../components/dashboard/Navbar';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { isMobile } from 'react-device-detect';
import MobilePrevent from '../components/MobilePrevent';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const directRoute = router.pathname;

  // Jeśli w url jest /dashboard, to NavBar ten z boku, mają wszystkie komponenty (czyli cały dashboard, bez strony początkowej)

  if (directRoute.includes('/dashboard')) {
    return (
      <AuthProvider>
        <ThemeProvider attribute="class">
          <div className="bg-background dark:bg-secondary">
            <Navbar>
              <DefaultSeo {...SEO} />
              <Component {...pageProps} />
            </Navbar>
          </div>
        </ThemeProvider>
      </AuthProvider>
      // <>
      //   {isMobile ? (
      //     <MobilePrevent />
      //   ) : (
      //     <AuthProvider>
      //       <ThemeProvider attribute="class">
      //         <div className="bg-background dark:bg-secondary">
      //           <Navbar>
      //             <DefaultSeo {...SEO} />
      //             <Component {...pageProps} />
      //           </Navbar>
      //         </div>
      //       </ThemeProvider>
      //     </AuthProvider>
      //   )}
      // </>
    );
  } else if (isMobile && (directRoute.includes('/signup') || directRoute.includes('/login'))) {
    return <MobilePrevent />;
  } else {
    return (
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    );
  }

  // else {
  //   return (
  //     <>
  //       {isMobile &&
  //         (directRoute.includes('/signup') || directRoute.includes('/login') ? (
  //           <MobilePrevent />
  //         ) : (
  //           <AuthProvider>
  //             <Component {...pageProps} />
  //           </AuthProvider>
  //         ))}
  //     </>
  //   );
}

export default MyApp;
