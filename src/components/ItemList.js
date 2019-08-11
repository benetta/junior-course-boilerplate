import React from 'react';
import ProductItem from './ProductItem'

const ratingComponent = () => {
  return <div className="starFill"/>;
};

function ItemList({ data }) {

	let items = data.map(item =>{
		let data = JSON.parse(item)
				
		return <ProductItem 
			key={data.title}
			isInStock={data.isInStock}
			img={data.img}
			title={data.title}
			price={data.price}
			subPriceContent=" ₽"
			maxRating={data.maxRating}
			rating={data.rating}
			ratingComponent={ratingComponent} />
		});
	
	return <div className='item-list'>{items}</div>
}

export default ItemList