import { useAppContext } from "@/context/ContextProvider"

import { useState } from "react";

import { useRef } from 'react';
import { useEffect } from 'react';

export default function CategoryBox({ kategoriler }) {

  const { nightMode } = useAppContext();
  const [activeButton, setActiveButton] = useState('Tümü');

  function buyukBasla(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function kucukBasla(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  }

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  
  
  const renderButton = (key, buttonText) => {
    const isActive = activeButton === buttonText;

    const isActiveButton = (() => {
      if(!isActive) {
        if(nightMode) {
          return 'category-button-night';
        }
        else {
          return 'category-button-normal';
        }
      }
      else {
        return '';
      }
    })();
    const isNormalActive = isActive ;
    const isNightActive = isActive && nightMode;

    const buttonClasses = [
      'category-button',
      isActiveButton,
      isNormalActive ? 'cb-normal-active' : '',
      isNightActive ? 'cb-night-active' : ''
    ].join(' ');

    return (
      <button
        key={key}
        className={buttonClasses}
        onClick={() => handleButtonClick(buttonText)}
      >
        {buttonText}
      </button>
    );
  };

  /*
  - kategoriler'e göre oluştur
  - css'lerini düzenle V
  
  
  - mysql'den tıklanılan kategorinin makalalerini çek
  */





  
  return (
    <>
    
    <div className="category-container">
      {<button className="arrow-left">{"<"}</button>}
      <p>toLowerCase lorem lore m lorem mrm mrmr mr </p>
      {<button className="arrow-right">{">"}</button>}
    </div>

    {/* <div className="category-box">
      {showLeftButton && <button className="arrow-left" onClick={scrollLeft}>{"<"}</button>}
      {renderButton('01', 'Tümü')}
        {renderButton('02', 'Tü')}
        {renderButton('03', 'Tüü')}
        {renderButton('04', 'Tüüü')}
        {renderButton('05', 'Tüüüü')}
        {kategoriler.map((kategori, index) => (
          <button key={index} className="category-button">
            {kategori}
          </button>
        ))}
      {showRightButton && <button className="arrow-right" onClick={scrollRight}>{">"}</button>}
    </div> */}

    </>
  );
}
