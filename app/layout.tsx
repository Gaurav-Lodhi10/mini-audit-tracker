import './globals.css';
import React from 'react';
import Head from 'next/head';

export const metadata = {
    title: 'Mini Audit Tracker',
    description: 'Track and manage audit observations easily',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </Head>
            <div className="container mx-auto p-4">
                <header className="mb-4 text-center">
                    <h1 className="text-3xl font-bold">{metadata.title}</h1>
                </header>
                <main>{children}</main>
            </div>
        </>
    );
};

export default RootLayout;
