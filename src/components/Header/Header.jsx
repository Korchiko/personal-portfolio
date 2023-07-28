import React from "react";
import dev from "/assets/dev.png";
import {AnimationHome,AnimationProfile,AnimationProject,AnimationSkills,AnimationContact} from "../RightMenuAnimation/Animation";


const Header = () => {
  return (
    <div className="general-container bg-customColor1 w-screen py-7 px-7 drop-shadow-md">
      <div className="kapsayici-div px-[16px] md:px-[70px] lg:px-[150px] flex items-center w-full h-full justify-between ">
        <div className="logo-container flex items-center cursor-pointer ">
          <img
            src={dev}
            className="w-[100px] mix-blend-darken  rounded-full drop-shadow-sm "
            alt=""
          />
          <h1 className="font-bold text-2xl  leading-[28.2px] w-[100px] ml-5 text-home-pr">
            İSMAİL DEMİR
          </h1>
        </div>
        <div className="right-menu-container">
          <ul className="hidden md:flex space-x-12 	  ">
            <li>
              {/* ana sayfa */}
              <AnimationHome className=" cursor-pointer " />
            </li>
            {/* profile */}
            <li>
              <AnimationProfile className=" cursor-pointer " />
            </li>
            {/* projeler */}
            <li>
              <AnimationProject className=" cursor-pointer " />
            </li>
            {/* skills */}
            <li>
              <AnimationSkills className=" cursor-pointer " />
            </li>
            {/* iletişim */}
            <li>
              <AnimationContact className=" cursor-pointer " />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
