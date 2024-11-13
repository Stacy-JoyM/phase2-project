import React, { useEffect, useState } from 'react';
import "./LandingPage.css"

function LandingPage({ menu }) {
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
  
  // Filter menu items that are on offer
  const onOfferMeals = menu.filter(item => item.on_offer);

  useEffect(() => {
    // Set up an interval to change the displayed item every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentOfferIndex(prevIndex => (prevIndex + 1) % onOfferMeals.length);
    }, 3000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [onOfferMeals.length]);

  // Get the currently displayed offer item
  const currentOffer = onOfferMeals[currentOfferIndex];

  return (
    <div className="d-flex justify-content-around align-items-center landing-div"> 
        <div className="w-50 ms-5">
            <h1> Check out this week's offer</h1>
            <h5>{currentOffer.name}</h5>
            <p>{currentOffer.description}</p>
            <p>${currentOffer.price}</p>
        </div>
        <div className="w-50">
          <img src={currentOffer.image} alt={currentOffer.name} className="landing-image" ></img>
        </div>
     
    </div>
  );
}

export default LandingPage;

