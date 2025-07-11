import logo from '@/assets/logo.png';

const AuthCard = ({ title, subtitle, hideLogo, children }) => {
    return (
        <div className="w-[351px] h-[311px] max-w-sm bg-white rounded-sm custom-login z-10 p-7">
            {hideLogo ? (
                <p className="text-[29px] leading-[44px] font-bold text-center font-catamara text-[#171A1F]">{title}</p>
            ) :
                (<img src={logo} alt="Logo" className="w-[56px] h-[55px] mb-4 mx-auto" />)
            }
            <p className="text-[11px] text-[#29354F] leading-[18px] font-normal font-catamaran text-center px-3 mb-4">
                {subtitle}
            </p>
            {children}

            <p className='font-normal font-catamaran text-[11px] leading-[18px] text-[#3F4C67] text-center mt-2 mb-[-2px]'>Privacy Policy <br />
                This site is protected by reCAPTCHA and the Google Privacy
            </p>

            <p className="font-normal font-catamaran text-[11px] leading-[18px] text-[#305CBB] text-center">
                Policy and Terms of Service apply.
            </p>
        </div>
    );
}
export default AuthCard;