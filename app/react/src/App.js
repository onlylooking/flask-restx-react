import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Layout from "./pages/Layout";
import PageHome from './pages/PageHome';
import PageBlog from './pages/PageBlog';
// dashboard
import DashboardLayout from './dashboard/DashboardLayout';
import DashboardHome from './dashboard/DashboardHome';
import DashboardAccount from './dashboard/DashboardAccount';
// 404
import PageNotFound from './pages/PageNotFound';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>

                    {/* public */}
                    <Route index element={<PageHome />} />
                    <Route path="blog" element={<PageBlog />} />

                    {/* dashboard */}
                    <Route path="dashboard" element={<DashboardLayout />}>
                        <Route index element={<DashboardHome />} />
                        <Route path='account' element={<DashboardAccount />} />
                    </Route>

                    {/* 404 */}
                    <Route path="*" element={<PageNotFound />} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
