import React from 'react';
import { Link } from 'react-router-dom';
import { CgMenuRight } from 'react-icons/cg';

class Navigation extends React.Component {
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
			<div id='navigation' className='grid-container full'>
				<div className='grid-container'>
					<div className='grid-x grid-padding-x align-middle'>
						<div className='cell small-6 medium-3 large-2'>
							<Link to="/" className='logo'>
								List-Of-Products
							</Link>
						</div>
						<div className='cell hide-for-small-only medium-9 large-10 grid-x align-middle align-right'>
							<ul className='menu'>
								<li><Link to="/products">Products</Link></li>
								<li><Link to="/about">About</Link></li>
								<li><Link to="/contact">Contact</Link></li>
								<li><Link to="/blog">Blog</Link></li>
							</ul>
						</div>
						<div className='cell small-6 hide-for-medium grid-x align-middle align-right'>
							<button type='button' data-toggle='off-canvas'><CgMenuRight color='white' size='1.5rem' /></button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}


export default Navigation