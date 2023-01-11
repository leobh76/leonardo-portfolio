import React from "react";

function Skills({ data }) {
  return (
    <section className="flex flex-col justify-center px-5 mx-auto items-center mb-10">
      <h1 className="mb-5 text-xl text-gray-300 text-center font-semibold uppercase tracking-widest">
        Skills
      </h1>
      <div className="grid grid-cols-4 gap-4 md:grid-cols-5 md:gap-5 shadow-inner bg-black/40 rounded-lg p-5 sm:p-10 max-w-7xl">
        {data.allProgrammingSkills?.map((skill) => (
          <div className="flex flex-col items-center space-y-1" key={skill.id}>
            <img
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full"
              src={skill.icon.responsiveImage.src}
              alt={skill.icon.responsiveImage.alt}
            />
            <p className="text-sm text-center text-gray-400">{skill.title}</p>
          </div>
        ))}
        {data.allDesignSkills?.map((skill) => (
          <div className="flex flex-col items-center space-y-1" key={skill.id}>
            <img
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full"
              src={skill.icon.responsiveImage.src}
              alt={skill.icon.responsiveImage.alt}
            />
            <p className="text-sm text-center text-gray-400">{skill.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
