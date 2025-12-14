'use client';

import { useInView } from 'react-intersection-observer';
import { ProjectCard } from '../ReuseableComponent/ProjectCard/page';
import colorSharp2 from '../../../../public/img/color-sharp2.png';
import Link from 'next/link';

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const projects = [
    {
      title: "NetflixGPT",
      imgUrl: '/img/netflix.png',
      link: 'https://netfilx-gpt-project.vercel.app/',
    },
    {
      title: "Matecaps",
      imgUrl: '/img/matecaps.png',
      link: 'https://prabhulalmatecapproject.netlify.app/home',
    },
    {
      title: 'Pokemon Cards',
      imgUrl: '/img/pokemon.jpg',
      link: 'https://reactpokemonappcards.netlify.app/',
    },
    {
      title: 'Weather App',
      imgUrl: '/img/weather.png',
      link: 'https://projectreactweatherapp.netlify.app/',
    },
  ];

  return (
    <section
      id="projects"
      className="relative bg-black py-20"
      style={{
        backgroundImage: `url(${colorSharp2.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'end',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-4" ref={ref}>
        <div
          className={`text-center transition-opacity duration-1000 ${
            inView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl font-bold text-white">Projects</h2>

          {/* Project Cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Link href={project.link} key={index}>
                <ProjectCard imgUrl={project.imgUrl} title={project.title} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
