import React, { useEffect, useState } from 'react';
import { useAuth } from '../../lib/newAuth';
import NavbarTemplate from '../../components/dashboard/NavbarTemplate';
import {
  createCheckoutSession,
  createCheckoutSession10,
  goToBillingPortal,
} from '../../lib/db';
import firebase from '../../lib/firebase';

const AccountPage = () => {
  const { currentUser, logOut } = useAuth();
  const [onLoading, setOnLoading] = useState();

  console.log(currentUser.stripeRole);

  return (
    <NavbarTemplate>
      <div>Account</div>
      <button
        onClick={() => {
          setOnLoading(true);
          createCheckoutSession(currentUser.uid);
        }}
        className=' ml-20 hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background border border-primary text-primary dark:text-primarydark dark:border-primarydark font-light py-2 px-6 rounded-2xl'
      >
        {onLoading ? '...Loading' : 'Update Plan'}
      </button>
      <button
        onClick={() => {
          setOnLoading(true);
          createCheckoutSession10(currentUser.uid);
        }}
        className=' ml-20 hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background border border-primary text-primary dark:text-primarydark dark:border-primarydark font-light py-2 px-6 rounded-2xl'
      >
        {onLoading ? '...Loading' : 'Get 10 units'}
      </button>
      <button
        onClick={() => {
          setOnLoading(true);
          goToBillingPortal();
        }}
        className='ml-20 hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background border border-primary text-primary dark:text-primarydark dark:border-primarydark font-light py-2 px-6 rounded-2xl'
      >
        {onLoading ? '...Loading' : 'View Billing Portal'}
      </button>
      <p>Current plan: {currentUser.stripeRole}</p>
      <button onClick={logOut}>Log Out</button>
    </NavbarTemplate>
  );
};

export default AccountPage;
