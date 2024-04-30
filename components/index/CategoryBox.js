import { useState, useEffect, useRef } from "react";

export default function CategoryBox({ router, nightMode, kategoriler, setHandleCategory, handleCategory, newCategoriesSequence }) {

  const [scrollOffset, setScrollOffset] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);
  const categoryBoxRef = useRef(null);
  const categoryContainerRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState(null);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }

  const handleButtonClick = (buttonText) => {
    setHandleCategory(buttonText);
    /* newCategoriesSequence(kategoriler, buttonText); */
    /* setScrollOffset(0); */
    router.push(`/?kategori=`+buttonText);
  };

  useEffect(() => {
    const { kategori } = router.query;
    if(kategori !== handleCategory) {
      setHandleCategory(kategori);
    }
  }, [router])
  
  
  const renderButton = (key, buttonText) => {
    const isActive = handleCategory === buttonText;

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
      'category-button user-select-none',
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

  const checkCategoryLeftRight = () => {
    if (categoryContainerRef.current) {
      const containerWidth = categoryBoxRef.current.offsetWidth;
      const scrollWidth = categoryContainerRef.current.scrollWidth;

      if(scrollOffset == 0 && scrollOffset + containerWidth >= scrollWidth) {
        setShowLeftButton(false);
        setShowRightButton(false);
      }
      else if(scrollOffset == 0 && scrollOffset + containerWidth < scrollWidth) {
        setShowLeftButton(false);
        setShowRightButton(true);
      }
      else if(scrollOffset != 0 && scrollOffset + containerWidth < scrollWidth){
        setShowLeftButton(true);
        setShowRightButton(true);
      }
      else if(scrollOffset != 0 && scrollOffset + containerWidth >= scrollWidth) {
        setShowLeftButton(true);
        setShowRightButton(false);
      }
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    checkCategoryLeftRight();
  }, [scrollOffset, windowWidth, kategoriler]);

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
              {renderButton('01', 'hepsi')}
              {kategoriler.map((kategori, index) => (
                  renderButton(index, kategori)
              ))}
          </div>
        {showRightButton && 
        <button title="İleri" className={["arrow arrow-right", nightMode ? "arrow-shadow-black" : "arrow-shadow-white"].join(" ")} onClick={scrollRight}>➜</button>
        }
      </div>
  );
}
