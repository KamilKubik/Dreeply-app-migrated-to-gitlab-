import React, { useEffect, useState } from 'react';
import { useAuth } from '../../lib/newAuth';
import { db } from '../../lib/firebase';
import NavbarTemplate from '../../components/dashboard/NavbarTemplate';
import { createCheckoutSessionThreeDays, createCheckoutSessionWeekly, goToBillingPortal } from '../../lib/db';
import TippyMonster from '../../components/dashboard/Tippy';
import ActivePlan from '../../components/dashboard/account/ActivePlan';
import PricingPage from '../../components/dashboard/account/PricingPage';

const AccountPage = () => {
  const { currentUser, logOut } = useAuth();
  const [activePlan, setActivePlan] = useState(null);
  const [planRole, setPlanRole] = useState('');
  const [activePlanPeriodEnd, setActivePlanPeriodEnd] = useState('');

  console.log(currentUser);
  useEffect(() => {
    // Fetch users current plan
    if (currentUser.stripeRole === 'free') {
      setActivePlan('free');
    } else {
      db.collection('users')
        .doc(currentUser.uid)
        .collection('subscriptions')
        .where('status', 'in', ['trialing', 'active'])
        .onSnapshot(async (snapshot) => {
          // In this implementation we only expect one active or trialing subscription to exist.
          const doc = snapshot.docs[0];
          const data = doc.data();
          console.log(doc.data());
          setActivePlan(data);
          setPlanRole(data.role);
          setActivePlanPeriodEnd(new Date(data.current_period_end.seconds * 1000));
        });
    }
  }, []);
  console.log(activePlan && activePlan);
  console.log(activePlanPeriodEnd && activePlanPeriodEnd);

  return (
    <>
      <TippyMonster
        activePlan
        contentClass="h-40 w-80 shadow-lg rounded-2xl bg-primary flex justify-center items-center"
        contentText="This is a place where magical things happen "
        contentText1=" Just start creating your startup and bring your idea into reality. Once you've done that, you can manage it from the main panel. Feel free to edit, save or delete your idea"
      />
      <NavbarTemplate>
        <div className="min-h-screen w-full relative flex flex-col items-center text-primarydark">
          <div className="w-full max-w-mobileEnd screenSmall:max-w-screenSmall screenMediumSmall:max-w-pricingBreakpoint screenMedium:max-w-screenMedium screenLarge:max-w-screenLarge QHD:max-w-QHD mt-12">
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
                <p className="self-end text-2xl pl-2 dark:text-background relative top-1.5">Active plan</p>
              </div>
            </div>
            <div>
              <p className="text text-gray mt-0.5">Manage your current plan, billing details and invoices from billing history</p>
            </div>
            {/* Plan details */}
            <ActivePlan
              goToBillingPortal={goToBillingPortal}
              planRole={planRole}
              activePlan={activePlan}
              activePlanPeriodEnd={activePlanPeriodEnd}
            />
            {/* Pricing */}
            <PricingPage currentUser={currentUser} goToBillingPortal={goToBillingPortal} activePlan={activePlan} />
          </div>
        </div>
      </NavbarTemplate>
    </>
  );
};

export default AccountPage;
