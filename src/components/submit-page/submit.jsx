import React from 'react'

import propose from '../../assets/propose.jpg'
import ViewForm from './viewForm'

class Submit extends React.Component {

    state = {
        name: ''
    }

    proposeHandler = (event) => {
    }

    

    render() {
        return (
            <>
                <section id="header" className="d-flex align-items-center">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-10 mx-auto">
                                <div className="row">
                                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                        <h1 className="fw-bold">Want to <span className="propose fw-bold display-4">Propose</span> Someone !!</h1>
                                        <h4 className="my-3 fw-light">
                                            Then why don't you Hit the Propose Button
                                        </h4>
                                        <div className="mt-3">
                                            <button
                                                type="button"
                                                data-bs-toggle="modal"
                                                data-bs-target="#staticBackdrop"
                                                className="btn btn-lg btn-danger button"
                                            >
                                                Propose
                                            </button>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                                        <img
                                            src={propose}
                                            className="img-fluid"
                                            alt="Propose Me"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>
                <ViewForm proposeHandler={ this.proposeHandler }/>
            </>
        )
    }
}

export default Submit