import React from 'react';

const Primarybutton = ({children}) => {
    return (
        <button 
        className="btn btn-warning bg-gradient-to-r from-warning to-error text-white">{children}</button>
    );
};

export default Primarybutton;