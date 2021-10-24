import React from 'react';
import PropTypes from 'prop-types';
import './GoodsItem.css';

const limitationTitle = (title) => {
    if (title.length <= 26 ) {
        return title;
    }

    return title.slice(0, 27) + '...'
}

function GoodsItem(props) {
    const { item } = props;

    const currentPrise = item.isDiscount ? 
        Math.round(parseFloat(item.price) * ( 1 - parseFloat(item.discount) * 0.01))
        : item.price;

    const oldPrise = item.isDiscount ? item.price : null;

    const title = limitationTitle(item.title);

    return (
        <div className='item'>
            <div className="item-img-block">
                <img className="item-img" src={item.img} alt="" />
            </div>
            <div className="item-price-block">
                <div className="item-current-price">{currentPrise}</div>
                {item.isDiscount && <div className="item-old-price">{oldPrise}</div>}
            </div>
            <div className="item-title" >{title}</div>
            {item.isDiscount && <div className="item-discount">{item.discount}</div>}
        </div>
    )
}

GoodsItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default GoodsItem

