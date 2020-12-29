import React from 'react';
import { Form, Button } from 'react-bootstrap';
class AddPostForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        const title = event.target.title.value;
        const content = event.target.content.value;
        const summary = event.target.summary.value;
        const theme = event.target.theme.value;

        fetch('https://localhost:44381/api/Post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: title, content: content, summary: summary, theme: theme}),
        })
            .then(response => response.json());
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit} >
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control id="title" name="title" type="text" />
                </Form.Group>
                <Form.Group controlId="theme">
                    <Form.Label>Theme</Form.Label>
                    <Form.Control id="theme" name="theme" type="text" />
                </Form.Group>
                <Form.Group constrolId="content">
                    <Form.Label>Enter Content</Form.Label>
                    <Form.Control as="textarea" rows="3" id="content" name="content" type="text" />
                </Form.Group>
                <Form.Group constrolId="summary">
                    <Form.Label>Enter Summary</Form.Label>
                    <Form.Control as="textarea" rows="3" id="summary" name="summary" type="text" />
                </Form.Group>
                <Button style={{ marginLeft: '640px', display: 'flex' }} variant="outline-success"
                type="submit">Post it!</Button>
            </Form>
        );
    }
}

export default AddPostForm;