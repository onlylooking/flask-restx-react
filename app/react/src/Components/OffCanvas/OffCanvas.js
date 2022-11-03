import React from 'react';

import $ from 'jquery';
import Foundation from 'foundation-sites';
window.jQuery = $;

class OffCanvas extends React.Component {
	// props
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		menuItems: menuItems
	// 	};
	// }

	// state on mount
	componentDidMount() {
        this.watchOffCanvas = new Foundation.OffCanvas($('#off-canvas'));
    }

	// on unmount
	// componentWillUnmount() {}

	// render
	render() {
		return (
			<div className="off-canvas position-right" id="off-canvas" data-off-canvas>
				<p>OffCanvas</p>
			</div>
		);
	}
}


export default OffCanvas