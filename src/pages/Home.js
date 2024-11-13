import React from 'react'
import LandingPage from '../components/LandingPage'
import CategorySlider from "../components/CategorySlider"

function Home({menu , isLoading}) {
  

  return (
    <>
      <>
        <LandingPage menu={menu} isLoading={isLoading}/>
        <CategorySlider menu={menu} />
      </>
  </>
  )
}

export default Home