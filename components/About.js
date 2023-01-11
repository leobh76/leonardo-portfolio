import React from "react";

function About({ data }) {
  return (
    <section className="flex flex-col mx-auto px-5 mb-10 max-w-7xl">
      <h1 className="mb-5 text-xl text-gray-300 text-center font-semibold uppercase tracking-widest">
        About Me
      </h1>
      {data.allAboutMeSections?.map((aboutMeSection) => (
        <div className="hover:cursor-crosshair p-5 sm:p-10 flex flex-col items-center space-y-5 rounded-lg shadow-inner bg-black/40" key={aboutMeSection.id}>
          <img
            className="w-24 h-24 rounded-full"
            src={aboutMeSection.profilePicture.responsiveImage.src}
            alt={aboutMeSection.profilePicture.responsiveImage.alt}
          />
          <div className="space-y-2 flex flex-col">
            <h1 className="text-xl sm:text-2xl text-center text-gray-300 font-bold underline  underline-offset-4 decoration-gray-400">
              {aboutMeSection.title}
            </h1>
            <p className="text-sm text-gray-300 text-justify">{aboutMeSection.body}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default About;
