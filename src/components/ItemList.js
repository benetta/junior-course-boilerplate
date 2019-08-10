import React from 'react';

function ItemList({ data }) {
	let items = data.map(item => 
		<li key={item.id}>{item.name}</li> 
	);
	
	return <ul className='item-list'>{items}</ul>
}

export default ItemList