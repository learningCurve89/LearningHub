import React from 'react';
import { Row, Nav, Col, Tab, Table } from 'react-bootstrap';
class SideBar extends React.Component {
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
                                    <h2 className="">Posts</h2>
                                    <Table striped bordered hover size="sm" className="col-sm-9">
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Content</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr></tr>
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
            </div>
        )
    }

}
export default SideBar;