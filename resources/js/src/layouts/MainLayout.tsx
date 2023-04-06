import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../components/TopNav';
import DrawerMenu from '../components/DrawerMenu';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="App">
            <main className="min-h-screen bg-slate-100">
                <TopNav />
                <section className="px-2 sm:px-6 sm:pl-32 py-14 sm:py-20">
                    <div className="hidden sm:block">
                        <DrawerMenu />
                    </div>
                    <Outlet />
                    {children}
                </section>

            </main>
        </div>
    );
};

export default MainLayout;
