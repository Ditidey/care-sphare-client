import React from 'react';

import Banner from './Banner';
import Cares from './Cares';
import Footer from '../Shared/Footer';

const Home = () => {
    return (
        <div className=''>

            <Banner></Banner>

            <Cares></Cares>
            <Footer></Footer>
        </div>
    );
};

export default Home;