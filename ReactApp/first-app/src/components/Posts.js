import React from 'react';
class Posts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts: [],
        }
    }    
    async componentDidMount(){
        const apiUrl = 'https://localhost:44381/api/Post';
        await fetch(apiUrl)
        .then(res=>res.json())
        .then(data=>this.setState({posts: data}))
    }
    render(){
        return(
            <div>
                {this.state.posts.map((post) => {
                    return <div key={post.postId}>
                    <p>{post.title}</p>
                    <p>{post.content}</p>
                </div>
            })}
            </div> 
        )
    }
}
export default Posts;