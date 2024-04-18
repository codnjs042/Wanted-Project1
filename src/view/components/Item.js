import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Ad from '../components/Ad';

const Item = ({arr}) => {
    const list_arr = useSelector((state) => state.list.list_arr);
    
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
                                <Link to={`/detail/${item.number}`}>
                                    {content}
                                </Link>
                                <hr/>
                                {(index % 4 === 0 && index !== 0) && <Ad />}
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