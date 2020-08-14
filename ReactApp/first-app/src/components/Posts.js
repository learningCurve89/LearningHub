import React from 'react';
import FormModal from './FormModal';
import { Row, Nav, Col, Tab, Table, Button } from 'react-bootstrap';
class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            showModal: false,
        }        
    }
    showModalHandler = (event) => {
        this.setState({ showModal: true });
    }
    hideModalHandler = (event) => {
        this.setState({ showModal: false });
    }
    async componentDidMount() {
        const apiUrl = 'https://localhost:44381/api/Post';
        await fetch(apiUrl)
            .then(res => res.json())
            .then(posts => this.setState({ posts: posts }))
    }
    render() {
        return (
            <div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Posts</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Work Stuff</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <h2 className="">Posts
                                    <Button
                                            style={{ marginLeft: '640px', display: 'flex' }} variant="outline-success"
                                            onClick={this.showModalHandler}>
                                            Add Post
                                    </Button>
                                        <FormModal
                                            showModal={this.state.showModal} hideModalHandler={this.hideModalHandler}>
                                        </FormModal>
                                    </h2>
                                    <Table striped bordered hover size="sm" className="col-sm-9">
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Content</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.posts.map(post => {
                                                return (
                                                    <tr key={post.postId}>
                                                        <td>{post.title}</td>
                                                        <td>{post.content}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </Table>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <h2>Second text</h2>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div >
        )
    }
}
export default Posts;