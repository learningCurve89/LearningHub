import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import AddPostForm from './AddPostForm';
function AddPostModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add a Post
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddPostForm/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default AddPostModal;