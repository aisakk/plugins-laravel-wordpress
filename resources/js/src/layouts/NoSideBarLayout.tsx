import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNavNotSideBar from '../components/TopNav/TopNavNotSideBar';

interface NoSideBarayoutProps {
    children: React.ReactNode;
}

const NosideBarLayout: React.FC<NoSideBarayoutProps> = ({ children }) => {
    return (
        <div className="App">
            <main className="min-h-screen bg-slate-100">
                <TopNavNotSideBar />
                    <section className="py-14 sm:py-20">
                        <Outlet />
                        {children}
                    </section>
            </main>
        </div>
    );
};

export default NosideBarLayout;
