import React, { useState } from 'react'
import Header from '../Components/Header'
import Menu from './Menu'
import MenuExplore from '../Components/MenuExplore'
import MenuItems from '../Components/MenuItems'
import Footer from '../Components/Footer'
import Payment from '../Components/Payment'
import PlayStore from '../Components/PlayStore'


const Home = () => {
  const [category, setCategory] = useState("All")


  return (
    <div>
      <Header/>
      <MenuExplore category={category} setCategory={setCategory} />
      <MenuItems category={category} />
      <PlayStore/>
    </div>
  )
}

export default Home
