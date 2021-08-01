import React, { useState } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

function MenuBar() {
	const [activeItem, setActiveItem] = useState('');

	const handleItemClick = (e, { name }) => setActiveItem(name);
	return (
		<Menu pointing size="massive" color="blue" >
			<Menu.Item
				name="home"
				active={activeItem === 'home'}
				onClick={handleItemClick}
				as={Link}
				to="/"
			/>
			
			<Menu.Menu position="right">
				<Menu.Item
					name="Login"
					active={activeItem === 'Login'}
					onClick={handleItemClick}
					as={Link}
					to="/login"
				/>
				<Menu.Item
					name="Register"
					active={activeItem === 'Register'}
					onClick={handleItemClick}
					as={Link}
					to="/register"
			/>
				
			</Menu.Menu>
		</Menu>
	);
}

export default MenuBar;
