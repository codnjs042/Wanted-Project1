import React, {useContext, useEffect} from 'react';
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

    useEffect(() => {
        const startTime = performance.now();
        allInstance().then(item => {
            dispatch(getList(item));
            const endTime = performance.now();
            const elapsedTime = endTime - startTime;
            console.log("Render Time:", elapsedTime); // 병렬 요청을 통해 렌더링 작업을 3.6초에서 0.5초로 단축 : 약 86% 성능 향상
        });
    }, [dispatch]);

    return (
        <div>
            <h1>{organ} / {repos}</h1>
            <Item arr={list_arr} />
        </div>
    );
}

export default Home;