import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'; // Assure-toi que le chemin est correct
import Home from './pages/Home'; // Importe ta page d'accueil (ou crée-la rapidement comme ci-dessous)
import Contact from './pages/Contact'; // Importe ta page de contact (ou crée-la rapidement comme ci-dessous)
import Footer from './components/Footer';
const Schools = () => (
  <div className="p-10 text-center">
    <h1 className="text-4xl font-bold text-[#0F5075]">Our Partner Schools</h1>
    <p className="mt-4 text-gray-600">Discover the institutions that trust us.</p>
  </div>
);

// const Contact = () => (
//   <div className="p-10 text-center">
//     <h1 className="text-4xl font-bold text-[#ba3a0f]">Contact Us</h1>
//     <p className="mt-4 text-gray-600">Ready to transform your school? Let's talk.</p>
//   </div>
// );

function App() {
  return (
    <div className="min-h-screen bg-[#EAF6FA]/30 font-outfit">
      {/* La NavBar restera toujours en haut */}
      <NavBar />

      {/* Le contenu qui change selon l'URL */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/contact" element={<Contact />} />
          {/* Route par défaut (404) si besoin */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      {/* Tu pourras ajouter un Footer ici plus tard */}
    </div>
  );
}

export default App;