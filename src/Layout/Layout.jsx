import React from 'react';
import classes from './Layout.module.scss';

const Layout = ({children}) => {
    return (
        <>
            {children}
            <header>
                logo
                <div>
                    <div>gsdgds</div>
                    <div>gsdgds</div>
                    <div>gsdgdsn</div>
                </div>
            </header>
            <footer>

            </footer>
        </>
    );
};

export default Layout;