import React from 'react';
import { Link } from 'react-router-dom'; 
import bgImage from '../assets/background_hero_page.png';
import rightImage from '../assets/image_1.png';

const Home = () => {
  return (
    <section className="relative h-[calc(100vh-88px)] flex items-center justify-center overflow-hidden font-outfit">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${bgImage})` }}
        aria-hidden="true" // accessible usage
      >
        {/* Overlay for the background image */}
        <div className="absolute inset-0 bg-white opacity-50"></div> 
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start text-left text-black">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
           <span className='text-[#0F5075]'>Shaping</span>  the <span className='text-[#BA3A0F]'>Future</span> of <span className='text-[#E3A045]'>Learning</span>
          </h1>
          <p className="text-base md:text-xl mb-8 max-w-md ">
            Unlock new dimensions of learning through our cutting-edge VR and 3D solutions. Empowering African students for tomorrow's world.
          </p>
          <Link 
            to="/contact" 
            className="bg-[#BA3A0F] hover:bg-[#E3A045] text-white 
                       font-bold py-3 px-6 md:py-4 md:px-10 rounded-full shadow-lg text-base md:text-lg 
                       transition duration-300 transform hover:scale-105"
          >
            Explore Our Solutions
          </Link>
        </div>

        {/* right image  */}
        <div className="flex justify-center md:justify-end">
          <img 
            src={rightImage} 
            alt="Student using VR headset in a futuristic classroom" 
            className="w-full max-w-md h-auto animate-fade-in"
          />
        </div>
      </div>
    </section>

    
  );
};

export default Home;