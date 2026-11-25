import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import UserProfile from './components/UserProfile.jsx'
import { userContext } from './components/UserContext.jsx'
import UserGreeting from './components/UserGreeting.jsx'
import Header from './components/part2/Header.jsx'
import Content from './components/part2/Content.jsx'
import Footer from './components/part2/Footer.jsx'
import { ThemeProvider } from "./components/part2/ThemeContext.jsx";

//part 1
// function App() {
// const userName='alice'
//   return (
//     <>
//     <userContext.Provider value={userName}>
//     <UserProfile /></userContext.Provider>
//      <userContext.Provider value={userName}>
//     <UserGreeting /></userContext.Provider>
//     </>
//   )
// }

//part 2
 function App() {
 
   return (
     <>
    <ThemeProvider>
      <Header />
      <Content />
      <Footer />
    </ThemeProvider>
     </>
   )
 }

export default App
