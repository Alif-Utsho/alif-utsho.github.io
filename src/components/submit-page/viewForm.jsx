import React from 'react'

import { CopyToClipboard } from 'react-copy-to-clipboard'

class ViewForm extends React.Component {

    state = {
        name: '',
        link: '',
        btncopy: false
    }

    changeHandler = event => {
        this.setState({
            name: event.target.value,
            link: 'https://alif-utsho.github.io/#/' + event.target.value
        })
    }

    submitHandler = event => {
        if (event.target.value === 'Submit' && this.state.name !== '') {
            this.setState({ btncopy: true })
        }
        else if (event.target.value === 'Copy to Clipboard' && this.state.link !== '') {
            alert('The Link is copied to your clipboard\n\nNOW SEND THIS TO YOUR CRUSH')
        }
        else {
            alert('Enter a Nickname')
        }
    }

    render() {
        return (
            <div>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content modal-color">
                            <div className="modal-header">
                                <h5 className="modal-title fs-3" id="staticBackdropLabel">Enter his/her Nickname</h5>
                                <button
                                    type="button"
                                    className="btn-close fs-5"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="input-group-lg mb-3">
                                    <input
                                        type="text"
                                        className="form-control fw-bold"
                                        placeholder=" Sizukaa"
                                        aria-label="Username"
                                        name="name"
                                        aria-describedby="basic-addon1"
                                        value={this.state.btncopy ? this.state.link : this.state.name}
                                        onChange={this.changeHandler}
                                        disabled={this.state.btncopy}
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <CopyToClipboard text={this.state.link}
                                >
                                    <input
                                        type="button"
                                        className="btn btn-outline-warning fs-5"
                                        onClick={this.submitHandler}
                                        value={this.state.btncopy ? "Copy to Clipboard" : "Submit"}
                                    >
                                    </input>
                                </CopyToClipboard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewForm