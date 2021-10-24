import React from 'react';
import { useSelector } from 'react-redux';
import GoodsItem from './GoodsItem/GoodsItem';
import './GoodsList.css';

function GoodsList(props) {
    const list = useSelector(state => state.serviceList);

    return (
        <section className='block-goods'>
            <h2 className='block-goods-h2'>Приглядитесь к этим предложениям</h2>
            <ul className='block-goods-ul'>
                {
                    list.map( item => <li key={item.id} className='block-goods-ul'><GoodsItem item={item}/></li>)
                }
            </ul>
        </section>
    )
}

export default GoodsList;

