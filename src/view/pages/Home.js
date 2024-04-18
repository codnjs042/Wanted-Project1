import React from 'react';
// import Ad from '../components/Ad';
// import Item from '../components/Item';
import instance from '../../network/axios';
import { useSelector, useDispatch } from 'react-redux';
import { getList, getItem } from '../../redux/slices/list';
import { Link } from 'react-router-dom'; 

const Home = () => {
    const list_arr = useSelector((state) => state.list.list_arr);
    console.log("list_arr", list_arr);
    const dispatch = useDispatch();
    React.useEffect(() => {
        instance().then(item => dispatch(getList(item)));
    },[dispatch]);

    return (
        <div>
            <h1>홈화면</h1>
            {list_arr.map((item) => {
                return(
                    <div key={item.id}>
                        <Link to="/detail" onClick={() => {dispatch(getItem([item]))}}>
                            {item.number} {item.title}
                        </Link>
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