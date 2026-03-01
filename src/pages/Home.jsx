import React, { Suspense } from 'react';
import { Link } from 'react-router-dom'; 
import bgImage from '../assets/background_hero_page.png';
import rightImage from '../assets/image_1.png';
import Experience3D from '../components/Experience3D';


const Home = () => {
  return (
    <div className="font-outfit">
      <section className="relative h-[calc(100vh-88px)] flex items-center justify-center overflow-hidden">
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
        
      <section className="py-20 bg-white">
        {/* SECTION HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F5075] mb-4">
            Explore Knowledge in <span className="text-[#E3A045]">Immersive 3D</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just read about it. Interact, dismantle, and master complex concepts 
            through our interactive virtual laboratory.
          </p>
        </div>
        {/* 3D VIEWER ZONE */}
          <div className="relative group max-w-6xl mx-auto px-4">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#73C2F0] via-[#E3A045] to-[#BA3A0F] rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative h-[500px] md:h-[600px] w-full bg-[#050b14] rounded-xl overflow-hidden shadow-2xl border border-gray-800">
              <Suspense fallback={
                <div className="flex flex-col items-center justify-center h-full text-white">
                   <div className="w-12 h-12 border-4 border-[#73C2F0] border-t-transparent rounded-full animate-spin mb-4"></div>
                   <p className="text-lg font-light tracking-wider text-gray-300">Loading Virtual Lab...</p>
                </div>
              }>
                <Experience3D />
              </Suspense>
            </div>
          </div>
      </section>
    </div>
  );
};

export default Home;