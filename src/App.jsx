import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/header/Header'
import Body from './Components/Body/Body'
import Footer from './Components/Footer/Footer'
import SearchBar from './Components/SearchBar/SearchBar'


function App() {
 

  return (
    <>
    
     <Header/>
      <SearchBar />
     <Body/>
     <Footer />
    </>
  )
}

export default App
