import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostAPITest from './components/PostAPITest';
import useCustome from './hooks/use-custome';
const App = ()=>{
  const counterInc = useCustome(true);
  const counterDec = useCustome(false);
    return (
       <div className='div'>
         <h2>Increment Counter : {counterInc}</h2>
         <h2>Decrement Counter : {counterDec}</h2>
       </div>
      //  <div>
      //      <PostAPITest/>
      //  </div>
    );
  }

export default App;

