
// import './App.css'

import React, {useState} from 'react'
import Navbar from './Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
// import NewsItem from './components/NewsItem'

 const App = ()=>{
  const apiKey = import.meta.env.VITE_API_KEY
  const [progress,setProgress]= useState(0)
  
    return (
      <Router>

      <Navbar/>
      <LoadingBar
        color="#f11946"
        progress={progress}/>
       <Routes>
          <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="catnews" category='general' country='us' pageSize={10}/>}/>
          
         {/* <Route path="/home" element={<News setProgress={setProgress} apiKey={apiKey} key="home" category='general' country='us' pageSize={5}/>}/> */}
          <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" category='general' country='us' pageSize={5}/>}/>
          <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" category='business' country='us' pageSize={5}/>}/>
           <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" category='sports' country='us' pageSize={5}/>}/>
          <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" category='entertainment' country='us' pageSize={5}/>}/>
          <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" category='health' country='us' pageSize={5}/>}/>
          <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" category='science' country='us' pageSize={5}/>}/>
          <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" category='technology' country='us' pageSize={5}/>}/> 
        </Routes> 
      </Router>
      
    )
}

export default App
