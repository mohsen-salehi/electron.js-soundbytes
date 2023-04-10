import React from 'react';
import {Outlet} from "react-router";
import Footer from '../features/footer/footer.jsx';
import Header from '../features/header/Header.jsx';

function Layout({children}) {
    return (
        <>
            <Header />
            <main className="container-fluid container-xl">
                {children}
                <Outlet/>
            </main>
            <Footer />
        </>
    );
}

export default Layout;