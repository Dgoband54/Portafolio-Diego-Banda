import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectsList from '../components/ProjectsList';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ProjectsList />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
