import Header from '@/components/layout/Header.jsx'
import barchart from '@/assets/barchart.jpeg';
import members from '@/assets/members.png';
const BoardManagement = ({ }) => {
    return (
        <div>
            <Header />
            <div className='flex h-screen bg-[#2F3840]'>
                <div className="w-[225px] bg-[#162032] flex flex-col items-center gap-4 p-10">
                    <div className='flex items-center gap-2 bg-[#162032]'>
                        <img src={barchart} alt="Workspace" className="w-[17px] h-[17px]" />
                        <input
                            type="text"
                            name="boards"
                            placeholder='Boards'
                            className='font-normal font-catamaran text-[12px] leading-[19px] text-[#FFFFFF] boder boder-solid rounded-xs'
                        />
                    </div>
                    <div className='flex items-center gap-2 bg-[#162032]'>
                        <img src={members} alt="members" className="w-[16px] h-[14px] rounded-xs" />
                        <span className='font-normal font-catamaran text-[#FFFEFF] text-[13px] leading-[22px]'>All members</span>
                    </div>
                </div>
                <div className='flex-1 px-8 py-6 bg-[#2F3840]'>
                    <h1 className="font-normal font-catamaran text-[13px] leading[22px] text-[#9095A1]">YOURWORKSPACES</h1>
                    <div className='flex items-center gap-6 mt-4'>
                        <textarea className="w-[183px] h-[97px] border border-[#9095A1] bg-white text-[#171A1F] font-normal font-catamaran text-[14px] leading-[22px] px-2 py-2 rounded" placeholder='My trello board'></textarea>
                        <textarea className="w-[188px] h-[94px] border border-[#9095A1] text-[#9095A1] font-normal font-catamaran text-[13px] leading-[22px] text-center px-6 py-6 rounded" placeholder='+ Created a new board'></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BoardManagement;