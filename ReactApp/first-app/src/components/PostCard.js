import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

class PostCard extends React.Component {
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
                {this.state.posts.map(post => {
                    return (
                        <CardGroup style={{border:"solid", borderColor:"black", padding:"5px", margin:"5px"}}>
                            <Card border="dark" style={{ maxWidth:"30%", marginLeft:"2px" }} key={post.postId}>
                                <Card.Header>Post ID: {post.postId}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{post.title}</Card.Title>
                                    <Card.Text>
                                        {post.summary}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    )
                })}
            </div>
        )
    }
}

export default PostCard;