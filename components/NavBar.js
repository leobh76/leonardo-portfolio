import Link from "next/link";
import React from "react";

function NavBar({ data }) {
  return (
    <header className="bg-gray-200 opacity-90 px-5 py-3 flex justify-between shadow-md sticky top-0 z-10">
      <h1 className="text-2xl text-slate-600 font-bold">Welcome!</h1>
      <ul className="flex space-x-3">
        {data.allContactLinks.map((contactLink) => (
          <li key={contactLink.id}>
            <Link target="_blank" href={contactLink.address}>
              <img
                className="w-7 h-7 hover:scale-125 transform transition duration-200 ease-in-out"
                src={contactLink.icon.responsiveImage.src}
                alt={contactLink.icon.responsiveImage.alt}
              />
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default NavBar;
