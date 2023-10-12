import { Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import AboutMe from '@pages/AboutMe';
import Skills from '@pages/Skills';

export default function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about-me" element={<AboutMe />} />
      <Route path="skills" element={<Skills />} />
      <Route path="*" element={<div>Não encontrado</div>} />
    </Routes>
  );
}
