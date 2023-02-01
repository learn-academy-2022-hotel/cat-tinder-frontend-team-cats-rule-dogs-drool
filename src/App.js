
import React, { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import CatEdit from "./pages/CatEdit"
import CatIndex from "./pages/CatIndex"
import CatNew from "./pages/CatNew"
import CatShow from "./pages/CatShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import './App.css';
import './index.css';
import mockCats from "./mockCats"
import { Routes, Route } from "react-router-dom"


const App = () => {
  const [cats, setCats] = useState(mockCats)
  return (
 <> <div className = "header">
 < Header /> 
 </div>
 <Routes>
    <Route path="/" element = {<Home/>} />
    <Route path="/catindex" element = {< CatIndex/>} />
    <Route path="/catshow" element = {< CatShow/>} />
    <Route path="/catnew" element = {< CatNew/>} />
    <Route path="/catedit" element = {<CatEdit/>} />
    <Route path="*" element = {< NotFound/>} />
 </Routes> 
  <div className = "footer">
 < Footer /> 
 </div>
 </>
  );
};

export default App;
