import React from 'react'
import PeoplePage from './pages/profile'
import Nav from './components/navBar/Nav'
import HomePage from './pages/HomePage/HomePage'



const App = () => {
  return (
    <>
    <Nav/>
    <HomePage></HomePage>
    <PeoplePage />
    </>
  )
}

export default App