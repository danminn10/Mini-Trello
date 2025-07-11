import AuthLayout from '@/components/auth/AuthLayout.jsx';
import AuthCard from '@/components/auth/AuthCard.jsx';
import useLogin from '@/hooks/auth/useLogin.jsx';
const Login = () => {
    const { email, setEmail, handleLogin } = useLogin();
    return (
        <AuthLayout>
            <AuthCard
                title=""
                subtitle="Login in to continue"
                hideLogo={false}
            >
                <div className="w-[283px] h-[38px] rounded border border-[#565D6D] bg-[#F9FAFB] focus:outline-none focus:ring-blue-500 px-3">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="text-[12px] text-[#565D6D] leading-[19px] font-catamaran w-full h-full bg-transparent outline-none text-center"
                        placeholder="Enter your email"
                    />
                </div>
                <button onClick={handleLogin} className='w-[282px] h-[38px] bg-[#0E50E1] rounded text-white text-[10px] leading-[17px] font-normal font-catamaran rounded mt-1 hover:bg-[#0B3BB7] transition-colors duration-300'>
                    Continue
                </button>
            </AuthCard>
        </AuthLayout>
    );
};
export default Login;