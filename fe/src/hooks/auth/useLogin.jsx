import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import validateEmail from '@/utils/vaidateEmail.jsx';

const useLogin = () => {
    const [email, setEmail] = useState('');
    const navigation = useNavigate();
    const handleLogin = () => {
        if (!email) {
            toast.error('Please enter your email');
            return;
        } else if (!validateEmail(email)) {
            toast.error('Please enter a valid email');
            return;
        } else {
            setTimeout(() => {
                toast.success('Continue to verify your email');
                navigation('/verify-email');
            }, 1000);
        }
    }
    return {
        email,
        setEmail,
        handleLogin
    };
}
export default useLogin;