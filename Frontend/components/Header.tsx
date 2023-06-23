import {BsMicFill, BsBell, BsCameraVideo } from "react-icons/bs";
import {HiOutlineMenu,HiOutlineLogout} from "react-icons/hi";
import Image from "next/image";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { recommendationState, TwitterSearchState, OTPmodalState, modalState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";
import {BellIcon} from '@heroicons/react/solid';
import useAuth from "@/hooks/useAuth";

const Header = () => {
    const [search, setSearch] = useState("");
    const [showModal,setShowModal] = useRecoilState(OTPmodalState);
    const {logout} = useAuth();

  function handleOpen() {
    throw new Error("Function not implemented.");
  }
    return (
        <div className="flex justify-between items-center p-3">
            <div className="flex items-center gap-6">
              {/* rome-ignore lint/a11y/useButtonType: <explanation> */}
              <button 
              type="button"
              onClick={()=>setShowModal(true)}
              >
                <HiOutlineMenu size={22} />
              </button>
            </div>
            <div className="hidden md:flex gap-2 min-w-[300px] lg:w-[620px]">
        <div className="flex w-full">
          <input
            placeholder="Search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full px-4 py-2 text-zinc-200 bg-zinc-900 border-[1px] border-zinc-700 focus:bg-black rounded-tl-full rounded-bl-full focus:outline-none focus:ring-[1px] focus:ring-sky-500 placeholder:text-zinc-400"
          />
          <div className="flex items-center bg-zinc-700 px-5 py-3 rounded-tr-full rounded-br-full">
            <BiSearch size={22} />
          </div>
        </div>
        <div className="flex items-center space-x-2.5 cursor-pointer">
          <div className="hover:bg-zinc-700 rounded-full p-4">
            <BsMicFill size={22}/>  
          </div>
          <div className="hover:bg-zinc-700 rounded-full p-4">
          <BsCameraVideo size={22} />
          </div>
          <div className="hover:bg-zinc-700 rounded-full p-4">
            <BsBell size={22} />
          </div>
          
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center p-2 rounded-full  cursor-pointer hover:bg-zinc-700">
          <Image
            src="https://unavatar.io/youtube/CourtneyRyan"
            width={100}
            height={50}
            className="rounded-full cursor-pointer object-contain ml-auto" alt={''}           
          />
            <div className="hover:bg-zinc-700 rounded-full p-4">
                <HiOutlineLogout size={22}
                                 onClick={logout}
                                 className="cursor-pointer rounded"
                />
            </div>
            <BellIcon className="h-6 w-6 text-white hover:text-gray-400" />
          
        </div>
        </div>
      </div>
    );
};

export default Header;

//Code to be refactored.