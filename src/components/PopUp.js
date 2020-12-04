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
    const [materieCurenta, setMaterieCurenta] = useState(materii[0]);
    const titluPlangereRef = useRef();

    // const materieRef = useRef();

    useEffect(() => {
      const storedPlangeri = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)); 
      if(storedPlangeri) 
        setPlangeri(storedPlangeri); 
    }, []);

    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(plangeri))
    }, [plangeri]);


    const handleAddPlangere = (e) => {
      e.preventDefault();
      const titlu = titluPlangereRef.current.value;
      const materie = materieCurenta; 
      // console.log(materie);
      // console.log(titlu);
      if(titlu === ""){
        alert("Titlul proiectului este invalid");
        return;
      } 
      setPlangeri(prevPlangeri => {
        return [...prevPlangeri, {id: uuidv4(), materie: materie, titlu: titlu}]
      })
      titluPlangereRef.current.value = null;
    }

    // plangeri.pop()

    const handleChangeMaterie = (e) => {
      setMaterieCurenta(e.target.value);
    };

    const handleDelete = (id) => {
      setPlangeri(plangeri?.filter((el) => el.id !== id));
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
                    <select onChange={handleChangeMaterie} id="inputState" className="form-control">
                        {materii.map(materie => (
                          <option key={materie} value={materie}>
                            {materie}
                          </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                  <input ref={titluPlangereRef} type="text1" className="form-control" id="inputPassword4" placeholder="Titlul proiectului"/>
                </div>
                <div className="d-flex justify-content-center">
                  <button onClick={handleAddPlangere} type="submit" className="btn btn-primary  custom-btn-1">Incarca</button>
                </div>
                
            </form>
          </Modal.Body>
          <div className="popup-header2">Plangerile introduse pana acum</div>
          <Modal.Footer className="popup-footer">
            <div className="container d-flex flex-column bd-highlight mb-3 py-4">
                <ListaPlangeri plangeri={plangeri} handleDelete={handleDelete}/>
            </div>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default PopUp;
