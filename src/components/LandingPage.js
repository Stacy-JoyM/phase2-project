import React, { useEffect, useState } from 'react';
import "./LandingPage.css"

function LandingPage({ menu , isLoading}) {
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

  // If loading or no menu data, show a loading message
  if (isLoading) {
    return <div>Loading...</div>;
  }

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

