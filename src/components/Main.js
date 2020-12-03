import React, {useState} from 'react'; 
// import SvgDrawing from './SvgDrawing';
import  SvgDrawing from '../assets/svgDrawing.png';
import PopUp from './PopUp';

const Main = () => {

    const [show, setShow] = useState(false);

    
    return (
            <div className="container main-1 py-5">
                <div className="row">
                    <div className="col-sm-6 col-lg-7 box">
                        <div className="row py-5 first-row mb-5">
                            Cumpăratul de teme nu a fost niciodată mai simplu!
                        </div>
                        <div className="row-5 py-5 second-row mb-5">
                            Platforma ideala pentru studenții de la Politehnică cu portofele pline, care au nevoie urgent de un înger care să le repare nota de intrare în examen.
                        </div>
                        <div className="row py-5">
                            <div className="col-xl-6 mb-1">
                                <button type="button" className="btn btn-block btn-primary custom-btn-1" onClick={() => setShow(true)}>
                                    Vreau sa cumpar teme
                                </button>
                            </div>
                            <div className="col-xl-6 mb-1">
                                <button type="button" className="btn btn-block btn-primary custom-btn-2">
                                    Vreau sa fac teme pentru altii
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-sm-6 col-lg-4 box" id="svg">
                        <SvgDrawing />
                    </div> */}
                    <div class="col-sm-6 col-lg-5">
                        <img src={SvgDrawing} className="img-fluid d-block m-auto" alt="Responsive image"/>
                    </div>
                </div>
                <PopUp show={show} setShow={setShow}/>
            </div>
    )
}

export default Main;