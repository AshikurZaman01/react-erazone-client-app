import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footers from '../Pages/Footer/Footers';

const Roots = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footers></Footers>
        </div>
    );
};

export default Roots;