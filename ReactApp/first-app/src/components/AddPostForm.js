import React from 'react';
class AddPostForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        const title= event.target.title.value;
        const content = event.target.content.value;

        fetch('https://localhost:44381/api/Post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({title: title, content: content}),
        })
            .then(response => response.json());
        }
        render() {
            return (
                <form onSubmit={this.handleSubmit} >
                    <label htmlFor="title">Enter Title</label>
                    <input id="title" name="title" type="text" />

                    <label htmlFor="content">Enter Body</label>
                    <input id="content" name="content" type="text" />

                    <button>Send data!</button>
                </form>
            );
        }
    }

    export default AddPostForm;