import React from 'react';
import { Link } from 'react-router-dom';
import Clock from '../Clock/Clock';


class TopBar extends React.Component {
	// props
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		menuItems: menuItems
	// 	};
	// }

	// static defaultProps = {
    //     name: menuItems
    // }

	// state on mount
	// componentDidMount() {}

	// on unmount
	// componentWillUnmount() {}

	// render
	render() {
		return (
			<div id='top-bar' className='grid-container full'>
				<div className='grid-container'>
					<div className='grid-x grid-padding-x align-middle'>
						<div className='cell small-6 medium-3 large-2'>
							<Clock name='username' />
						</div>
						<div className='cell small-6 medium-9 large-10 grid-x align-middle align-right'>
							<ul className='menu'>
								<li><Link className='' to="/dashboard">Dashboard</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}




export default TopBar