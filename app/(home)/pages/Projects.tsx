import React from "react";
import { PinContainer } from "../components/ui/pin";
import Title from "../components/Subtitle";

export default function Projects() {
  const projects = [
    {
      href: "https://2023.igem.wiki/mcmaster-canada/",
      heading: "2023 BacTrack",
      description: "Development of an ingestible biosensor for the in vivo characterization of gut metabolites related to major depressive disorder through a CRISPR mediated reporting system.",
      image: "/2023.png",
    },
    {
      href: "https://2022.igem.wiki/mcmaster-canada/",
      heading: "2022 Project",
      description: "Development of a colorimetric bacterial diagnostic for the characterization of gut metabolite markers for Major Depressive disorder.",
      image: "/2023.png",
    },
    {
      href: "https://www.frontiersin.org/articles/10.3389/fsysb.2023.1274184/full",
      heading: "Publication",
      description: "Peer-reviewed HYPOTHESIS AND THEORY article published in Frontiers Systems Biology detailing the 2023 BacTrack project. ",
      image: "/publicationThumbnail.png",
    },
  ];

  return (
    <div className="max-w-7xl py-10 mx-auto max-h-full px-5">
      <div className="text-4xl font-bold text-left mt-32">PROJECTS</div>
      <div>
        <Title text="Current Projects" className="mb-5" />
        <hr />
        <p className="text-xl mt-3">Coming Soon</p>
        <Title text="HP Initiatives & StoryBook" className="mb-5" />
        <hr />
        <p className="text-xl mt-3">Coming Soon</p>
        <Title text="Past Projects" className="mb-5" />
        <hr />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 gap-5">
          {projects.map((project, index) => (
            <PinContainer
              key={index}
              href={project.href}
              className="flex flex-col p-4 tracking-tight text-slate-700/50 border border-gray-300 rounded w-full"
            >
              <h3 className="pb-2 m-0 font-bold text-base text-slate-800">
                {project.heading}
              </h3>
              <hr />
              <div className="text-base m-0 p-2 font-normal h-32">
                <span className="text-slate-700">{project.description}</span>
              </div>
              <img
                src={project.image}
                alt={project.heading}
                className="w-full rounded-lg mt-4"
              />
            </PinContainer>
          ))}
        </div>
      </div>
    </div>
  );
}
