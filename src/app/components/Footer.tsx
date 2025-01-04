import React from "react";

const Footer = () => {
  return (
    <footer className="sticky w-full z-40 bg-black text-white shadow-md pt-[200px] pb-10 overflow-y-hidden">
      <div className="relative -z-10">
        <div className="absolute left-0 right-0 -top-10 h-[150px] bg-black">
          <div className="absolute w-full h-[500%] skew-y-[10deg] translate-y-2 bg-[#303F9F]" />
          <div className="absolute w-full h-[500%] skew-y-[-8deg] bg-foreground" />
          <div className="absolute w-full h-[500%] skew-y-[6deg] translate-y-5 bg-foreground" />
        </div>
      </div>

      <div className="px-5 pt-14 pb-3 flex flex-col items-center justify-center gap-y-5">
        <div>
          © 2024 UNSW Tabletop Games Society. Images and video are the property of their
          respective creators and owners.
        </div>
        <div>
          Developed and maintained by the 2025 UNSW Tabletop Games Society IT Subcommittee
        </div>
      </div>
    </footer>
  );
};

export default Footer;
