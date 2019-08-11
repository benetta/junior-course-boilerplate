import React from 'react';
import ProductItem from './ProductItem'

const ratingComponent = ({ isFilled }) => {
  return <div className={isFilled && "starFill"} />;
};

function ItemList({ data }) {

	let items = data.map(item =>
		<ProductItem 
			key={item.title}
			isInStock={Boolean(item.isInStock)}
			img={item.img}
			title={item.title}
			price={item.price}
			subPriceContent=" ₽"
			maxRating={Number(item.maxRating)}
			rating={Number(item.rating)}
			ratingComponent={ratingComponent} />
		);
	
	return <div className='item-list'>{items}</div>
}

export default ItemList