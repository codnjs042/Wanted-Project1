import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getItem } from '../../redux/slices/list';
import { Link } from 'react-router-dom';
//import Ad from '../components/Ad';

const Item = ({arr}) => {
    const list_arr = useSelector((state) => state.list.list_arr);
    const dispatch = useDispatch();

    return (
        <div>
            {arr.map((item, index) => {
                const content = (
                    <div>
                        {item.number} {item.title}
                        {item.user.login} {item.created_at} {item.comments}
                    </div>
                );

                return (
                    <div key={item.id}>
                        {arr === list_arr ? (
                            <>
                                <Link to="/detail" onClick={() => dispatch(getItem([item]))}>
                                    {content}
                                </Link>
                                <hr/>
                            </>
                        ) : (
                            <>
                                <img src={item.user.avatar_url} alt="profile" />
                                {content}
                                <hr/>
                                {item.body}
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default Item;