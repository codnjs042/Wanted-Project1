import React, {useContext} from 'react';
import Item from '../components/Item';
import {allInstance} from '../../network/axios';
import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../../redux/slices/list';
import nameContext from '../../context/nameContext';

const Home = () => {
    const {organ, repos} = useContext(nameContext);
    const list_arr = useSelector((state) => state.list.list_arr);
    console.log("list_arr", list_arr);
    const dispatch = useDispatch();
    React.useEffect(() => {
        allInstance().then(item => dispatch(getList(item)));
    },[dispatch]);

    return (
        <div>
            <h1>{organ} / {repos}</h1>
            <Item arr={list_arr} />
        </div>
    );
}

export default Home;