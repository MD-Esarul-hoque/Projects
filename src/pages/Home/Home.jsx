import React, { useState } from 'react'
import '../Home/Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import CEOteam from '../../components/CEOteam/CEOteam'

const Home = () => {
  const [category,setCategory]=useState("All")

  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
         <CEOteam />
        <AppDownload />
       
      
    </div>
  )
}

export default Home
