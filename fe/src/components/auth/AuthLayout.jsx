import img1 from '@/assets/imgLogin1.png';
import img2 from '@/assets/imgLogin2.png';

const AuthLayout = ({ children }) => {
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
            {children}
        </div>
    );
}
export default AuthLayout;