import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddPost from './components/AddPost';
import DetailedBlogPost from './components/DetailedBlogPost';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/editpost/:id" element={<AddPost />} />
        <Route path="/blog/:id" element={<DetailedBlogPost/>} />
  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
