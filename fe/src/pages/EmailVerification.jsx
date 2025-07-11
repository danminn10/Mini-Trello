import AuthLayout from '@/components/auth/AuthLayout.jsx';
import AuthCard from '@/components/auth/AuthCard.jsx';
const EmailVerification = () => {
    return (
        <AuthLayout>
            <AuthCard
                title="Email Verification"
                subtitle="Please enter the verification code sent to your email"
                hideLogo={true}
            >
                <div className="w-[283px] h-[38px] rounded border border-[#565D6D] bg-[#F9FAFB] forcus:outline-none forcus:ring-blue-500 px-3">
                    <input
                        type="text"
                        className="text-[12px] text-[#565D6D] leading-[19px] font-catamaran w-full h-full bg-transparent outline-none text-center"
                        placeholder="Enter code verification"
                    />
                </div>
                <button className='w-[282px] h-[38px] bg-[#0E50E1] rounded text-white text-[10px] leading-[17px] font-normal font-catamaran rounded mt-1 hover:bg-[#0B3BB7] transition-colors duration-300'>
                    Submit
                </button>
            </AuthCard>
        </AuthLayout>
    );
}
export default EmailVerification;