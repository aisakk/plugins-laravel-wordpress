import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNavNoSideBar from '../components/TopNav/TopNavNoSideBar';
import {Plugin} from "../types/DashboardTypes";

interface NoSideBarLayoutProps {
    children: React.ReactNode;
    plugins: Plugin[];
}


const NosideBarLayout: React.FC<NoSideBarLayoutProps> = (props) => {
    const {children,plugins}=props;
    return (
        <div className="App">
            <main className="min-h-screen bg-slate-100">
                <TopNavNoSideBar plugins={plugins} />
                    <section className="py-14 sm:py-20">
                        <Outlet />
                        {children}
                    </section>
            </main>
        </div>
    );
};

export default NosideBarLayout;
