import React from 'react';
import Plangere from './Plangere'; 

const ListaPlangeri = ({ plangeri, handleDelete }) => {

    return (
        plangeri?.map(plangere => {
            return <Plangere key={plangere.id} plangere={plangere} handleDelete={handleDelete} />
        })
    )
}

export default ListaPlangeri; 