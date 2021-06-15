import "tailwindcss/tailwind.css";
import '../styles/globals.css';
import { useEffect } from "react";

// Import Swiper styles
import 'swiper/swiper.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log("App Running...");
}, [])
  return <Component {...pageProps} />
}

export default MyApp
