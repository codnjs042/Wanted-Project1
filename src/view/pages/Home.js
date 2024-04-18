import React from 'react';
import Item from '../components/Item';
import instance from '../../network/axios';
import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../../redux/slices/list';


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
            <Item arr={list_arr} />
        </div>
    );
}

export default Home;