import React from 'react';
import Navbar from '../../Components/Home/Navbar';
import Products from '../../Components/Home/Products';
import Footer from '../../Components/Home/Footer';

const HomePage = ({setToken}) => {
    return (
    <div>
     <Navbar setToken= {setToken}/>
     <Products />
     <Footer />
    </div>
    );
}


export default HomePage;