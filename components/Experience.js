import React from "react";

function Experience({ data }) {
  return (
    <section className="flex flex-col max-w-7xl mx-auto px-5 mb-5">
      <h1 className="mb-5 text-xl text-slate-500 text-center font-semibold uppercase tracking-widest">
        Work Experience
      </h1>
      <div className="flex flex-col md:grid grid-cols-2 lg:grid-cols-3 gap-5">
        {data.allExperiences?.map((experience) => (
          <div
            className="hover:cursor-crosshair shadow-inner bg-gradient-to-b from-gray-100 to-slate-200 p-5 sm:p-7 mb-5 flex flex-col items-center space-y-5 rounded-lg"
            key={experience.id}
          >
            <img
              className="w-16 h-16 rounded-full bg-white"
              src={experience.companyLogo.responsiveImage.src}
              alt={experience.companyLogo.responsiveImage.alt}
            />
            <div className="space-y-4 flex flex-col">
              <h1 className="text-lg sm:text-xl text-center text-slate-500 font-medium">
                {experience.jobTitle}
              </h1>
              <h1 className="text-lg sm:text-xl text-center text-slate-500 font-bold">
                {experience.companyName}
              </h1>
              <div className="flex space-x-2 justify-center">
                {experience.technologiesUsed.map((technology) => (
                  <img
                    key={technology.id}
                    className="w-10 h-10"
                    src={technology.icon.responsiveImage.src}
                    alt={technology.icon.responsiveImage.alt}
                  />
                ))}
              </div>
              <h1 className="text-md sm:text-lg text-center text-slate-500">
                {new Date(experience.dateStarted).getFullYear("CS-cs")}
                {experience.isCurrent ? " - Present" : ""}
              </h1>
              <p className="text-sm text-slate-500 text-justify">
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
