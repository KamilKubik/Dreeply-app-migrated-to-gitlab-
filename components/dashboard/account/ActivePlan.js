import React, { useState } from 'react';
import { format } from 'date-fns';
import { BounceLoader } from 'react-spinners';
import ActivePlanTippy from './tippys/ActivePlanTippy';

const ActivePlan = ({ goToBillingPortal, planRole, activePlan, activePlanPeriodEnd }) => {
  const [onLoading, setOnLoading] = useState(false);
  const onBillingPortalClick = () => {
    setOnLoading(true);
    goToBillingPortal();
  };
  return (
    <div className="z-50 text-primarydark rounded-2xl mt-12 flex flex-col transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out">
      <div className="flex">
        <p className="text-lg dark:text-background">Your current plan</p>
        <ActivePlanTippy />
      </div>
      <div className="py-8 px-8 mt-1 w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white dark:bg-background shadow-lg hover:shadow-xl transition duration-500 ease-in-out">
        {activePlan == 'free' ? (
          <p className="text-red">Unfortunately, you do not have a current active plan</p>
        ) : planRole && activePlanPeriodEnd ? (
          <>
            <div className="w-full grid grid-cols-activePlanManager items-center text-xs mdContainer:text-sm lg1Container:text-base">
              <p>Active plan</p>
              <p>Plan type</p>
              <p>Plan ends</p>
              {/* <p>Country</p> */}
            </div>
            <hr className="text-primary w-full" />
            <div className="h-full w-full rounded-2xl flex flex-wrap flex-col">
              <div className="w-full grid grid-cols-activePlanManager py-3 items-center text-sm text-gray">
                <p>{planRole.charAt(0).toUpperCase() + planRole.slice(1)} subscription</p>
                <p>Occuring</p>
                <p>{format(activePlanPeriodEnd, 'yyyy-MM-dd')}</p>
                {!onLoading ? (
                  <button
                    onClick={onBillingPortalClick}
                    className="justify-self-end w-44 hover:bg-green hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border-green text-green py-3 px-4 rounded-2xl dark:text-primarydark dark:border-primarydark"
                  >
                    Manage your plan
                  </button>
                ) : (
                  <div className="w-44 justify-self-end flex justify-center items-center">
                    <BounceLoader color={'#29bb89'} size={44} />
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <div style={{ height: '89px' }} className="flex justify-center items-center">
            <BounceLoader color={'#6C63FF'} size={38} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivePlan;
