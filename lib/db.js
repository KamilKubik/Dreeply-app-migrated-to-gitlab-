import firebase from './firebase.js';
import { db } from './firebase';
import getStripe from './stripe.js';

const firestore = firebase.firestore();

export const getAllProjects = async () => {
  const snapshot = await firestore.collection('projects').get();

  const projects = [];
  snapshot.forEach((doc) => {
    projects.push({ id: doc.id, ...doc.data() });
  });

  console.log(projects);
  return { projects };
};

// CLIENT-DATA

export const createUser = (uid, data) => {
  return firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true }); // merge powoduje, że każde id będzie unikatowe
};

export const getUser = async (uid) => {
  const user = await firestore.collection('users').get();

  const users = [];
  user.forEach((doc) => {
    users.push({ id: doc.id, ...doc.data() });
  });

  return { users };
};

// STARTUP-DATA

export const createStartupData = (data) => {
  // Wszystkie informacje wrzucamy, a potem będziemy je pobierali dla odpowiedniego użytkownika
  return firestore.collection('startup-data').add(data);
};

// PROJECT DELETE
export const deleteProject = async (projectId) => {
  // ONE PARTICULAR PROJECT
  const snapshot = await firestore.collection('projects').where('projectId', '==', projectId).get();

  const batch = firestore.batch();
  console.log(batch);

  snapshot.forEach((doc) => {
    batch.delete(doc.ref);
  });

  return batch.commit();
};

// STRIPE

export const createCheckoutSessionThreeDays = async (uid) => {
  const checkoutSessionRef = await db
    .collection('users')
    .doc(uid)
    .collection('checkout_sessions')
    .add({
      price: 'price_1IovN1BdXPtKajNHtQTV1N1q',
      success_url: `${window.location.origin}/dashboard/account`,
      cancel_url: `${window.location.origin}/dashboard/account`,
    });
  // Wait for the CheckoutSession to get attached by the extension
  checkoutSessionRef.onSnapshot(async (snap) => {
    // TO JEST DO ZMIANY Z PODSTAWOWEJ TEMPLATKI (tutaj dodajemy tylko słówko async)
    const { error, sessionId } = snap.data();
    if (error) {
      // Show an error to your customer and
      // inspect your Cloud Function logs in the Firebase console.
      alert(`An error occured: ${error.message}`);
    }
    if (sessionId) {
      // We have a session, let's redirect to Checkout
      // Init Stripe
      const stripe = await getStripe();
      stripe.redirectToCheckout({ sessionId });
    }
  });
};

export const createCheckoutSessionWeekly = async (uid) => {
  const checkoutSessionRef = await db
    .collection('users')
    .doc(uid) // TO JEST DO ZMIANY Z PODSTAWOWEJ TEMPLATKI
    .collection('checkout_sessions')
    .add({
      price: 'price_1IoxGoBdXPtKajNHMxZa1Mgy', // Price key
      success_url: `${window.location.origin}/dashboard/account`,
      cancel_url: `${window.location.origin}/dashboard/account`,
    });
  // Wait for the CheckoutSession to get attached by the extension
  checkoutSessionRef.onSnapshot(async (snap) => {
    // TO JEST DO ZMIANY Z PODSTAWOWEJ TEMPLATKI (tutaj dodajemy tylko słówko async)
    const { error, sessionId } = snap.data();
    if (error) {
      // Show an error to your customer and
      // inspect your Cloud Function logs in the Firebase console.
      alert(`An error occured: ${error.message}`);
    }
    if (sessionId) {
      // We have a session, let's redirect to Checkout
      // Init Stripe
      const stripe = await getStripe(); // TO JEST DO ZMIANY Z PODSTAWOWEJ TEMPLATKI (funkcja getStripe w pliku stripe.js)
      stripe.redirectToCheckout({ sessionId });
    }
  });
};

export const createCheckoutSessionMonthly = async (uid) => {
  const checkoutSessionRef = await db
    .collection('users')
    .doc(uid) // TO JEST DO ZMIANY Z PODSTAWOWEJ TEMPLATKI
    .collection('checkout_sessions')
    .add({
      price: 'price_1IowgcBdXPtKajNHZowOrp8p', // Price key
      success_url: `${window.location.origin}/dashboard/account`,
      cancel_url: `${window.location.origin}/dashboard/account`,
    });
  // Wait for the CheckoutSession to get attached by the extension
  checkoutSessionRef.onSnapshot(async (snap) => {
    // TO JEST DO ZMIANY Z PODSTAWOWEJ TEMPLATKI (tutaj dodajemy tylko słówko async)
    const { error, sessionId } = snap.data();
    if (error) {
      // Show an error to your customer and
      // inspect your Cloud Function logs in the Firebase console.
      alert(`An error occured: ${error.message}`);
    }
    if (sessionId) {
      // We have a session, let's redirect to Checkout
      // Init Stripe
      const stripe = await getStripe(); // TO JEST DO ZMIANY Z PODSTAWOWEJ TEMPLATKI (funkcja getStripe w pliku stripe.js)
      stripe.redirectToCheckout({ sessionId });
    }
  });
};

export const goToBillingPortal = async () => {
  // Do tej funkcji musimy zaimportować firebase/functions w pliku firebase.js
  const functionRef = firebase.app().functions('us-central1').httpsCallable('ext-firestore-stripe-subscriptions-createPortalLink');
  const { data } = await functionRef({
    returnUrl: `${window.location.origin}/dashboard/account`,
  });
  window.location.assign(data.url);
};

// export const getCurrentPlan = async () => {
//   const decodedToken = await firebase.auth().currentUser.getIdTokenResult();
//   // console.log(decodedToken.claims.stripeRole); // TO POKAZUJE AKTUALNY PLAN ZALOGOWANEGO UŻYTKOWNIKA NP. BASIC / PREMIUM
//   return decodedToken.claims.stripeRole;
// };
