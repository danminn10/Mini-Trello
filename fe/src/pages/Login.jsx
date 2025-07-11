import logo from '@/assets/logo.png';
import img1 from '@/assets/imgLogin1.png';
import img2 from '@/assets/imgLogin2.png';
const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 relative overflow-hidden">
            <img
                src={img1}
                className="hidden md:block absolute bottom-[5px] left-0 w-[306px] h-[302px] object-contain"
                alt="Background Image 1"
            >
            </img>
            <img
                src={img2}
                className="hidden md:block absolute bottom-[5px] right-0 w-[312px] h-[365px] object-contain"
                alt="Background Image 2"
            >
            </img>
            <div className="w-[351px] h-[311px] max-w-sm bg-white rounded-sm custom-login z-10 p-7">
                <img src={logo} alt="Logo" className="w-[56px] h-[55px] mb-4 mx-auto" />
                <p className="text-[11px] text-[#29354F] leading-[18px] font-normal font-catamaran text-center px-3 mb-4">
                    Login in to continue
                </p>
                <div className="w-[283px] h-[38px] rounded border border-[#565D6D] bg-[#F9FAFB] forcus:outline-none forcus:ring-blue-500 px-3">
                    <input
                        type="email"
                        className="text-[12px] text-[#565D6D] leading-[19px] font-catamaran w-full h-full bg-transparent outline-none text-center"
                        placeholder="Enter your email"
                    />
                </div>

                <button className='w-[282px] h-[38px] bg-[#0E50E1] rounded text-white text-[10px] leading-[17px] font-normal font-catamaran rounded mt-1 hover:bg-[#0B3BB7] transition-colors duration-300'>
                    Continue
                </button>
                <p className='font-normal font-catamaran text-[11px] leading-[18px] text-[#3F4C67] text-center mt-2 mb-[-2px]'>Privacy Policy <br />
                    This site is protected by reCAPTCHA and the Google Privacy
                </p>

                <p className="font-normal font-catamaran text-[11px] leading-[18px] text-[#305CBB] text-center">
                    Policy and Terms of Service apply.
                </p>
            </div>
        </div>
    );
};
export default Login;