import { Routes, Route } from 'react-router-dom'
import Login from '@/pages/Login.jsx'
import EmailVerification from '@/pages/EmailVerification.jsx'
function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/verify-email" element={<EmailVerification />} />
        </Routes>
    )
}

export default AppRoutes
