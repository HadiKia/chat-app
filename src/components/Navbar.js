import React from "react";

// Styles 
const header = 'flex justify-between py-6 border-b'


const Navbar = ({logoutHandler}) => {
  return (
    <div className="text-[#202427]">
       <div className={header}>
          <div className="flex items-center">
            <span className="w-10 h-10 rounded-full bg-[#202427] relative before:absolute before:-bottom-0 before:-left-2 before:rotate-[140deg] before:w-0 before:h-0 before:border-0 before:border-transparent before:border-b-[8px] before:border-t-[8px] before:border-l-[20px] before:border-l-[#202427]"></span>
            <span className="w-10 h-10 rounded-full bg-[#b5e4ca] relative right-3 before:absolute before:-bottom-0.5 before:-right-2.5 before:rotate-[35deg] before:w-0 before:h-0 before:border-0 before:border-transparent before:border-b-[8px] before:border-t-[8px] before:border-l-[20px] before:border-l-[#b5e4ca]"></span>
          </div>
          <button onClick={logoutHandler} className="py-3 font-medium bg-[#b5e4ca] px-6 rounded-lg select-none">
            Log out
          </button>
        </div>
    </div>
  );
};

export default Navbar;
