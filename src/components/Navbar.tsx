import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { menuHeader } from "../constants";
import MenuIcon from "./MenuIcon";

type Props = {};

export default function Navbar({}: Props) {
  const [openMenuIcon, setOpenMenuIcon] = useState(false);
  return (
    <nav className="relative">
      <div className="lg:max-w-7xl mx-auto py-4 flex items-center justify-between w-[90%]">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setOpenMenuIcon(!openMenuIcon)}
        >
          <MenuIcon openMenu={openMenuIcon} />
        </div>
        <div>
          <SocialIcon
            url="https://www.facebook.com/profile.php?id=100033127445154"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://github.com/PhongThanh0907"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/phong-ph%E1%BA%A1m-034480248/"
            fgColor="gray"
            bgColor="transparent"
          />
        </div>
      </div>

      {openMenuIcon ? (
        <div className="absolute top-[75px] z-10 text-swhite bg-menuHeader flex flex-col pl-16 rounded-md text-xl h-72 w-96 opacity-100 duration-500">
          {menuHeader.map((item, index) => (
            <div key={index} className="relative w-full py-6">
              <Link
                className="hover:text-mgreen absolute left-[10px] opacity-100 group"
                to={item.path}
                style={{ transition: `all ${item.delay}ms` }}
              >
                {item.title}
                <div className="h-0.5 w-0 bg-blueCustomer opacity-0 group-hover:opacity-100 group-hover:w-full duration-500" />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="absolute top-[75px] z-0 text-swhite bg-menuHeader flex flex-col pt-6 pl-8 text-xl gap-y-3  h-0 w-96 duration-500 opacity-0">
          {menuHeader.map((item, index) => (
            <div key={index} className="relative w-full py-3.5">
              <Link
                className="hover:text-mgreen absolute left-1/2 opacity-0"
                to={item.path}
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
