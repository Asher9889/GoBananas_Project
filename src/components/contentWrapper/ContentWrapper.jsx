import React from 'react';
import "./style.css";

const ContentWrapper = ({children}) => {
  return (
    <div class='contentWrapper'>
      {children}
    </div>
  )
} 

export default ContentWrapper