import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../components/TopNav';
import DrawerMenu from '../components/DrawerMenu';

interface Plugin{
    name: string;
    description: string;
    active: boolean;
    icon: string;
    link: string;
}
interface MainLayoutProps {
    licenseId: number;
    children: React.ReactNode;
    plugins: Plugin[];
}

const MainLayout: React.FC<MainLayoutProps> = (props) => {
    const { licenseId, children } = props;
    return (
        <div className="App">
            <main className="min-h-screen bg-slate-100">
                <TopNav licenseId={licenseId} plugins={[]}/>
                <section className="px-2 sm:px-6 sm:pl-32 py-14 sm:py-20">
                    <div className="hidden sm:block">
                        <DrawerMenu licenseId={licenseId} />
                    </div>
                    <Outlet />
                    {children}
                </section>

            </main>
        </div>
    );
};

export default MainLayout;
