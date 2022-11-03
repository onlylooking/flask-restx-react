import React from 'react';
import TopBar from './TopBar';
import Navigation from './Navigation';

class Header extends React.Component {
	// props
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		menuItems: menuItems
	// 	};
	// }

	// state on mount
	// componentDidMount() {}

	// on unmount
	// componentWillUnmount() {}

	// render
	render() {
		return (
			<header id='header'>
				<TopBar />
                <Navigation />
			</header>
		);
	}
}


export default Header