import React from "react";
import { Counter } from "./components/Counter";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
           <Routes>
           <Route path="about" element={<Aboutus />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
           </Routes>
      </BrowserRouter>
    </React.Fragment>
    // <div>
    //   <Counter />
    // </div>
  );
};

export default App;

