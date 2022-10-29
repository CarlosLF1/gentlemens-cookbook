import React from 'react';
import { Outlet } from 'react-router-dom';

function MainLayout(props) {
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default MainLayout ;