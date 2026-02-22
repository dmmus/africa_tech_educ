import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'; // Assure-toi que le chemin est correct
import Home from './pages/Home'; // Importe ta page d'accueil (ou crée-la rapidement comme ci-dessous)
// Importe tes pages ici (ou crée-les rapidement comme ci-dessous)
// Idéalement, crée des fichiers séparés dans un dossier /pages
// const Home = () => (
//   <div className="p-10 text-center">
//     <h1 className="text-4xl font-bold text-[#1e293b]">Welcome to Afri Educ Tech</h1>
//     <p className="mt-4 text-gray-600">Innovation in education through 3D technology.</p>
//   </div>
// );

const Schools = () => (
  <div className="p-10 text-center">
    <h1 className="text-4xl font-bold text-[#73C2F0]">Our Partner Schools</h1>
    <p className="mt-4 text-gray-600">Discover the institutions that trust us.</p>
  </div>
);

const Contact = () => (
  <div className="p-10 text-center">
    <h1 className="text-4xl font-bold text-[#ba3a0f]">Contact Us</h1>
    <p className="mt-4 text-gray-600">Ready to transform your school? Let's talk.</p>
  </div>
);

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

      {/* Tu pourras ajouter un Footer ici plus tard */}
    </div>
  );
}

export default App;