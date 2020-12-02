import React, { useState, useRef, useEffect } from "react";
import { Modal } from "react-bootstrap";
import ListaPlangeri from "./ListaPlangeri";
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = "probaTehnicaLSAC";

const PopUp = (props) => {

    const { show, setShow } = props;
    const handleClose = () => setShow(false);

    const materii = ["PC", "USO", "Mate1", "Mate2"];
    const [plangeri, setPlangeri] = useState([]);
    const titluPlangereRef = useRef();
    const materieRef = useRef();

    useEffect(() => {
      const storedPlangeri = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)); 
      if(storedPlangeri) 
        setPlangeri(storedPlangeri); 
    }, []);

    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(plangeri))
    }, [plangeri]);


    const handleAddPlangere = (e) => {
      const titlu = titluPlangereRef.current.value;
      const materie = materieRef.current.value; 
      console.log(materie);
      console.log(titlu);
      if(titlu === "") return 
      setPlangeri(prevPlangeri => {
        return [...prevPlangeri, {id: uuidv4(), materie: materie, titlu: titlu}]
      })
      titluPlangereRef.current.value = null;
    }

    return (
      <>
        <Modal show={show} onHide={handleClose} className="popup">
          <Modal.Header closeButton className="popup-header">
            <Modal.Title>
                Exprimă-ți frustrările
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
                <div className="form-group">
                    <select id="inputState" className="form-control">
                        {materii.map(materie => (
                          <option ref={materieRef} key={materie} value={materie}>{materie}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <input ref={titluPlangereRef} type="text1" className="form-control" id="inputPassword4" placeholder="Titlul proiectului"/>
                </div>
                <button onClick={handleAddPlangere} type="submit" className="btn btn-primary custom-btn-1 justify-content-center">Incarca</button>
            </form>
          </Modal.Body>
          <Modal.Footer className="popup-footer">
            <div className="popup-header2">Plangerile introduse pana acum</div>
            <div className="container d-flex flex-column bd-highlight mb-3 py-4">
                <ListaPlangeri plangeri={plangeri}/>
            </div>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default PopUp;
