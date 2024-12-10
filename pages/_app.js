// pages/_app.js
import '../styles/globals.css'; // Importa los estilos globales

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
