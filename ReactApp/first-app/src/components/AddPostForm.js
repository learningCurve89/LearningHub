import React from 'react';
class AddPostForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('https://localhost:44381/api/Post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
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