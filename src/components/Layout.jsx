import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto'>
                <Header></Header>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;