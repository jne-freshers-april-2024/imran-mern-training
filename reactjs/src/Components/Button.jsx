import React, { Component } from 'react';

const Button = (props) => {

   return (
      <button type='button' onClick={props.onClick}>
          {props.children}
      </button>
    );
  }

export default Button;

