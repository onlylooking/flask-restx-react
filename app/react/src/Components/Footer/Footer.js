import React from 'react';


class Footer extends React.Component {
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
			<footer id='footer'>
				<div className='grid-container full'>
                    <div className='grid-container'>
                        <div className='grid-x grid-padding-x'>
                            <div className='cell medium-6 large-3'>
                                <h3>Explore</h3>
                                <ul className='menu vertical'>
                                    <li>Lorem Ipsum</li>
                                    <li>Lorem Ipsum</li>
                                    <li>Lorem Ipsum</li>
                                    <li>Lorem Ipsum</li>
                                </ul>
                            </div>
                            <div className='cell medium-6 large-3'>
                                <h3>Shop</h3>
                                <ul className='menu vertical'>
                                    <li>Lorem Ipsum</li>
                                    <li>Lorem Ipsum</li>
                                    <li>Lorem Ipsum</li>
                                    <li>Lorem Ipsum</li>
                                </ul>
                            </div>
                            <div className='cell medium-6 large-3'>
                                <h3>Affiliate</h3>
                                <ul className='menu vertical'>
                                    <li>Lorem Ipsum</li>
                                    <li>Lorem Ipsum</li>
                                    <li>Lorem Ipsum</li>
                                    <li>Lorem Ipsum</li>
                                </ul>
                            </div>
                            <div className='cell medium-6 large-3'>
                                <h3>Support</h3>
                                <ul className='menu vertical'>
                                    <li>Lorem Ipsum</li>
                                    <li>Lorem Ipsum</li>
                                    <li>Lorem Ipsum</li>
                                    <li>Lorem Ipsum</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='copyright grid-container full'>
                    <div className='grid-container'>
                        <div className='grid-x grid-padding-x'>
                            <div className='cell'>
                                <p>© 2022 LOP. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
			</footer>
		);
	}
}


export default Footer