import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/SharePage/Footer/Footer';
import Navber from '../component/SharePage/Navber/Navber';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;