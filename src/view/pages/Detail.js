import React from 'react';
import {useSelector} from 'react-redux';

const Detail = () => {
    const item_arr = useSelector((state) => state.list.item_arr);
    console.log("item_arr", item_arr);

    return (
        <div>
            <h1>상세화면</h1>
            {item_arr.map((item) => {
                return(
                    <div key={item.id}>
                        <img src={item.user.avatar_url} alt="profile" />
                        {item.number} {item.title}
                        {item.user.login} {item.created_at} {item.comments}
                        {item.body}
                    </div>
                );
            })}
        </div>
    );
}

export default Detail;