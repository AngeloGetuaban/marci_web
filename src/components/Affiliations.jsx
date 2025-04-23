import React from 'react';
import ridgeLogo from '../images/ridge.webp';
import equalHousingLogo from '../images/equal-housing.webp';
import realtorLogo from '../images/realtor.webp';
import chamberLogo from '../images/chamber.webp';

const Affiliations = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {[
            { src: ridgeLogo, alt: 'The Ridge Realty Group' },
            { src: equalHousingLogo, alt: 'Equal Housing Opportunity' },
            { src: realtorLogo, alt: 'Realtor' },
            { src: chamberLogo, alt: 'Pahrump Valley Chamber of Commerce' },
          ].map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="h-24 md:h-28 object-contain transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Affiliations;
