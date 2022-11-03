import React from 'react';


class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://i-itc.org/wp-json/wp/v2/posts")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (
                <div id='blog' className='grid-container full'>
                    <div className='grid-container'>
                        <div className='grid-x grid-padding-x grid-padding-y'>
                            <div className='cell'>
                                <h4>Loading...</h4>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div id='blog' className='grid-container full'>
                    <div className='grid-container'>
                        <div className='grid-x grid-padding-x grid-padding-y medium-up-2 large-up-4'>
                            { items.map((item, idx) => this.addPostToBlog(item, idx) )}
                        </div>
                    </div>
                </div>
            );
        }
    }

    addPostToBlog(item, idx) {
        var image = item.qubely_featured_image_url.large;

        return (
            <div key={idx} className="cell">
                                
                <a className="card width-100" href={item.link}>
                    <div className="card-divider">
                        {item.title.rendered} 
                    </div>
                    <img src={ image[0] } alt={item.title.rendered}/>
                    <div className="card-section">
                        <h4>This is a card.</h4>
                        <p>It has an easy to override visual style, and is appropriately subdued.</p>
                    </div>
                </a>

            </div>
        )
    }
}

export default Blog