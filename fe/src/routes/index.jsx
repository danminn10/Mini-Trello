import { Routes, Route } from 'react-router-dom'
import Login from '@/pages/Login.jsx'
import EmailVerification from '@/pages/EmailVerification.jsx'
import BoardManagement from '@/pages/BoardManagement.jsx'
function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/verify-email" element={<EmailVerification />} />
            <Route path="/board-manage" element={<BoardManagement />} />
        </Routes>
    )
}

export default AppRoutes
