import 'tailwindcss/tailwind.css';
import '../styles/global.css';
import { AuthProvider } from '../lib/newAuth';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
// import Navbar from '../components/dashboard/Navbar';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const directRoute = router.pathname;

  // DOBRE WYMYŚLIŁEM --> Jeśli w url jest /dashboard, to NavBar ten z boku, mają wszystkie komponenty (czyli cały dashboard, bez strony początkowej)

  if (directRoute.includes('/dashboard')) {
    return (
      <AuthProvider>
        <ThemeProvider attribute="class">
          <div className="bg-background dark:bg-secondary">
            {/* <Navbar> */}
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
            {/* </Navbar> */}
          </div>
        </ThemeProvider>
      </AuthProvider>
    );
  } else {
    return (
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    );
  }
}

export default MyApp;
