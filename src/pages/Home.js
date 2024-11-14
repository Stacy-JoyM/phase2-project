import React from 'react'
import LandingPage from '../components/LandingPage'

function Home({menu , isLoading}) {
  

  return (
    <>
      <>
        <LandingPage menu={menu} isLoading={isLoading}/>
      </>
  </>
  )
}

export default Home