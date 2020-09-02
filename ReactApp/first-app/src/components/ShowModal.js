import React from 'react';
import AddPostModal from './AddPostModal';
import { Button } from 'react-bootstrap';
function ShowModal(){
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
          <Button style={{ marginLeft: '640px', display: 'flex' }} variant="outline-success" 
          onClick={() => setModalShow(true)}>
            AddPost
          </Button>    
          <AddPostModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </>
      );
}
export default ShowModal;