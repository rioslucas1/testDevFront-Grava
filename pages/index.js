import Header from '../components/Header';
import Hero from '../components/Hero';
import Cards from '../components/Cards';
import Gallery from '../components/GalleryApi'
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Cards />
      <Gallery/>
      <Footer />
    </div>
  );
}
