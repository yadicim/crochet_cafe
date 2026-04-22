import { useContext, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Layout & Bileşenler
import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";
import { ColorStudio } from "./components/ColorStudio";
import { YarnGuide } from "./components/YarnGuide";

// Sayfalar / Seksiyonlar
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";
import { Gallery } from "@/pages/Gallery";

// Context
import { ThemeContext } from "@/Context";

// Sayfa değiştiğinde en üste çıkaran yardımcı bileşen
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const { t } = useTranslation();
  
  // ÖNEMLİ: Eğer context henüz yüklenmediyse hata almamak için kontrol ekliyoruz
  const theme = useContext(ThemeContext);
  
  // theme undefined ise varsayılan olarak light mod kabul et
  const lightMode = theme ? !theme.state.lightMode : true;

  return (
    <div
      style={{
        backgroundColor: lightMode ? "#f3d2cf" : "#0f1418",
        color: "white", 
      }}
      className="min-h-screen overflow-x-hidden flex flex-col transition-colors duration-500"
    >
      <ScrollToTop />
      <Navbar />

      <main className="grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <ColorStudio />
                <YarnGuide />
                <Projects />
                <Experience />
                <Contact />
              </>
            }
          />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;