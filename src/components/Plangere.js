import React from 'react';

const Plangere = ({ plangere, handleDelete }) => {

    // const deletePlangere = () => {
    //     setPlangeri(plangeri?.filter((el) => el.id !== plangere.id));
    // };

    return (
        <div className="plangere d-flex py-1">
            <div className="mr-auto p-2">
                <div className="titlu-plangere">{plangere.titlu}</div>
                <div className="materie">({plangere.materie})</div>
            </div>

            <div className="p-2">
                <button onClick={ ()=> handleDelete(plangere.id) } class="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i class="fa fa-trash"></i></button>
            </div>        
        </div>
    )
}

export default Plangere; 