import React from 'react';

const Slide = React.lazy(() => import('../components/Slide'));
const Navbar = React.lazy(() => import('../components/Navbar'));
const ProductList = React.lazy(() => import('../components/ProductList'));

const Home = () => {
  return (
    <div className='container mt-5'>
        <Navbar/>
        <br />
        <Slide/>   
        <br />
        <br />
        <ProductList/>
    </div>
  )
}

export default Home
