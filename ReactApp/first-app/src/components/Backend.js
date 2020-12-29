import React from 'react';
import PostCard from './PostCard';

class Backend extends React.Component {
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
                <PostCard />
            </div>
        )
    }
}

export default Backend;