import React ,{useState, useEffect} from 'react'
import LandingPage from '../components/LandingPage'
import CategorySlider from "../components/CategorySlider"

function Home() {
  const [menu, setMenu] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    fetch('http://localhost:5000/menu')
    .then((response) => response.json())
    .then((data) => {
      setMenu(data)
      setIsLoading(false); 
    })}, [])


  return (
    <>
    {isLoading ? (
      <p>Loading...</p> // Show loading message while fetching
    ) : (
      <>
        <LandingPage menu={menu} isLoading={isLoading} />
        <CategorySlider menu={menu} />
      </>
    )}
  </>
  )
}

export default Home