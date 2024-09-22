import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Features from './Components/Features'
import VideoSection from './Components/VideoSection';
import Footer from './Components/Footer'
import Signup from './Components/Signup'
import './App.css'
import './Index.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Features />
              <div id="watch-demo-section">
                <VideoSection />
              </div>
            </>
          } />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
