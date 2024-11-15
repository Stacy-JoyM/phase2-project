import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategorySlider from './CategorySlider';
import "./LandingPage.css"

function LandingPage({ menu, isLoading }) {
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
  const navigate = useNavigate();

  // Filter menu items that are on offer
  const onOfferMeals = menu.filter(item => item.on_offer);

  useEffect(() => {
    // Set up an interval to change the displayed item every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentOfferIndex(prevIndex => (prevIndex + 1) % onOfferMeals.length);
    }, 4000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [onOfferMeals.length]);
   
  // Get the currently displayed offer item
  const currentOffer = onOfferMeals[currentOfferIndex];

  // If loading or no menu data, show a loading message
  if (isLoading) {
    return <div>Loading...</div>;
  }
  //function that redirects to cart 
   // Handle Order Button Click
   const handleOrderClick = () => {
    // Navigate to Order page and pass the current item's id
    navigate('/menu');
  };

  return (
    <div className="landing-div" style={{ backgroundImage: `url(${currentOffer.image})` }}> 
      <div className="text-content">
        <h1>{currentOffer.name}</h1>
        <p>{currentOffer.long_description}</p>
        <div className="action-landing"> 
          <h5>Now ${currentOffer.price}</h5>
          <button className="btn btn-success button"
                  onClick={handleOrderClick}>Order Now</button>
        </div>
      </div>
         <CategorySlider menu={menu} />
    </div>
  );
}

export default LandingPage;

