import { useAppContext } from "@/context/ContextProvider"
import { useState } from "react";

export default function CategoryBox() {

  const { nightMode } = useAppContext();
  const [activeButton, setActiveButton] = useState('all');

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const renderButton = (buttonId, buttonText) => {
    const isActive = activeButton === buttonId;
    const buttonClasses = [
      nightMode ? 'category-button category-button-night' : 'category-button category-button-normal',
      isActive ? 'cb-normal-active' : 'cb-night-active'
    ].join(' ');

    return (
      <button
        className={buttonClasses}
        onClick={() => handleButtonClick(buttonId)}
      >
        {buttonText}
      </button>
    );
  };

  return (
    <div className="category-box">
      {renderButton('all', 'Tümü')}
      {renderButton('tech', 'Teknoloji')}
      {renderButton('sports', 'Spor')}
      {renderButton('life', 'Yaşam')}
      {renderButton('health', 'Sağlık')}
      {renderButton('goods', 'Mal')}
      {renderButton('scammers', 'Dolandırıcı')}
      {renderButton('profanity', 'Küfür')}
    </div>
  )
}
