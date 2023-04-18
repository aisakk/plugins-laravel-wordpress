import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../components/TopNav';
import DrawerMenu from '../components/DrawerMenu';
import {Plugin,LicenseIdProps} from "../types/DashboardTypes";
interface MainLayoutProps extends LicenseIdProps {
    children: React.ReactNode;
    plugins: Plugin[];
}

const MainLayout: React.FC<MainLayoutProps> = (props) => {
    const { licenseId, children, plugins } = props;

    return (
        <div className="App">
            <main className="min-h-screen bg-slate-100">
                <TopNav plugins={plugins}/>
                <section className="px-2 sm:px-6 sm:pl-32 py-14 sm:py-20">
                    {licenseId !== undefined && (
                        <div className="hidden sm:block">
                            <DrawerMenu licenseId={licenseId} plugins={plugins} />
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
