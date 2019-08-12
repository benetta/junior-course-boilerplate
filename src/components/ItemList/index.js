import React from 'react';
import ProductItem from 'csssr-school-product-card';

import './style.css'

const ratingComponent = ({ isFilled }) => {
  return <div className={isFilled && "starFill"} />;
};

function ItemList({ data }) {

	let items = data.map(item =>
		<li className='item' key={item.id}><ProductItem
			isInStock={Boolean(item.isInStock)}
			img={item.img}
			title={item.title}
			price={item.price}
			subPriceContent=" ₽"
			maxRating={Number(item.maxRating)}
			rating={Number(item.rating)}
			ratingComponent={ratingComponent} /></li>
		);
	
	return <ul className='item-list'>{items}</ul>
}

export default ItemList