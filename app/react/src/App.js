import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Layout from "./pages/Layout";
import PageHome from './pages/PageHome';
import PageBlog from './pages/PageBlog';
// dashboard
import UserLogin from './pages/user/Login';
import UserRegister from './pages/user/Register';
import DashboardLayout from './dashboard/DashboardLayout';
import DashboardHome from './dashboard/DashboardHome';
import DashboardAccount from './dashboard/DashboardAccount';
// 404
import PageNotFound from './pages/PageNotFound';

class App extends React.Component {

    render () {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>

                        {/* public */}
                        <Route index element={<PageHome />} />
                        <Route path="blog" element={<PageBlog />} />

                        {/* dashboard */}
                        <Route path="login" element={<UserLogin />} />
                        <Route path="register" element={<UserRegister />} />
                        
                        <Route path="dashboard" element={<DashboardLayout />}>
                            <Route index element={<DashboardHome />} />
                            <Route path='account' element={<DashboardAccount />} />
                        </Route>

                        {/* 404 */}
                        <Route path="*" element={<PageNotFound />} />

                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default App;
