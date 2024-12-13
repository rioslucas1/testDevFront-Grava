import Header from '../components/Header';
import Hero from '../components/Hero';
import Cards from '../components/Cards';
import Gallery from '../components/GalleryApi'
import Footer from '../components/Footer';
import { Fragment } from 'react';

export default function Home() {
  return (
      <Fragment>
        <Header />
        <Hero />
        < Cards />
        <Gallery/>
        <Footer />
      </Fragment>
  );
}
