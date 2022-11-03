import React from 'react';


class Hero extends React.Component {
    static defaultProps = {
        title: "Missing Title",
        text: "Missing Lead text"
    }

	render() {
		return (
            <div id='hero' className='grid-container full'>
                <div className='grid-container'>
                    <div id='hero' className='grid-x grid-padding-x'>
                        <div className='cell small-12 text-center'>
                            <h1>{this.props.title}</h1>
                            <p>{this.props.text}</p>
                        </div>
                    </div>
                </div>
            </div>
		);

        
	}
}

export default Hero