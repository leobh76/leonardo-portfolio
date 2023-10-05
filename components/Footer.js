import React from "react";

function Footer() {
  return (
    <footer className="fixed w-full bottom-0 flex flex-col">
      <button className="bg-cyan-100 mx-auto my-3 hover:bg-cyan-500 hover:text-white px-3 py-1 rounded-full shadow-inner animate-bounce">
        <a
          className="font-semibold"
          href="#top"
        >
          🔼 Back to Top 🔼
        </a>
      </button>
      <div className="bg-gray-200 opacity-90 p-3 shadow-md">
        <p className="text-center text-sm font-medium">
          © 2023 Leonardo Hurovich. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
