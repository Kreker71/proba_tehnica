import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div className="container py-5">
                <div className="box shadow p-3 mb-5 bg-white rounded">
                    <div className="row">
                        <div className="col">
                            <div className="row form-text-1 py-2 mx-3">
                                Ai tupeu și crezi că poți să aduci îmbunătățiri la platformă?
                            </div>
                            <div className="row form-text-2 py-3 mx-3">
                                Trimite-ne un mail și roagă-te să nu ne apuce râsul când vedem ce îți trece prin cap.
                            </div>
                        </div>
                        <div className="col">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="nume">Nume</label>
                                    <input type="text" className="form-control" id="nume" aria-describedby="numeHelp"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Injuratura</label>
                                    <input type="text" className="form-control" id="injuratura" />
                                </div>
                                <button type="submit" className="btn btn-primary custom-btn-1">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
