import React from 'react';
// import Ad from '../components/Ad';
// import Item from '../components/Item';
import instance from '../../network/axios';

const Home = () => {
    const [listArr, setListArr] = React.useState([]);
    console.log("listArr", listArr)
    React.useEffect(() => {
        instance().then(item => setListArr(item));
    },[setListArr]);

    return (
        <div>
            <h1>홈화면</h1>
            {listArr.map((item) => {
                return(
                    <div key={item.id} onClick={() => {setListArr([item])}}>
                        {item.number} {item.title}
                        {item.user.login} {item.created_at} {item.comments}
                    </div>
                );
            })}
            {/* <Item/>
            <Ad /> */}
        </div>
    );
}

export default Home;