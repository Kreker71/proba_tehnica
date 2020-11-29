import React from 'react';
import Plangere from './Plangere'; 

const ListaPlangeri = ({ plangeri }) => {
    return (
        plangeri.map(plangere => {
            return <Plangere key={plangere.id} plangere={plangere} />
        })
    )
}

export default ListaPlangeri; 