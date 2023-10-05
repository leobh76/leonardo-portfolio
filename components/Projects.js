import Link from "next/link";
import React from "react";

function Projects({ data }) {
  return (
    <section className="flex flex-col mx-auto my-5 max-w-7xl">
      <h1 className="mb-5 text-xl text-slate-500 text-center font-semibold uppercase tracking-widest">
        Projects
      </h1>
      <div className="flex flex-col md:grid grid-cols-2 lg:grid-cols-3 gap-5 mx-5">
        {data.allProjects?.map((project, i) => (
          <Link target="_blank" key={project.id} href={project.linkToBuild}>
            <div
              className="hover:scale-105 transform duration-200 ease-in-out shadow-inner bg-gradient-to-b from-gray-100 to-slate-200 p-5 sm:p-10 flex flex-col items-center space-y-5 rounded-lg min-h-full transition-all cursor-pointer hover:after:content-['Go_to_Project'] after:opacity-0
              hover:after:opacity-100 after:absolute after:text-xl after:scale-50 hover:after:scale-100 after:top-1/3 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-gray-900/90 after:shadow-black/70 after:shadow-md after:text-white after:px-3 after:py-2
               2xl:after:mt-[3vh] after:rounded-xl xs:after:text-sm sm:after:text-lg md:after:text-xl hover:after:hover:underline after:transition-all"
            >
              <img
                className="w-48 h-32 rounded-lg object-cover"
                src={project.image.responsiveImage.src}
                alt={project.image.responsiveImage.alt}
              />
              <div className="space-y-5 flex flex-col">
                <h1 className="text-lg sm:text-xl text-center text-slate-500 font-bold underline  underline-offset-4 decoration-gray-400">
                  {project?.title}
                </h1>
                <div className="flex justify-center space-x-2">
                  {project.skillsUsed.map((skill) => (
                    <img
                      key={skill.id}
                      className="w-10 h-10"
                      src={skill.icon.responsiveImage.src}
                      alt={skill.icon.responsiveImage.alt}
                    />
                  ))}
                </div>
                <p className="text-sm text-slate-500 text-justify">
                  {project.summary}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;
