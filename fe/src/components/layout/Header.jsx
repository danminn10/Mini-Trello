import logo from '@/assets/logo.png';
import letfSideBar from '@/assets/leftSideBar.jpeg';
import notification from '@/assets/notification.png';
const Header = () => {
    return (
        <header className="bg-[#242A30] shadow-md flex justify-between items-center p-4">
            <div className="flex items-center gap-4">
                <img src={letfSideBar} alt="letfSideBar" className='w-[16px] h-[16px]' />
                <img src={logo} alt="Logo" className="h-[36px] w-[36px]" />
            </div>
            <div className="flex items-center gap-4">
                <img src={notification} alt="logo" className="h-8 w-auto ml-4" />
                <button className="bg-[#CC1D08] w-[26px] h-[24px] rounded-xl">
                    SD
                </button>
            </div>
        </header>
    );
}
export default Header;