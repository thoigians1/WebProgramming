import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Introduction from '../pages/Introduction/Introduction'
import Contact from '../pages/Contact/Contact'
import News from '../pages/News/News'
import Login from '../pages/Login/Login'
import Cart from '../pages/Cart/Cart'
import Signup from '../pages/Signup/Signup'
import Information from '../pages/Information/Information'

import AdminHome from '../admin_pages/Home/Home'
import AdminIntroduction from '../admin_pages/Introduction/Introduction'
import ManageUsers from '../admin_pages/ManageUsers/ManageUsers'
import UserDetail from '../admin_pages/UserDetail/UserDetail'
export default function Routers() {
    return (
        < Routes >
            {/* User */}
            <Route path="/" element={<Home />} />
            <Route path="/Introduction" element={<Introduction />} />
            <Route path="/News" element={<News />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Information" element={<Information />} />
            {/* Admin */}
            <Route path="/Admin/" element={<AdminHome />} />
            <Route path="/Admin/Introduction" element={<AdminIntroduction />} />
            <Route path="/Admin/Login" element={<Login />} />
            <Route path="/Admin/ManageUsers" element={<ManageUsers />} />
            <Route path="/Admin/UserDetail/:userID" element={<UserDetail />} />
        </Routes >
    )
}