import React from "react";

function Footer() {
  return (
    <footer className="fixed w-full bottom-0 flex flex-col">
      <button className="bg-cyan-500 mx-auto my-3 outline hover:outline-white hover:bg-slate-700 px-3 py-1 rounded-full shadow-md animate-bounce">
        <a className="font-semibold text-slate-900 hover:text-white" href="#top">
          🔼 Back to Top 🔼
        </a>
      </button>
      <div className="bg-gray-200 opacity-90 p-3 shadow-md">
        <p className="text-center text-xs font-medium">
          © 2023 Leonardo Hurovich. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
