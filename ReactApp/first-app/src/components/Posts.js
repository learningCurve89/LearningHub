import React from 'react';
import ShowModal from './ShowModal';
import { Row, Nav, Col, Tab, Table } from 'react-bootstrap';
class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
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
                                    <ShowModal/>
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