import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../components/TopNav';
import DrawerMenu from '../components/DrawerMenu';
import {LicenseIdProps} from "../types/DashboardTypes";
interface MainLayoutProps extends LicenseIdProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = (props) => {
    const { licenseId, children } = props;

    return (
        <div className="App">
            <main className="min-h-screen bg-slate-100">
                <TopNav licenseId={licenseId}/>
                <section className={(typeof licenseId !== 'undefined') ? 'px-2 sm:px-6  sm:pl-32 py-14 sm:py-20' : 'px-2 sm:px-6 py-14 sm:py-20'}>
                    {licenseId !== undefined && (
                        <div className="hidden sm:block">
                            <DrawerMenu licenseId={licenseId} />
                        </div>
                    )}
                    <Outlet />
                    {children}
                </section>

            </main>
        </div>
    );
};

export default MainLayout;
