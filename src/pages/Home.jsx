import React, { Suspense } from 'react';

const Slide = React.lazy(() => import('../components/Slide'));
const Navbar = React.lazy(() => import('../components/Navbar'));
const ProductList = React.lazy(() => import('../components/ProductList'));

const Home = () => {
  return (
    <div className='container mt-5'>
      <Suspense fallback={<div>Loading...</div>}>
          <Navbar/>
          <br />
          <Slide/>   
          <br />
          <br />
          <ProductList/>
      </Suspense>
    </div>
  )
}

export default Home
