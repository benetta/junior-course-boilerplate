import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import data from './products.json';

import Header from './components/Header'
import ItemList from './components/ItemList'

class App extends Component {
	render() {
	const title = "Список товаров"
	
		return (
			<Fragment>
				<Header>{title}</Header>
				<ItemList data={data} />
			</Fragment>
		)
	}
}

ReactDOM.render(
	<App />, 
	document.getElementById('root')
);

