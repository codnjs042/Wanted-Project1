import React, {useContext, useEffect} from 'react';
import Item from '../components/Item';
import {useSelector, useDispatch} from 'react-redux';
import nameContext from '../../context/nameContext';
import { useParams } from 'react-router-dom';
import instance from '../../network/axios';
import { getItem } from '../../redux/slices/list';

const Detail = () => {
    const {number} = useParams();
    const {organ, repos} = useContext(nameContext);
    const item_arr = useSelector((state) => state.list.item_arr);
    console.log("item_arr", item_arr);
    const dispatch = useDispatch();
    useEffect(() => {
        instance(`/${number}`).then(item => dispatch(getItem([item])));
    },[dispatch, number]);

    return (
        <div>
            <h1>{organ} / {repos}</h1>
            <Item arr={item_arr} />
        </div>
    );
}

export default Detail;