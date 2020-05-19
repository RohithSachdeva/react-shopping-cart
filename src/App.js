import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }}>
				<CartContext.Provider value={cart}>
					<Navigation cart={cart} />


					<Route exact path="/">
						<Products />
					</Route>

					<Route path="/cart">
						<ShoppingCart cart={cart} />
					</Route>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;


// Wrap all of your components/routes in App.js inside of ProductContext.Provider component.

// Next pass a value prop to your Provider.

// In the value prop we'll pass in the products state, and an addItem function that will allow us to add books to the cart.

// <ProductContext.Provider value={{ products, addItem }}>