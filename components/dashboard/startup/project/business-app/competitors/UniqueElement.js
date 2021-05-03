import React, { useEffect, useState, useRef } from 'react';
import { isMobile } from 'react-device-detect';
import gsap, { Linear } from 'gsap';

const UniqueCompetitorsPage = ({ competitor }) => {
  console.log('Competitor --> ', competitor);
  //   Dropdown
  const [dropdownHelper, setDropdownHelper] = useState(false);

  const initialContainer = document.getElementById(competitor.index);
  // Elements
  const [descriptionTitle, setDescriptionTitle] = useState(null);
  const [placeholderTitle, setPlaceholderTitle] = useState(null);
  const [descriptionModel, setDescriptionModel] = useState(null);
  const [placeholderModel, setPlaceholderModel] = useState(null);
  const [descriptionProduct, setDescriptionProduct] = useState(null);
  const [placeholderProduct, setPlaceholderProduct] = useState(null);
  const [descriptionPromotion, setDescriptionPromotion] = useState(null);
  const [placeholderPromotion, setPlaceholderPromotion] = useState(null);
  const [descriptionStrengths, setDescriptionStrengths] = useState(null);
  const [placeholderStrengths, setPlaceholderStrengths] = useState(null);
  const [descriptionWeaknesses, setDescriptionWeaknesses] = useState(null);
  const [placeholderWeaknesses, setPlaceholderWeaknesses] = useState(null);
  const [descriptionOpportunities, setDescriptionOpportunities] = useState(null);
  const [placeholderOpportunities, setPlaceholderOpportunities] = useState(null);

  useEffect(() => {
    const descriptionTitle = document.getElementById(`descriptionTitle${competitor.index}`);
    setDescriptionTitle(descriptionTitle);
    const placeholderTitle = document.getElementById(`placeholderTitle${competitor.index}`);
    setPlaceholderTitle(placeholderTitle);
    const descriptionModel = document.getElementById(`descriptionModel${competitor.index}`);
    setDescriptionModel(descriptionModel);
    const placeholderModel = document.getElementById(`placeholderModel${competitor.index}`);
    setPlaceholderModel(placeholderModel);
    const descriptionProduct = document.getElementById(`descriptionProduct${competitor.index}`);
    setDescriptionProduct(descriptionProduct);
    const placeholderProduct = document.getElementById(`placeholderProduct${competitor.index}`);
    setPlaceholderProduct(placeholderProduct);
    const descriptionPromotion = document.getElementById(`descriptionPromotion${competitor.index}`);
    setDescriptionPromotion(descriptionPromotion);
    const placeholderPromotion = document.getElementById(`placeholderPromotion${competitor.index}`);
    setPlaceholderPromotion(placeholderPromotion);
    const descriptionStrengths = document.getElementById(`descriptionStrengths${competitor.index}`);
    setDescriptionStrengths(descriptionStrengths);
    const placeholderStrengths = document.getElementById(`placeholderStrengths${competitor.index}`);
    setPlaceholderStrengths(placeholderStrengths);
    const descriptionWeaknesses = document.getElementById(`descriptionWeaknesses${competitor.index}`);
    setDescriptionWeaknesses(descriptionWeaknesses);
    const placeholderWeaknesses = document.getElementById(`placeholderWeaknesses${competitor.index}`);
    setPlaceholderWeaknesses(placeholderWeaknesses);
    const descriptionOpportunities = document.getElementById(`descriptionOpportunities${competitor.index}`);
    setDescriptionOpportunities(descriptionOpportunities);
    const placeholderOpportunities = document.getElementById(`placeholderOpportunities${competitor.index}`);
    setPlaceholderOpportunities(placeholderOpportunities);
  });

  const dropDownElement = document.getElementById(`dropdown${competitor.index}`);
  const dataElement = document.getElementById(`data${competitor.index}`);

  useEffect(() => {
    gsap.set(dropDownElement, { rotation: '-90_cw' });
    if (!isMobile) {
      const containerElement = document.getElementById(`container${competitor.index}`);
      const competitorManager = document.getElementById(`manager${competitor.index}`);
      containerElement.addEventListener('mouseenter', () => {
        gsap.to(competitorManager, { height: 18, marignBottom: 16, duration: 0.5, ease: Linear.easeIn });
        gsap.to(initialContainer, { marginTop: 16, duration: 0.5, ease: Linear.easeIn });
      });
      containerElement.addEventListener('mouseleave', () => {
        gsap.to(competitorManager, { height: 0, marginBottom: 0, duration: 0.5, ease: Linear.easeOut });
        gsap.to(initialContainer, { marginTop: 0, duration: 0.5, ease: Linear.easeIn });
      });
    }
  }, [dropDownElement]);

  const onSectionDropdown = () => {
    const sectionHeight =
      descriptionTitle.offsetHeight +
      placeholderTitle.offsetHeight +
      descriptionModel.offsetHeight +
      placeholderModel.offsetHeight +
      24 +
      descriptionProduct.offsetHeight +
      placeholderProduct.offsetHeight +
      24 +
      descriptionPromotion.offsetHeight +
      placeholderPromotion.offsetHeight +
      24 +
      descriptionStrengths.offsetHeight +
      placeholderStrengths.offsetHeight +
      24 +
      descriptionWeaknesses.offsetHeight +
      placeholderWeaknesses.offsetHeight +
      24 +
      descriptionOpportunities.offsetHeight +
      placeholderOpportunities.offsetHeight +
      24;
    if (!dropdownHelper) {
      gsap.to(dataElement, { height: sectionHeight, marginTop: 32, marginBottom: 112, autoAlpha: 1, duration: 1, ease: Linear });
      gsap.to(dropDownElement, { rotation: '0_cw', duration: 1, ease: Linear });
      setDropdownHelper(true);
    } else if (dropdownHelper) {
      gsap.to(dataElement, { height: 0, marginTop: 0, marginBottom: 0, autoAlpha: 0, duration: 1, ease: Linear });
      gsap.to(dropDownElement, { rotation: '-90_ccw', duration: 1, ease: Linear });
      setDropdownHelper(false);
    }
  };

  return (
    <div
      style={{ height: 'fit-content' }}
      id={`container${competitor.index}`}
      className="w-full bg-background rounded-2xl p-4 ssmContainer:p-6 shadow-md overflow-hidden mt-8 smContainer:mt-8"
    >
      <div
        style={{ height: `${isMobile ? 40 : 0}`, top: `${isMobile ? '-6px' : '-6px'}` }}
        id={`manager${competitor.index}`}
        className="flex justify-between relative"
      >
        <img
          className="cursor-pointer"
          //   style={{ transform: 'rotate(-90deg)' }}
          onClick={onSectionDropdown}
          id={`dropdown${competitor.index}`}
          src="/competitors/dropdown.svg"
          height={18}
          width={18}
        />
        <div className="flex">
          {/* <img className="cursor-pointer mr-2" src="/competitors/drag.svg" height={18} width={18} />
        <img
          className="cursor-pointer"
          onClick={() => onCompetitorRemove(data.competitor.index)}
          src="/competitors/remove.svg"
          height={18}
          width={18}
        /> */}
        </div>
      </div>
      <div
        id={competitor.index}
        className="flex gap-6 flex-col justify-center items-center smContainer:gap-0 smContainer:grid smContainer:grid-cols-12fr"
      >
        <div className="smContainer:col-start-1 smContainer:col-end-4 justify-self-center flex justify-start items-center">
          {competitor.image !== '' ? (
            <label
              htmlFor={`upload-image${competitor.index}`}
              className="relative w-20 h-20 cursor-pointer rounded-full bg-white flex justify-center items-center"
            >
              <img src={competitor.image} height={55} width={55} />
            </label>
          ) : (
            <div>
              <label
                htmlFor={`upload-image${competitor.index}`}
                className="w-20 h-20 cursor-pointer rounded-full bg-primary flex justify-center items-center"
              >
                <img src="/competitors/empty-image.svg" height={65} width={65} />
              </label>
            </div>
          )}
          <input type="file" id={`upload-image${competitor.index}`} style={{ display: 'none', zIndex: 10 }} />
        </div>
        <div className="smContainer:col-start-5 smContainer:col-end-13 grid grid-cols-2fr grid-rows-2fr justify-items-center items-center gap-x-4 ssmContainer:gap-x-8 gap-y-2 ssmContainer:gap-y-4">
          <div>
            <input
              value={competitor.title}
              className="bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none"
              placeholder="name"
            />
          </div>
          <div>
            <input
              value={competitor.location}
              className="bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none"
              placeholder="location"
            />
          </div>
          <div>
            <input
              value={competitor.employees}
              className="bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none"
              placeholder="employees"
            />
          </div>
          <div>
            <input
              value={competitor.revenue}
              className="bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none"
              placeholder="revenue"
            />
          </div>
        </div>
      </div>
      {/* Company description */}
      <div id={`data${competitor.index}`} className="w-full h-0 invisible">
        <div id={`descriptionTitle${competitor.index}`} className="flex justify-start items-center">
          <img src="/competitors/description.svg" height={22} width={22} />
          <p className="text-primarydark ml-2">Company description</p>
        </div>
        <textarea
          value={competitor.companyDescription}
          id={`placeholderTitle${competitor.index}`}
          className="w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none"
          placeholder="Describe the main assumption of analyzed company."
        />
        {/* Title end */}
        <div id={`descriptionModel${competitor.index}`} className="flex justify-start items-center mt-6">
          <img src="/competitors/model.svg" height={22} width={22} />
          <p className="text-primarydark ml-2">Business model</p>
        </div>
        <textarea
          value={competitor.businessModel}
          id={`placeholderModel${competitor.index}`}
          className="w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none"
          placeholder="How does the company business model look like?"
        />
        {/* Model end */}
        <div id={`descriptionProduct${competitor.index}`} className="flex justify-start items-center mt-6">
          <img src="/competitors/product1.svg" height={22} width={22} />
          <p className="text-primarydark ml-2">Product overview</p>
        </div>
        <textarea
          value={competitor.productOverview}
          id={`placeholderProduct${competitor.index}`}
          className="w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none"
          placeholder="What is the full range of products and services the company offers?"
        />
        {/* Product end */}
        <div id={`descriptionPromotion${competitor.index}`} className="flex justify-start items-center mt-6">
          <img src="/competitors/promotion.svg" height={22} width={22} />
          <p className="text-primarydark ml-2">Promotion strategy</p>
        </div>
        <textarea
          value={competitor.promotionStrategy}
          id={`placeholderPromotion${competitor.index}`}
          className="w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none"
          placeholder="What are the company marketing and promotional strategies?"
        />
        {/* Promotion end */}
        <div id={`descriptionStrengths${competitor.index}`} className="flex justify-start items-center mt-6">
          <img src="/competitors/strengths.svg" height={22} width={22} />
          <p className="text-primarydark ml-2">Company strengths</p>
        </div>
        <textarea
          value={competitor.companyStrengths}
          id={`placeholderStrengths${competitor.index}`}
          className="w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none"
          placeholder="What do your competitors do really well that differentiates them?"
        />
        {/* Strengths end */}
        <div id={`descriptionWeaknesses${competitor.index}`} className="flex justify-start items-center mt-6">
          <img src="/competitors/weaknesses.svg" height={22} width={22} />
          <p className="text-primarydark ml-2">Company Weaknesses</p>
        </div>
        <textarea
          value={competitor.companyWeaknesses}
          id={`placeholderWeaknesses${competitor.index}`}
          className="w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none"
          placeholder="What do the company customers complain about the most, and what products do they lack?"
        />
        {/* Weaknesses end */}
        <div id={`descriptionOpportunities${competitor.index}`} className="flex justify-start items-center mt-6">
          <img src="/competitors/opportunities2.svg" height={22} width={22} />
          <p className="text-primarydark ml-2">Opportunities</p>
        </div>
        <textarea
          value={competitor.opportunities}
          id={`placeholderOpportunities${competitor.index}`}
          className="w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none"
          placeholder="What distinguish your startup from this particular competitive company?"
        />
        {/* Opportunities end */}
      </div>
    </div>
  );
};

export default UniqueCompetitorsPage;
