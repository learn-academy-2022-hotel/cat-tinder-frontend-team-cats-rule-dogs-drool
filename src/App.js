
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


// Need to create a test for catindex and catshow once merging is complete 

const App = () => {
  const [cats, setCats] = useState(mockCats)

  const createNewCat = (newCatObject) => {
    console.log("New Cat Obj: ", newCatObject)
  }
  return (
 <> 
 < Header /> 
 <Routes>
    <Route path="/" element = {<Home/>} />
    <Route path="/catindex" element = {< CatIndex cats={cats} />} />
    <Route path="/catshow/:id" element = {< CatShow cats={cats} />} />
    <Route path="/catnew" element = {< CatNew createNewCat={createNewCat}/>} />
    <Route path="/catedit" element = {<CatEdit/>} />
    <Route path="*" element = {< NotFound/>} />
 </Routes> 
 < Footer /> 
 
 </>
  );
  
};

export default App;
