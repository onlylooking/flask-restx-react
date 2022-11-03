import React from 'react';


class Clock extends React.Component {
    // props
    constructor(props) {
        super(props);
        this.state = { 
            date: new Date()
        };
    }

    // static defaultProps = {
    //     name: "noname"
    // }

    // state on mount
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick() { 
        this.setState({ 
            date: new Date() 
        }); 
    }

    // on unmount
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    // render
    render() {
        return (
            <div className='clock'>
                <span>
                    { this.props.name && <span className='label'>{this.props.name}</span> }
                    <span className='label secondary'>{this.state.date.toLocaleTimeString()}</span>
                </span>
            </div>
        );
    }
}

export default Clock