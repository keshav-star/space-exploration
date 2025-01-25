import React, { useState } from 'react';

import PlanetModel from './PlanetModel';
import { LuMapPinned } from 'react-icons/lu';

const Explore3D = () => {
  const [title, setTitle] = useState(0);
  const facts = [
    {
      heading: 'Olympus Mons – The Tallest Volcano in the Solar System',
      description:
        'Olympus Mons is a massive shield volcano, standing about 13.6 miles (22 km) high—nearly three times the height of Mount Everest! It spans roughly the size of Arizona and has caldera pits at its summit, indicating past volcanic activity.',
      link: 'https://mars.nasa.gov/resources/21393/olympus-mons-the-largest-volcano-in-the-solar-system/',
      location: 'Western Hemisphere, Tharsis Region',
    },
    {
      heading: 'Valles Marineris – The Grand Canyon of Mars',
      description:
        "Valles Marineris is a canyon system stretching over 2,500 miles (4,000 km) long and up to 7 miles (11 km) deep. This vast rift is thought to have formed due to tectonic forces rather than water erosion, unlike Earth's Grand Canyon.",
      link: 'https://mars.nasa.gov/resources/5289/valles-marineris/',
      location: 'Eastern Hemisphere, Near Mars’ Equator',
    },
    {
      heading: 'Gale Crater – Home of Curiosity Rover',
      description:
        'Gale Crater, around 96 miles (154 km) wide, contains Mount Sharp at its center, a layered mountain that records Mars’ climate history. NASA’s Curiosity rover has been exploring this area since 2012, finding evidence of ancient lakes and water activity.',
      link: 'https://mars.nasa.gov/msl/mission/science/goals/',
      location: 'Southern Hemisphere, Aeolis Region',
    },
    {
      heading: 'Hellas Planitia – The Deepest Impact Basin',
      description:
        'Hellas Planitia is a massive impact crater over 1,400 miles (2,300 km) across and nearly 5 miles (8 km) deep. It is one of the largest impact structures in the Solar System and experiences extreme weather variations due to its depth.',
      link: 'https://mars.nasa.gov/resources/5266/hellas-basin/',
      location: 'Southern Hemisphere',
    },
    {
      heading: 'Polar Ice Caps – Frozen Water and Dry Ice',
      description:
        "Mars has polar ice caps made of water ice and carbon dioxide (dry ice). These caps change size with the seasons, growing larger in winter and shrinking in summer, much like Earth's polar regions.",
      link: 'https://mars.nasa.gov/resources/5288/martian-ice-caps/',
      location: 'North and South Poles',
    },
  ];

  return (
    <div className="w-full h-full grid md:grid-cols-2 bg-gradient-to-r from-[#a88e58] via-[#A29575] to-[#913124] py-10 px-20 border-t">
      <div className="flex flex-col justify-between items-start">
        <h2 className="text-3xl font-semibold font-serif underline my-6">
          {facts[title].heading}
        </h2>
        <p className="text-lg font-semibold">{facts[title].description}</p>

        <div className="flex items-center gap-10 my-4">
          <p className="text-lg font-semibold flex items-center justify-center gap-4 border p-2 hover:bg-[#58381C] rounded-lg cursor-pointer"><LuMapPinned /> {facts[title].location}</p>
          <a href={facts[title].link} target="_blank" rel="noopener noreferrer">
            {' '}
            <button className="text-lg font-semibold bg-[#58381C] px-4 py-2 rounded">
              Read More
            </button>
          </a>
        </div>
      </div>
      <PlanetModel setTitle={setTitle} />
    </div>
  );
};

export default Explore3D;
