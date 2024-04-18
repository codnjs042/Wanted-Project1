import React from 'react';
import Item from '../components/Item';
import {useSelector} from 'react-redux';

const Detail = () => {
    const item_arr = useSelector((state) => state.list.item_arr);
    console.log("item_arr", item_arr);

    return (
        <div>
            <h1>상세화면</h1>
            <Item arr={item_arr} />
        </div>
    );
}

export default Detail;