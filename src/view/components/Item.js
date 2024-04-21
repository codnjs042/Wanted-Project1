import React from 'react';
import { useSelector } from 'react-redux';
import Ad from '../components/Ad';
import ReactMarkdown from 'react-markdown';
import { StyledDiv, StyledLink, StyledContent, StyledUser } from '../styles/styled-components';

const Item = ({arr}) => {
    const list_arr = useSelector((state) => state.list.list_arr);

    const formatDate = (dateTime) => {
        const date = new Date(dateTime);
        const formattedDate = `${date.getFullYear()}년 ${String(date.getMonth() + 1).padStart(2, '0')}월 ${String(date.getDate()).padStart(2, '0')}일`;
        return formattedDate;
    }

    return (
        <StyledDiv>
            {arr.map((item, index) => {
                const content = (
                    <StyledContent>
                        <div id="right">
                            <div id="top">
                                #{item.number} {item.title}
                            </div>
                            <div id="down">
                                작성자: {item.user.login}, 작성일: {formatDate(item.created_at)}
                            </div>
                        </div>
                        <div id="left">
                            코멘트: {item.comments}
                        </div>
                    </StyledContent>
                );

                return (
                    <div key={item.id}>
                        {arr === list_arr ? (
                            <>
                                <StyledLink to={`/detail/${item.number}`}>
                                    {content}
                                </StyledLink>
                                <hr/>
                                {(index % 4 === 3) && <Ad />}
                            </>
                        ) : (
                            <>  
                                <StyledUser>
                                <img src={item.user.avatar_url} alt="profile" />
                                <div id="right2">
                                {content}
                                <hr/>
                                </div>
                                </StyledUser>
                                <ReactMarkdown>{item.body}</ReactMarkdown>
                            </>
                        )}
                    </div>
                );
            })}
        </StyledDiv>
    );
}

export default Item;