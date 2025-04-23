import React from 'react';

const MapSection = () => {
  return (
    <section className="w-full mt-0">
      <div className="w-full">
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.2725151675104!2d-115.95782812360952!3d36.184253702177074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c6398c31855555%3A0xca2c250302350734!2s3190%20NV-160%20Suite%20F%2C%20Pahrump%2C%20NV%2089048%2C%20USA!5e0!3m2!1sen!2sph!4v1745397437790!5m2!1sen!2sph"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[500px] md:h-[600px] border-0 shadow-lg"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
