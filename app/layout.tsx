import './globals.css';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="container mx-auto p-4">
            <header className="mb-4 text-center">
                <h1 className="text-3xl font-bold">Mini Audit Tracker</h1>
            </header>
            <main>{children}</main>
        </div>
    );
};

export default Layout;