import { useAppContext } from "@/context/ContextProvider"

import { useState } from "react";

import { useRef } from 'react';
import { useEffect } from 'react';

export default function CategoryBox({ kategoriler }) {

  const { nightMode } = useAppContext();
  const [activeButton, setActiveButton] = useState('Tümü');

  const [scrollOffset, setScrollOffset] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(true);
  const [showRightButton, setShowRightButton] = useState(true);
  const categoryBoxRef = useRef(null);
  const categoryContainerRef = useRef(null);


  function buyukBasla(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function kucukBasla(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  }

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    setClickedOffset(scrollOffset);
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
  - kategoriler'e göre oluştur v
  - css'lerini düzenle V~
  
  
  - mysql'den tıklanılan kategorinin makalalerini çek
  */

  useEffect(() => {
    
    if (categoryContainerRef.current) {

      const containerWidth = categoryBoxRef.current.offsetWidth;
      const scrollWidth = categoryContainerRef.current.scrollWidth;

      if(scrollOffset == 0) {
        setShowLeftButton(false);
        setShowRightButton(true);
      }
      else if(scrollOffset != 0 && scrollOffset + containerWidth < scrollWidth){
        setShowLeftButton(true);
        setShowRightButton(true);

        /* setScrollOffset(clickedOffset); */
      }
      else if(scrollOffset + containerWidth >= scrollWidth) {
        setShowLeftButton(true);
        setShowRightButton(false);

        /* setScrollOffset(clickedOffset); */
      }

    }
  }, [scrollOffset]);

  const scrollLeft = () => {
    setScrollOffset(scrollOffset - 100);
  };

  const scrollRight = () => {
    setScrollOffset(scrollOffset + 100);
  };

  
  return (
      <div className="category-box" ref={categoryBoxRef}>
        {showLeftButton && 
        <button title="Geri" className={["arrow arrow-left", nightMode ? "arrow-shadow-black" : "arrow-shadow-white"].join(" ")} onClick={scrollLeft}>➜</button>
        }
          <div className="category-container" style={{ transform: `translateX(-${scrollOffset}px)` }} ref={categoryContainerRef}>
            {renderButton('01', 'Tümü')}
              {kategoriler.map((kategori, index) => (
                  renderButton(index, kategori)
              ))}
              {renderButton('02', 'Tü')}
              {renderButton('03', 'Tüü')}
              {renderButton('04', 'Tüüü')}
              {renderButton('05', 'Tüüüü')}
          </div>
        {showRightButton && 
        <button title="İleri" className={["arrow arrow-right", nightMode ? "arrow-shadow-black" : "arrow-shadow-white"].join(" ")} onClick={scrollRight}>➜</button>
        }
      </div>
  );
}
