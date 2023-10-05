import React from "react";

function About({ data }) {
  return (
    <section className="flex flex-col mx-auto px-5 mb-10 max-w-7xl">
      <h1 className="mb-5 text-xl text-slate-500 text-center font-semibold uppercase tracking-widest">
        About Me
      </h1>
      {data.allAboutMeSections?.map((aboutMeSection) => (
        <div className="hover:cursor-crosshair p-5 sm:p-10 flex flex-col items-center space-y-5 rounded-lg shadow-inner bg-gradient-to-b from-gray-100 to-slate-200" key={aboutMeSection.id}>
          <img
            className="w-24 h-24 rounded-full"
            src={aboutMeSection.profilePicture.responsiveImage.src}
            alt={aboutMeSection.profilePicture.responsiveImage.alt}
          />
          <div className="space-y-2 flex flex-col">
            <h1 className="text-xl sm:text-2xl text-center text-slate-500 font-bold underline  underline-offset-4 decoration-gray-400 mb-5">
              {aboutMeSection.title}
            </h1>
            <p className="text-md text-slate-500 text-justify">{aboutMeSection.body}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default About;
