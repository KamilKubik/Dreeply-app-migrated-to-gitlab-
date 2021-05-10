import React, { useState } from 'react';
import { BounceLoader } from 'react-spinners';
import PricingPageTippy from './tippys/PricingPageTippy';
import {
  createCheckoutSessionWeekly,
  createCheckoutSessionThreeDays,
  createCheckoutSessionMonthly,
  createCheckoutSessionYearly,
} from '../../../lib/db';

const PricingPage = ({ activePlan, goToBillingPortal, currentUser }) => {
  console.log(activePlan);
  const [onLoading, setOnLoading] = useState(false);
  const [onWeeklyLoading, setOnWeeklyLoading] = useState(false);
  const [onMonthlyLoading, setOnMonthlyLoading] = useState(false);
  const [onYearlyLoading, setOnYearlyLoading] = useState(false);
  const onBillingPortalClick = () => {
    setOnLoading(true);
    setTimeout(() => {
      setOnLoading(false);
    }, 5000);
    // goToBillingPortal();
  };

  const onBillingPortalClick2 = () => {
    setOnWeeklyLoading(true);
    setTimeout(() => {
      setOnWeeklyLoading(false);
    }, 5000);
    // goToBillingPortal();
  };

  const onBillingPortalClick3 = () => {
    setOnMonthlyLoading(true);
    setTimeout(() => {
      setOnMonthlyLoading(false);
    }, 5000);
    // goToBillingPortal();
  };

  const onBillingPortalClick4 = () => {
    setOnYearlyLoading(true);
    setTimeout(() => {
      setOnYearlyLoading(false);
    }, 5000);
    // goToBillingPortal();
  };

  return (
    <div className="z-50 text-primarydark rounded-2xl mt-16 mb-16 flex flex-col transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out">
      <div className="flex">
        <p className="text-lg dark:text-background">Choose the best plan for you</p>
        <PricingPageTippy />
      </div>
      <div className="py-8 px-8 mt-1 w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white dark:bg-background shadow-lg hover:shadow-xl transition duration-500 linear">
        <div className="w-full grid grid-cols-2fr screenMediumSmall:grid-cols-4fr gap-x-4 gap-y-12">
          {/* 3 Day pricing */}
          <div
            className={`group w-full rounded-2xl px-6 py-4 ${
              onLoading ? 'text-white bg-primary' : 'text-primarydark bg-background'
            } hover:bg-primary hover:text-white transition duration-500 linear`}
          >
            <p className="font-extrabold">3 Day plan</p>
            <div className="mt-2">
              <p
                className={`text-2xl inline-block group-hover:text-primarydark transition duration-500 linear ${
                  onLoading ? 'text-primarydark' : 'text-gray'
                }`}
              >
                $
              </p>
              <p className="text-2xl inline-block ml-1">4</p>
              <p
                className={`inline-block ml-2 text-sm group-hover:text-primarydark transition duration-500 linear ${
                  onLoading ? 'text-primarydark' : 'text-gray'
                }`}
              >
                /
              </p>
              <p
                className={`inline-block ml-2 text-sm group-hover:text-primarydark transition duration-500 linear ${
                  onLoading ? 'text-primarydark' : 'text-gray'
                }`}
              >
                three days
              </p>
            </div>
            <div className="flex items-baseline mt-6 text-sm">
              <img src="/pricing/rocket1.svg" height={24} width={24} />
              <p className="ml-2 font-semibold inline-block">Unlimited</p>
              <p className="ml-1 inline-block">projects</p>
            </div>
            <div className="flex items-baseline mt-3 text-sm">
              <img className="relative top-0.5" src="/pricing/members.svg" height={24} width={24} />
              <p className="ml-2 font-semibold inline-block">Unlimited</p>
              <p className="ml-1 inline-block">members</p>
            </div>
            <div className="flex items-baseline mt-3 text-sm">
              <img className="relative top-0.5" src="/pricing/startup-idea.svg" height={24} width={24} />
              <p className="ml-2">Startup idea</p>
            </div>
            <div className="flex items-baseline mt-3 text-sm">
              <img className="relative top-0.5" src="/pricing/business-plan.svg" height={24} width={24} />
              <p className="ml-2">Business plan</p>
            </div>
            <div className="flex items-baseline mt-3 text-sm">
              <img className="relative top-0.5" src="/pricing/cash-flow1.svg" height={24} width={24} />
              <p className="ml-2">Cash flow analysis</p>
            </div>
            <div className="flex items-baseline mt-3 text-sm">
              <img className="relative top-0.5" src="/pricing/competitors.svg" height={24} width={24} />
              <p className="ml-2">Competitors analysis</p>
            </div>
            <div className="flex justify-center items-center mt-4 text-sm">
              {!onLoading ? (
                <button
                  //   onClick={
                  //     activePlan && activePlan.role === 'three' && activePlan.status === 'active'
                  //       ? onBillingPortalClick
                  //       : () => createCheckoutSessionThreeDays(currentUser.uid)
                  //   }
                  onClick={onBillingPortalClick}
                  className="dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary py-2 px-4 rounded-2xl dark:text-primarydark dark:border-primarydark group-hover:text-white group-hover:border-primarydark hover:bg-primarydark transition duration-500 linear"
                >
                  {activePlan && activePlan.role === 'three' && activePlan.status === 'active' ? 'Manage your plan' : 'Start 3 day plan'}
                </button>
              ) : (
                <BounceLoader color={'#0a1230'} size={36} />
              )}
            </div>
          </div>
          {/* Weekly pricing plan */}
          <div
            className={`group w-full rounded-2xl px-6 py-4 ${
              onWeeklyLoading ? 'text-white bg-primary' : 'text-primarydark bg-background'
            } hover:bg-primary hover:text-white transition duration-500 linear`}
          >
            <p className="font-extrabold">Weekly plan</p>
            <div className="mt-2">
              <p
                className={`${
                  onWeeklyLoading ? 'text-primarydark' : 'text-gray'
                } text-2xl inline-block group-hover:text-primarydark transition duration-500 linear`}
              >
                $
              </p>
              <p className="text-2xl inline-block ml-1">7</p>
              <p
                className={`${
                  onWeeklyLoading ? 'text-primarydark' : 'text-gray'
                } inline-block ml-2 text-sm group-hover:text-primarydark transition duration-500 linear`}
              >
                /
              </p>
              <p
                className={`${
                  onWeeklyLoading ? 'text-primarydark' : 'text-gray'
                } inline-block ml-2 text-sm group-hover:text-primarydark transition duration-500 linear`}
              >
                week
              </p>
            </div>
            <div className="flex items-baseline mt-6 text-sm">
              <img src="/pricing/rocket1.svg" height={24} width={24} />
              <p className="ml-2 font-semibold inline-block">Unlimited</p>
              <p className="ml-1 inline-block">projects</p>
            </div>
            <div className="flex items-baseline mt-3 text-sm">
              <img className="relative top-0.5" src="/pricing/members.svg" height={24} width={24} />
              <p className="ml-2 font-semibold inline-block">Unlimited</p>
              <p className="ml-1 inline-block">members</p>
            </div>
            <div className="flex items-baseline mt-3 text-sm">
              <img className="relative top-0.5" src="/pricing/startup-idea.svg" height={24} width={24} />
              <p className="ml-2">Startup idea</p>
            </div>
            <div className="flex items-baseline mt-3 text-sm">
              <img className="relative top-0.5" src="/pricing/business-plan.svg" height={24} width={24} />
              <p className="ml-2">Business plan</p>
            </div>
            <div className="flex items-baseline mt-3 text-sm">
              <img className="relative top-0.5" src="/pricing/cash-flow1.svg" height={24} width={24} />
              <p className="ml-2">Cash flow analysis</p>
            </div>
            <div className="flex items-baseline mt-3 text-sm">
              <img className="relative top-0.5" src="/pricing/competitors.svg" height={24} width={24} />
              <p className="ml-2">Competitors analysis</p>
            </div>
            <div className="flex justify-center items-center mt-4 text-sm">
              {!onWeeklyLoading ? (
                <button
                  // onClick={
                  //   activePlan && activePlan.role === 'weekly' && activePlan.status === 'active'
                  //     ? onBillingPortalClick2
                  //     : () => createCheckoutSessionWeekly(currentUser.uid)
                  // }
                  onClick={onBillingPortalClick2}
                  className="dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary py-2 px-4 rounded-2xl dark:text-primarydark dark:border-primarydark group-hover:text-white group-hover:border-primarydark hover:bg-primarydark transition duration-500 linear"
                >
                  {activePlan && activePlan.role === 'weekly' && activePlan.status === 'active' ? 'Manage your plan' : 'Start weekly plan'}
                </button>
              ) : (
                <BounceLoader color={'#0a1230'} size={36} />
              )}
            </div>
          </div>
          {/* Monthly pricing plan */}
          <div
            className={`z-50 group w-full rounded-2xl px-6 py-4 ${
              onMonthlyLoading ? 'text-white bg-primary' : 'text-primarydark bg-background'
            } hover:bg-primary hover:text-white transition duration-500 linear`}
          >
            <p className="font-extrabold">Monthly plan</p>
            <div className="mt-2">
              <p
                className={`text-2xl ${
                  onMonthlyLoading ? 'text-primarydark' : 'text-gray'
                } inline-block group-hover:text-primarydark transition duration-500 linear`}
              >
                $
              </p>
              <p className="text-2xl inline-block ml-1">19</p>
              <p
                className={`${
                  onMonthlyLoading ? 'text-primarydark' : 'text-gray'
                } inline-block ml-2 text-sm group-hover:text-primarydark transition duration-500 linear`}
              >
                /
              </p>
              <p
                className={`${
                  onMonthlyLoading ? 'text-primarydark' : 'text-gray'
                } inline-block ml-2 text-sm group-hover:text-primarydark transition duration-500 linear`}
              >
                month
              </p>
            </div>
            <div className="flex items-baseline mt-6 text-sm">
              <img src="/pricing/rocket1.svg" height={24} width={24} />
              <p className="ml-2 font-semibold inline-block">Unlimited</p>
              <p className="ml-1 inline-block">projects</p>
            </div>
            <div className="flex items-baseline mt-3 text-sm">
              <img className="relative top-0.5" src="/pricing/members.svg" height={24} width={24} />
              <p className="ml-2 font-semibold inline-block">Unlimited</p>
              <p className="ml-1 inline-block">members</p>
            </div>
            <div className="flex items-baseline mt-3 text-sm">
              <img className="relative top-0.5" src="/pricing/startup-idea.svg" height={24} width={24} />
              <p className="ml-2">Startup idea</p>
            </div>
            <div className="flex items-baseline mt-3 text-sm">
              <img className="relative top-0.5" src="/pricing/business-plan.svg" height={24} width={24} />
              <p className="ml-2">Business plan</p>
            </div>
            <div className="flex items-baseline mt-3 text-sm">
              <img className="relative top-0.5" src="/pricing/cash-flow1.svg" height={24} width={24} />
              <p className="ml-2">Cash flow analysis</p>
            </div>
            <div className="flex items-baseline mt-3 text-sm">
              <img className="relative top-0.5" src="/pricing/competitors.svg" height={24} width={24} />
              <p className="ml-2">Competitors analysis</p>
            </div>
            <div className="flex justify-center items-center mt-4 text-sm">
              {!onMonthlyLoading ? (
                <button
                  // onClick={
                  //   activePlan && activePlan.role === 'monthly' && activePlan.status === 'active'
                  //     ? onBillingPortalClick3
                  //     : () => createCheckoutSessionMonthly(currentUser.uid)
                  // }
                  onClick={onBillingPortalClick3}
                  className="z-50 dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary py-2 px-4 rounded-2xl dark:text-primarydark dark:border-primarydark group-hover:text-white group-hover:border-primarydark hover:bg-primarydark transition duration-500 linear"
                >
                  {activePlan && activePlan.role === 'monthly' && activePlan.status === 'active'
                    ? 'Manage your plan'
                    : 'Start monthly plan'}
                </button>
              ) : (
                <BounceLoader color={'#0a1230'} size={36} />
              )}
            </div>
          </div>
          {/* Yearly pricing plan */}
          <div
            className={`group w-full rounded-2xl px-6 py-4 ${
              onYearlyLoading ? 'text-white bg-primary' : 'text-primarydark bg-background'
            } hover:bg-primary hover:text-white transition duration-500 linear`}
          >
            <p className="font-extrabold">Yearly plan</p>
            <div className="mt-2">
              <p
                className={`${
                  onYearlyLoading ? 'text-primarydark' : 'text-gray'
                } text-2xl inline-block group-hover:text-primarydark transition duration-500 linear`}
              >
                $
              </p>
              <p className="text-2xl inline-block ml-1">119</p>
              <p
                className={`${
                  onYearlyLoading ? 'text-primarydark' : 'text-gray'
                } inline-block ml-2 text-sm group-hover:text-primarydark transition duration-500 linear`}
              >
                /
              </p>
              <p
                className={`${
                  onYearlyLoading ? 'text-primarydark' : 'text-gray'
                } inline-block ml-2 text-sm group-hover:text-primarydark transition duration-500 linear`}
              >
                year
              </p>
            </div>
            <div className="flex items-baseline mt-6 text-sm">
              <img src="/pricing/rocket1.svg" height={24} width={24} />
              <p className="ml-2 font-semibold inline-block">Unlimited</p>
              <p className="ml-1 inline-block">projects</p>
            </div>
            <div className="flex items-baseline mt-3 text-sm">
              <img className="relative top-0.5" src="/pricing/members.svg" height={24} width={24} />
              <p className="ml-2 font-semibold inline-block">Unlimited</p>
              <p className="ml-1 inline-block">members</p>
            </div>
            <div className="flex items-baseline mt-3 text-sm">
              <img className="relative top-0.5" src="/pricing/startup-idea.svg" height={24} width={24} />
              <p className="ml-2">Startup idea</p>
            </div>
            <div className="flex items-baseline mt-3 text-sm">
              <img className="relative top-0.5" src="/pricing/business-plan.svg" height={24} width={24} />
              <p className="ml-2">Business plan</p>
            </div>
            <div className="flex items-baseline mt-3 text-sm">
              <img className="relative top-0.5" src="/pricing/cash-flow1.svg" height={24} width={24} />
              <p className="ml-2">Cash flow analysis</p>
            </div>
            <div className="flex items-baseline mt-3 text-sm">
              <img className="relative top-0.5" src="/pricing/competitors.svg" height={24} width={24} />
              <p className="ml-2">Competitors analysis</p>
            </div>
            <div className="flex justify-center items-center mt-4 text-sm">
              {!onYearlyLoading ? (
                <button
                  // onClick={
                  //   activePlan && activePlan.role === 'yearly' && activePlan.status === 'active'
                  //     ? onBillingPortalClick4
                  //     : () => createCheckoutSessionYearly(currentUser.uid)
                  // }
                  onClick={onBillingPortalClick4}
                  className="dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary py-2 px-4 rounded-2xl dark:text-primarydark dark:border-primarydark group-hover:text-white group-hover:border-primarydark hover:bg-primarydark transition duration-500 linear"
                >
                  {activePlan && activePlan.role === 'yearly' && activePlan.status === 'active' ? 'Manage your plan' : 'Start yearly plan'}
                </button>
              ) : (
                <BounceLoader color={'#0a1230'} size={36} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
