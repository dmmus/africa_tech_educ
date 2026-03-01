import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    school: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Your message has been sent to Afri Educ Tech.");
  };

  return (
    <div className="min-h-screen pt-28 pb-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F5075] mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Have questions about our 3D labs or want to book a demo for your school? 
            Our team is here to help you revolutionize your classroom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 bg-[#EAF6FA]/30 rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          
          {/* LEFT SIDE: CONTACT INFO */}
          <div className="bg-[#0F5075] p-10 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-full">🌍</div>
                  <p>Based in Africa, Serving the World</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-full">📧</div>
                  <p>contact@afrieductech.com</p>
                </div>
              </div>
            </div>

            {/* TRICOLOR DECORATION */}
            <div className="mt-12">
              <div className="flex gap-2">
                <div className="h-2 w-12 bg-[#E3A045]"></div>
                <div className="h-2 w-12 bg-white"></div>
                <div className="h-2 w-12 bg-[#BA3A0F]"></div>
              </div>
              <p className="text-sm mt-4 text-white/70 italic">
                Redefining Education through Innovation.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: FORM */}
          <div className="p-10 bg-white">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0F5075] focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0F5075] focus:border-transparent outline-none transition-all"
                  placeholder="john@school.com"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">School/Institution Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0F5075] focus:border-transparent outline-none transition-all"
                  placeholder="Afri Educ Academy"
                  onChange={(e) => setFormData({...formData, school: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea 
                  rows="4" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0F5075] focus:border-transparent outline-none transition-all"
                  placeholder="How can we help you?"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#BA3A0F] hover:bg-[#E3A045] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-[#BA3A0F]/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;