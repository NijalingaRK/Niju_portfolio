import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0F0F0F] border-t border-[#33353F] py-8 mt-16 text-white z-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        {/* Branding */}
        <h2 className="text-xl font-semibold text-primary-500">Niju</h2>
        <p className="text-sm text-gray-400 mt-1">
          Passionately building the future, one line of code at a time.❤️
        </p>

        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-3">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
