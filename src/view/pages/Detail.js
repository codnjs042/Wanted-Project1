import React, {useContext} from 'react';
import Item from '../components/Item';
import {useSelector} from 'react-redux';
import nameContext from '../../context/nameContext';

const Detail = () => {
    const {organ, repos} = useContext(nameContext);
    const item_arr = useSelector((state) => state.list.item_arr);
    console.log("item_arr", item_arr);

    return (
        <div>
            <h1>{organ} / {repos}</h1>
            <Item arr={item_arr} />
        </div>
    );
}

export default Detail;