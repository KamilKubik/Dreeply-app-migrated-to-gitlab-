import React, { useCallback, useEffect, useRef, useState } from 'react';
import Router from 'next/router';
import { db, storage } from '../../../../../../lib/firebase';
import debounce from '../../../../../../utils/helpers';
// import Image from 'next/image';
import gsap, { Linear } from 'gsap';
import { isMobile } from 'react-device-detect';

const Competitor = ({ data, projectId, documentId, competitors, index, setCompetitors, provided }) => {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [employees, setEmployees] = useState('');
  const [revenue, setRevenue] = useState('');
  const [elementIndex, setElementIndex] = useState('');
  // Elements
  const [companyDescription, setCompanyDescription] = useState('');
  const [businessModel, setBusinessModel] = useState('');
  const [productOverview, setProductOverview] = useState('');
  const [promotionStrategy, setPromotionStrategy] = useState('');
  const [companyStrengths, setCompanyStrengths] = useState('');
  const [companyWeaknesses, setCompanyWeaknesses] = useState('');
  const [opportunities, setOpportunities] = useState('');

  useEffect(() => {
    setImage(data.image);
    setTitle(data.title);
    setLocation(data.location);
    setEmployees(data.employees);
    setRevenue(data.revenue);
    setElementIndex(data.index);
    // Elements
    setCompanyDescription(data.companyDescription);
    setBusinessModel(data.businessModel);
    setProductOverview(data.productOverview);
    setPromotionStrategy(data.promotionStrategy);
    setCompanyStrengths(data.companyStrengths);
    setCompanyWeaknesses(data.companyWeaknesses);
    setOpportunities(data.opportunities);
  }, [competitors]);

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setImage(await fileRef.getDownloadURL());

    // Firebase update
    const newCompetitorsArray = [...competitors];
    newCompetitorsArray[index] = {
      image: await fileRef.getDownloadURL(),
      title,
      location,
      employees,
      revenue,
      elementIndex,
      companyDescription,
      businessModel,
      productOverview,
      promotionStrategy,
      companyStrengths,
      companyWeaknesses,
      opportunities,
    };

    await db
      .collection('projects')
      .doc(projectId)
      .collection('competitors')
      .doc(Router.query.project)
      .collection('inputs')
      .doc(documentId)
      .update({ competitorsArray: newCompetitorsArray });
  };

  const onDataChange = (value, type) => {
    console.log(type);
    type === 'title' && setTitle(value);
    type === 'location' && setLocation(value);
    type === 'employees' && setEmployees(value);
    type === 'revenue' && setRevenue(value);
    // Elements
    type === 'companyDescription' && setCompanyDescription(value);
    type === 'businessModel' && setBusinessModel(value);
    type === 'productOverview' && setProductOverview(value);
    type === 'promotionStrategy' && setPromotionStrategy(value);
    type === 'companyStrengths' && setCompanyStrengths(value);
    type === 'companyWeaknesses' && setCompanyWeaknesses(value);
    type === 'opportunities' && setOpportunities(value);

    const newCompetitorsArray = [...competitors];
    newCompetitorsArray[index] = {
      title: type === 'title' ? value : title,
      location: type === 'location' ? value : location,
      employees: type === 'employees' ? value : employees,
      revenue: type === 'revenue' ? value : revenue,
      image: image,
      index: elementIndex,
      // Elements
      companyDescription: type === 'companyDescription' ? value : companyDescription,
      businessModel: type === 'businessModel' ? value : businessModel,
      productOverview: type === 'productOverview' ? value : productOverview,
      promotionStrategy: type === 'promotionStrategy' ? value : promotionStrategy,
      companyStrengths: type === 'companyStrengths' ? value : companyStrengths,
      companyWeaknesses: type === 'companyWeaknesses' ? value : companyWeaknesses,
      opportunities: type === 'opportunities' ? value : opportunities,
    };
    dataUpdate(newCompetitorsArray);
  };

  const dataUpdate = useCallback(
    debounce(async (newCompetitorsArray) => {
      // Firebase update
      await db
        .collection('projects')
        .doc(projectId)
        .collection('competitors')
        .doc(Router.query.project)
        .collection('inputs')
        .doc(documentId)
        .update({ competitorsArray: newCompetitorsArray });
    }, 300),
    []
  );

  const onCompetitorRemove = async (index) => {
    const newCompetitors = competitors.filter((element) => index !== element.index);
    // setCompetitors(newCompetitors);
    // Firebase update
    await db
      .collection('projects')
      .doc(projectId)
      .collection('competitors')
      .doc(Router.query.project)
      .collection('inputs')
      .doc(documentId)
      .update({ competitorsArray: newCompetitors });
  };

  const [dropdownHelper, setDropdownHelper] = useState(false);

  const initialContainer = document.getElementById(index);
  // Elements
  const descriptionTitle = document.getElementById(`descriptionTitle${index}`);
  const placeholderTitle = document.getElementById(`placeholderTitle${index}`);
  const descriptionModel = document.getElementById(`descriptionModel${index}`);
  const placeholderModel = document.getElementById(`placeholderModel${index}`);
  const descriptionProduct = document.getElementById(`descriptionProduct${index}`);
  const placeholderProduct = document.getElementById(`placeholderProduct${index}`);
  const descriptionPromotion = document.getElementById(`descriptionPromotion${index}`);
  const placeholderPromotion = document.getElementById(`placeholderPromotion${index}`);
  const descriptionStrengths = document.getElementById(`descriptionStrengths${index}`);
  const placeholderStrengths = document.getElementById(`placeholderStrengths${index}`);
  const descriptionWeaknesses = document.getElementById(`descriptionWeaknesses${index}`);
  const placeholderWeaknesses = document.getElementById(`placeholderWeaknesses${index}`);
  const descriptionOpportunities = document.getElementById(`descriptionOpportunities${index}`);
  const placeholderOpportunities = document.getElementById(`placeholderOpportunities${index}`);

  const dropDownElement = document.getElementById(`dropdown${index}`);
  const dataElement = document.getElementById(`data${index}`);

  useEffect(() => {
    gsap.set(dropDownElement, { rotation: '-90_cw' });
    if (!isMobile) {
      const containerElement = document.getElementById(`container${index}`);
      const competitorManager = document.getElementById(`manager${index}`);
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
      id={`container${index}`}
      className="w-full bg-background rounded-2xl p-4 ssmContainer:p-6 shadow-md overflow-hidden mt-8 smContainer:mt-8"
    >
      <div
        style={{ height: `${isMobile ? 40 : 0}`, top: `${isMobile ? '-6px' : '-6px'}` }}
        id={`manager${index}`}
        className="flex justify-between relative"
      >
        <img
          className="cursor-pointer"
          //   style={{ transform: 'rotate(-90deg)' }}
          onClick={onSectionDropdown}
          id={`dropdown${index}`}
          src="/competitors/dropdown.svg"
          height={18}
          width={18}
        />
        <div className="flex">
          <img className="cursor-pointer mr-2" src="/competitors/drag.svg" height={18} width={18} />
          <img
            className="cursor-pointer"
            onClick={() => onCompetitorRemove(data.index)}
            src="/competitors/remove.svg"
            height={18}
            width={18}
          />
        </div>
      </div>
      <div
        id={index}
        className="flex gap-6 flex-col justify-center items-center smContainer:gap-0 smContainer:grid smContainer:grid-cols-12fr"
      >
        <div className="smContainer:col-start-1 smContainer:col-end-4 justify-self-center flex justify-start items-center">
          {image !== '' ? (
            <label
              htmlFor={`upload-image${index}`}
              className="relative w-20 h-20 cursor-pointer rounded-full bg-white flex justify-center items-center"
            >
              <img src={image} height={55} width={55} />
            </label>
          ) : (
            <div>
              <label
                htmlFor={`upload-image${index}`}
                className="w-20 h-20 cursor-pointer rounded-full bg-primary flex justify-center items-center"
              >
                <img src="/competitors/empty-image.svg" height={65} width={65} />
              </label>
            </div>
          )}
          <input type="file" id={`upload-image${index}`} style={{ display: 'none', zIndex: 10 }} onChange={onFileChange} />
        </div>
        <div className="smContainer:col-start-5 smContainer:col-end-13 grid grid-cols-2fr grid-rows-2fr justify-items-center items-center gap-x-4 ssmContainer:gap-x-8 gap-y-2 ssmContainer:gap-y-4">
          <div>
            <input
              onChange={(e) => onDataChange(e.target.value, 'title')}
              value={title}
              className="bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none"
              placeholder="name"
            />
          </div>
          <div>
            <input
              onChange={(e) => onDataChange(e.target.value, 'location')}
              value={location}
              className="bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none"
              placeholder="location"
            />
          </div>
          <div>
            <input
              onChange={(e) => onDataChange(e.target.value, 'employees')}
              value={employees}
              className="bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none"
              placeholder="employees"
            />
          </div>
          <div>
            <input
              onChange={(e) => onDataChange(e.target.value, 'revenue')}
              value={revenue}
              className="bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none"
              placeholder="revenue"
            />
          </div>
        </div>
      </div>
      {/* Company description */}
      <div id={`data${index}`} className="w-full h-0 invisible">
        <div id={`descriptionTitle${index}`} className="flex justify-start items-center">
          <img src="/competitors/description.svg" height={22} width={22} />
          <p className="text-primarydark ml-2">Company description</p>
        </div>
        <textarea
          value={companyDescription}
          onChange={(e) => onDataChange(e.target.value, 'companyDescription')}
          id={`placeholderTitle${index}`}
          className="w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none"
          placeholder="Describe the main assumption of analyzed company."
        />
        {/* Title end */}
        <div id={`descriptionModel${index}`} className="flex justify-start items-center mt-6">
          <img src="/competitors/model.svg" height={22} width={22} />
          <p className="text-primarydark ml-2">Business model</p>
        </div>
        <textarea
          value={businessModel}
          onChange={(e) => onDataChange(e.target.value, 'businessModel')}
          id={`placeholderModel${index}`}
          className="w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none"
          placeholder="How does the company business model look like?"
        />
        {/* Model end */}
        <div id={`descriptionProduct${index}`} className="flex justify-start items-center mt-6">
          <img src="/competitors/product1.svg" height={22} width={22} />
          <p className="text-primarydark ml-2">Product overview</p>
        </div>
        <textarea
          value={productOverview}
          onChange={(e) => onDataChange(e.target.value, 'productOverview')}
          id={`placeholderProduct${index}`}
          className="w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none"
          placeholder="What is the full range of products and services the company offers?"
        />
        {/* Product end */}
        <div id={`descriptionPromotion${index}`} className="flex justify-start items-center mt-6">
          <img src="/competitors/promotion.svg" height={22} width={22} />
          <p className="text-primarydark ml-2">Promotion strategy</p>
        </div>
        <textarea
          value={promotionStrategy}
          onChange={(e) => onDataChange(e.target.value, 'promotionStrategy')}
          id={`placeholderPromotion${index}`}
          className="w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none"
          placeholder="What are the company marketing and promotional strategies?"
        />
        {/* Promotion end */}
        <div id={`descriptionStrengths${index}`} className="flex justify-start items-center mt-6">
          <img src="/competitors/strengths.svg" height={22} width={22} />
          <p className="text-primarydark ml-2">Company strengths</p>
        </div>
        <textarea
          value={companyStrengths}
          onChange={(e) => onDataChange(e.target.value, 'companyStrengths')}
          id={`placeholderStrengths${index}`}
          className="w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none"
          placeholder="What do your competitors do really well that differentiates them?"
        />
        {/* Strengths end */}
        <div id={`descriptionWeaknesses${index}`} className="flex justify-start items-center mt-6">
          <img src="/competitors/weaknesses.svg" height={22} width={22} />
          <p className="text-primarydark ml-2">Company Weaknesses</p>
        </div>
        <textarea
          value={companyWeaknesses}
          onChange={(e) => onDataChange(e.target.value, 'companyWeaknesses')}
          id={`placeholderWeaknesses${index}`}
          className="w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none"
          placeholder="What do the company customers complain about the most, and what products do they lack?"
        />
        {/* Weaknesses end */}
        <div id={`descriptionOpportunities${index}`} className="flex justify-start items-center mt-6">
          <img src="/competitors/opportunities2.svg" height={22} width={22} />
          <p className="text-primarydark ml-2">Opportunities</p>
        </div>
        <textarea
          value={opportunities}
          onChange={(e) => onDataChange(e.target.value, 'opportunities')}
          id={`placeholderOpportunities${index}`}
          className="w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none"
          placeholder="What distinguish your startup from this particular competitive company?"
        />
        {/* Opportunities end */}
      </div>
    </div>
  );
};

export default Competitor;
