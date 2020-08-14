import React from 'react';
import {Modal, Button} from 'react-bootstrap';
class FormContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        }
    }
    hideModalHandler = (event) => {
        this.setState({ showModal: false });
    }
    render() {
        return (
            <div>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Modal body text goes here.</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.hideModalHandler} variant="outline-error">Close</Button>
                        <Button variant="outline-success">Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        )
    }
}
export default FormContent;