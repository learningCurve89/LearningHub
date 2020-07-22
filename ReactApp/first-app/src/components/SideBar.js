import React from 'react';
import { Row, Nav, Col, Tab,Table } from 'react-bootstrap';
function SideBar() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Coming up!</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Work Stuff</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <h2 className="">Things Coming up</h2>
                            <Table striped bordered hover size="sm" className="col-sm-9">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Date</th>
                                        <th>What to do</th>
                                        <th>Notes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    </tr>

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
    )
}
export default SideBar;