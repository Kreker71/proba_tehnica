import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div className="container form-container py-5">
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
                                <div class="form-group">
                                    <label for="nume">Nume</label>
                                    <input type="text" class="form-control" id="nume" aria-describedby="numeHelp"/>
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control" id="email" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Injuratura</label>
                                    <input type="text" class="form-control" id="injuratura" />
                                </div>
                                <button type="submit" class="btn btn-primary custom-btn-1">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
