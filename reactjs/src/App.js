import React from "react";
import HeaderComponent from "./components/HeaderComponents";
import ConceptComponent from "./components/ConceptComponent";
import FunctionalComponents from './components/DataComponent/FunctionalCompontents'
import EmployeeFormComponet from './components/EmployeeFormComponent'
import "./App.css";

const App = () => {
  return (
    // <div>
    //   <HeaderComponent />
    //   <ConceptComponent />
    // </div>

    // <div>
    //   <FunctionalComponents></FunctionalComponents>
    // </div>

    <div>
       <EmployeeFormComponet></EmployeeFormComponet>
    </div>
  );
};

export default App;
