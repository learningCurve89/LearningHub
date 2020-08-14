import React from 'react';
import SideBar from './SideBar';
import Posts from './Posts';

class Home extends React.Component {
    render() {
        return (
            <div>
                <SideBar />
                <Posts />
            </div>
            
        )
    }
}

export default Home;