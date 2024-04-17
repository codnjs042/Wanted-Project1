import React from 'react';
import Ad from '../components/Ad';
import Item from '../components/Item';

const Home = () => {

    return (
        <div>
            <h1>홈화면</h1>
            <Item/>
            <Ad />
        </div>
    );
}

export default Home;