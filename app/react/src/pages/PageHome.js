import Hero from '../Components/Hero/Hero';


function PageHome() {
	
	var element = 
        <div className="page">
            <Hero title='List of Products' text='Product Items For Sale'/>
        </div>;
	

    return (
        element
    );
}

export default PageHome;
