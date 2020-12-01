import React from 'react';

const Plangere = ({ plangere }) => {
    return (
        <div className="plangere py-1">
            <div className="titlu-plangere">{plangere.titlu}</div>
            <div className="materie">({plangere.materie})</div>        
        </div>
    )
}

export default Plangere; 