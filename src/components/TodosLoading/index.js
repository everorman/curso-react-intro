import React from 'react';
import './todosLoading.css';
export const TodosLoading = ({ }) => {


  return (
    <div className="container-loading">
      <div className="loader">
        <div className="crystal"></div>
        <div className="crystal"></div>
        <div className="crystal"></div>
        <div className="crystal"></div>
        <div className="crystal"></div>
        <div className="crystal"></div>
      </div>
    </div>
  );
};
