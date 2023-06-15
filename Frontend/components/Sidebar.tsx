import React from 'react'
import Image from 'next/image'
import { InformationCircleIcon } from '@heroicons/react/outline'
import { FaPlay } from 'react-icons/fa'
import {usePathname, useRouter } from "next/navigation";
import {IconType} from "react-icons";
import {AiOutlineYoutube} from "react-icons/ai";
import {BiPlayCircle} from "react-icons/bi";
import {BsCollectionPlay} from "react-icons/bs";
import {HiHome} from "react-icons/hi";
import { TfiYoutube } from "react-icons/tfi";
import {HiBell} from "react-icons/hi2";
import { formatWithOptions } from 'util';
import {RiDeleteBin6Line} from "react-icons/ri";

interface MenuItem 
{
  icon: IconType;
  text: string;
  pathname: string;
}

//we define an array templated on the interface.
//Remember interface can be extended.

const MenuItems: Array <MenuItem> = [
  {
    icon:TfiYoutube,
    text:"Shorts",
    pathname:"/shorts",
  },
  {
    icon: BsCollectionPlay,
    text: "Subscribe",
    pathname: "/feed/subscription",
  },
  {
    icon: AiOutlineYoutube,
    text: "Originals",
    pathname: "/originals",
  },
  {
    icon:BiPlayCircle,
    text: "Youtube Music",
    pathname: "/music",
  },
  {
    icon:HiBell,
    text: "Notified",
    pathname: "/notified",
  },
  {
    icon:RiDeleteBin6Line,
    text: "Clear Conversation",
    pathname:"/clearConversation"
  }
];

function SideNavigation() {
  const pathname = usePathname();
  const router = useRouter();

  const handleItemClick = (item: MenuItem) => {
    router.push(item.pathname);
  };

  return (
    <div className="fixed top-5 left-0 h-screen py-20 px-10 p-[4px] lg:px-2 lg:py-5">
      {MenuItems.map((item) => (
        <div className="justify-start w-12 lg:w-40" key={item.pathname}>
          {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <div 
            className={`flex flex-col lg:flex-row gap-1 p-4 py-8  lg:py-5 items-center hover:bg-zinc-700 ${
              item.pathname === pathname && "bg-zinc-700 hover:bg-zinc-600"
            } rounded-lg cursor-pointer`}
            onClick={() => handleItemClick(item)}
          >
            <item.icon size={30} />
            <span className="text-xs lg:text-sm lg:text-base">{item.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideNavigation;
//add new items into the sidebar.
