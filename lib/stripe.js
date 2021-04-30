// MOŻNA TEŻ WRZUCIĆ TO DO FOLDERU UTILS

/**
 * This is a singleton to ensure we only instantiate Stripe once.
 */
 import { Stripe, loadStripe } from '@stripe/stripe-js';

 let stripePromise;
 const getStripe = () => {
   if (!stripePromise) {
     stripePromise = loadStripe('pk_test_51IVIucBdXPtKajNHgoC6xC1s2WRUopkoxIkuxCtuvPrDmhRDEyl3BfsW6E2CgmerMXKSwpXojBhACW9yVxcmVLIQ00bPN1lfDO'); // w folderze .env.local (ten klucz jest na głównej stronie dashboard'u na stripe)
   }
   return stripePromise;
 };
 
 export default getStripe;