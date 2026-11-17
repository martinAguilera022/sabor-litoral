import { useState, useRef } from 'react';
import { motion } from "motion/react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Entradas from "./pages/Entradas";
import Cronograma from "./pages/Cronograma";
function Ubicacion() {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

const dragStart = useRef({ x: 0, y: 0 });
const initialPosition = useRef({ x: 0, y: 0 });

  const limitarPosicion = (x, y, nivelZoom, elemento) => {
    if (!elemento || nivelZoom <= 1) {
      return { x: 0, y: 0 };
    }

    const maxX = (elemento.clientWidth * (nivelZoom - 1)) / 2;
    const maxY = (elemento.clientHeight * (nivelZoom - 1)) / 2;

    return {
      x: Math.max(-maxX, Math.min(maxX, x)),
      y: Math.max(-maxY, Math.min(maxY, y))
    };
  };


  const cambiarZoom = (cantidad) => {
    setZoom((actual) => {
      const nuevoZoom = Math.max(1, Math.min(2.5, actual + cantidad));

      const ventana = document.querySelector('.mapa-ventana');

      setPosition((actualPos) =>
        limitarPosicion(
          actualPos.x,
          actualPos.y,
          nuevoZoom,
          ventana
        )
      );

      return nuevoZoom;
    });
  };

  const iniciarArrastre = (e) => {
    if (zoom <= 1) return;

    e.currentTarget.setPointerCapture(e.pointerId);

    setDragging(true);

    dragStart.current = {
      x: e.clientX,
      y: e.clientY
    };

    initialPosition.current = { ...position };
  };

  const moverMapa = (e) => {
    if (!dragging) return;

    const diferenciaX = e.clientX - dragStart.current.x;
    const diferenciaY = e.clientY - dragStart.current.y;

    const ventana = e.currentTarget;

    setPosition(
      limitarPosicion(
        initialPosition.current.x + diferenciaX,
        initialPosition.current.y + diferenciaY,
        zoom,
        ventana
      )
    );
  };

  const terminarArrastre = () => {
    setDragging(false);
  };

 return (
  <motion.section
    className="ubicacion"
    id="ubicacion"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 2.5, ease: "easeInOut" }}
  >

    <div className="mapa-contenedor">
      <div className="mascara-ala"></div>

      <div
        className={`mapa-ventana ${zoom > 1 ? 'mapa-zoom' : ''}`}
        onPointerDown={iniciarArrastre}
        onPointerMove={moverMapa}
        onPointerUp={terminarArrastre}
        onPointerCancel={terminarArrastre}
        onLostPointerCapture={terminarArrastre}
      >
        <img
          className="mapa-imagen"
          src="/assets/mapita-23.webp"
          alt="Mapa del predio del festival"
          draggable="false"
          style={{
            transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${zoom})`
          }}
        />
      </div>

      <img
        className="mapa-marco"
        src="/assets/mapita-21.webp"
        alt=""
      />

      <div className="mapa-controles">
        <button
          onClick={() => cambiarZoom(0.2)}
          aria-label="Acercar"
          type="button"
        >
          +
        </button>

        <button
          onClick={() => cambiarZoom(-0.2)}
          aria-label="Alejar"
          type="button"
        >
          −
        </button>
      </div>
    </div>

  </motion.section>
);}
const ASSETS = '/assets/';

// Invitados del festival

const speakersDay1 = [
  {
    image: 'imagenes de personas-20.png',
    name: 'Ángel Sánchez',
    role: 'Cocina en vivo',
    schedule: '12:15 hs',
    boldDescription: 'Referente de la cocina litoraleña,',
    description: ' compartirá sus conocimientos y técnicas para revalorizar los sabores tradicionales de nuestra región a través de la gastronomía de río.'
  },
  {
    image: 'imagenes de personas-19.png',
    name: 'Dra. Carla Bacchetta',
    role: 'Charla',
    schedule: '14:15 hs',
    boldDescription: 'Investigadora del CONICET especializada en el estudio de los peces.',
    description: ' Participará compartiendo conocimientos sobre la biodiversidad y los ecosistemas acuáticos del Paraná.'
  },
  {
    image: 'imagenes de personas-18.png',
    name: 'Dra. Ana Pía Rabuffetti',
    role: 'Charla',
    schedule: '15:00 hs',
    boldDescription: 'Investigadora especializada en pesquerías del río Paraná.',
    description: ' Abordará la importancia de conocer y preservar los recursos pesqueros para promover una actividad responsable.'
  }
];

const speakersDay2 = [
  {
    image: 'imagenes-de-personas-22.webp',
    role: 'Producción citrícola',
    boldDescription: 'Pastelero y participante de Bake Off Argentina 2020',
    description: ', que compartirá su talento y creatividad en una demostración de pastelería en vivo, presentando preparaciones dulces con sabores e ingredientes regionales.'
  },
  {
    image: 'imagenes-de-personas-21.webp',
    role: 'Agroecología',
    boldDescription: 'Profesionales dedicados a la investigación y el desarrollo agropecuario',
    description: ', que compartirán conocimientos sobre la producción de cítricos y su importancia para la economía regional.'
  },
  {
    image: 'imagenes-de-personas-23.webp',
    role: 'Cocina regional',
    boldDescription: 'Representantes del sector citrícola entrerriano',
    description: ' que compartirán experiencias sobre producción, comercialización y los desafíos de una actividad fundamental para la región.'
  }
];

// Separador decorativo
function WaveDivider({ className = '' }) {
  return (
    <div className={`wave-divider ${className}`}>
      <svg viewBox="0 0 1440 160" preserveAspectRatio="none">
        <path
          className="wave-cream"
          d="M0,30 C210,130 310,5 520,47 C730,90 780,138 1020,70 C1210,15 1300,28 1440,4 L1440,160 L0,160 Z"
        />
        <path
          className="wave-gold"
          d="M0,18 C210,118 310,-7 520,35 C730,78 780,126 1020,58 C1210,3 1300,16 1440,-8"
        />
      </svg>
    </div>
  );
}

// Tarjetas de invitados

function SpeakerGroup({ day, people }) {
  return (
    <section className={`speaker-day speaker-day-${day}`}>
      <div className="speaker-grid">
        {people.map((speaker, index) => (
          <article className="speaker-card" key={index}>
            <img
              src={`${ASSETS}${speaker.image}`}
              alt={speaker.role}
              className="speaker-photo"
            />

            <p className="speaker-description">
  {speaker.boldDescription && (
    <strong>{speaker.boldDescription}</strong>
  )}
  {speaker.description}
</p>
          </article>
        ))}
      </div>

      
    </section>
  );
}

// Página principal
function Home() {
    
  return (
    <>
      {/* ENCABEZADO */}
      <header className="site-header">
        <a className="brand-header" href="#inicio">
          <img src={`${ASSETS}element-03.webp`} alt="Sabor Litoral" />
        </a>

        <nav className="main-nav">
          <a href="#festival">Festival</a>
          <a href="#charlas">Charlas</a>
          <a href="#ubicacion">Ubicación</a>
          <a href="#emprendedores">Emprendedores</a>
          <a href="/entradas" className="nav-ticket">
            MIS ENTRADAS
          </a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="inicio">
          <div className="hero-river"></div>

         <motion.img
  className="hero-decoration"
  src={`${ASSETS}elementos-fondo.webp`}
  alt=""
  initial={{ opacity: 0, y: 180 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 2.5,
    delay: 0.5,
    ease: [0.22, 1, 0.36, 1]
  }}
/>

  <motion.div
  className="hero-content"
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 2.6,
    ease: [0.22, 1, 0.36, 1]
  }}
>
            <p className="hero-location">Paraná, Entre Ríos</p>

            <span className="welcome-pill">BIENVENIDOS A</span>

            <img
              className="hero-logo"
              src={`${ASSETS}element-08.webp`}
              alt="Sabor Litoral"
            />

            <p className="hero-description">
              Festival de cocina de río y productos regionales
            </p>

            <p className="hero-date">10 y 11 de Julio</p>

            <a href="#festival" className="hero-button">
              Descubrí el festival →
            </a>
          </motion.div>
        </section>

        {/* SECCIÓN 01 - EL ENCUENTRO */}
        <section className="encuentro" id="festival">
          <div className="encuentro-background"></div>

          <img
            className="encuentro-pot"
            src={`${ASSETS}element-04.webp`}
            alt="Olla tradicional sobre el fuego"
          />
  <motion.img
  className="encuentro-fire"
  src={`${ASSETS}element-05.webp`}
  alt=""
  animate={{
    y: [0, -8, 0, -5, 0],
    scaleY: [1, 1.04, 0.98, 1.03, 1],
    scaleX: [1, 1.02, 0.99, 1.01, 1],
    rotate: [0, -0.5, 0.5, -0.3, 0]
  }}
  transition={{
    duration: 2.5,
    repeat: Infinity,
    ease: "easeInOut"
  }}
/>
   <motion.img
      className="encuentro-paper"
            src={`${ASSETS}Elementos-17.webp`}
            alt=""
      initial={{ opacity: 0, x: 180 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
    >
</motion.img>
         <div
  className="encuentro-content" >

            <motion.span
      className="encuentro-number"
      initial={{ opacity: 0, x: -150 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      01 / EL ENCUENTRO
    </motion.span>
 <motion.div
      initial={{ opacity: 0, x: 180 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <img
        className="titulo-encuentro"
        src={`${ASSETS}Elementos-13.webp`}
        alt=""
      />

      <p>
        Sabor Litoral es un encuentro que celebra la identidad
        gastronómica de Entre Ríos. Un espacio para descubrir
        la cocina de río, conocer a sus productores y poner en
        valor la pesca sustentable y los cítricos de nuestra tierra.
      </p>

      <p className="encuentro-highlight">
        Tradición pesquera, compromiso ambiental.
      </p>

      <a href="/entradas" className="button-encuentro">
        COMPRAR ENTRADAS ↗
      </a>
    </motion.div>
        
</div>
        </section>
 <section className="saberes" id="charlas">
  {/* Fondo estático */}
  <div className="saberes-background"></div>

  {/* Contenido que aparece */}
  <motion.div
    className="saberes-content"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 2.5, ease: "easeInOut" }}
  >
    <span className="saberes-number">
      02 / SABERES DEL LITORAL
    </span>

    <img
      className="saberes-title"
      src="/assets/Elementos-12.webp"
      alt="Voces que alimentan"
    />

    <p>
      Conocé a los especialistas, cocineros y productores
      que compartirán sus experiencias durante el encuentro.
    </p>
  </motion.div>

  {/* Decoración que aparece */}
  <motion.img
    className="saberes-decoration"
    src="/assets/elementos-17.webp"
    alt=""
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 2.5, delay: 0.3, ease: "easeInOut" }}
  />
</section>
<section className="invitados-dia">
  <div className="invitados-fondo"></div>

  <motion.img
    className="invitados-escamas"
    src="/assets/Elementos-07.webp"
    alt=""
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
  />

  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
  >
    <SpeakerGroup day={1} people={speakersDay1} />
  </motion.div>

  <motion.button
    className="invitados-cronograma"
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 2.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
  >
    CRONOGRAMA COMPLETO DÍA 1
  </motion.button>
</section>

<section className="invitados-dia2">
  <div className="invitados-fondo2"></div>

 <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
  >
    <SpeakerGroup day={2} people={speakersDay2} />
  </motion.div>

  <motion.button
    className="invitados-cronograma"
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 2.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
  >
    CRONOGRAMA COMPLETO DÍA 2
  </motion.button>
</section>
<section className="sumate" id="emprendedores">

  {/* Imagen de fondo estática */}
  <img
    className="sumate-fondo"
    src="/assets/fondo-estirado-07.webp"
    alt=""
  />

  {/* Cítricos: entran desde la izquierda */}
  <motion.img
    className="sumate-citricos"
    src="/assets/Elementos-06.webp"
    alt=""
    initial={{ opacity: 0, x: -180 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
  />

  {/* Contenido: entra desde la derecha */}
  <motion.div
    className="sumate-content"
    initial={{ opacity: 0, x: 180 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
  >
    <span className="sumate-number">
      03 / <strong>SÚMATE AL ENCUENTRO</strong>
    </span>

    <p>
      Si tenés un emprendimiento de cítricos, productos regionales
      o una casa de pesca, queremos que seas parte de Sabor Litoral.
      Inscribite para tener tu propio stand y compartir lo que hacés.
    </p>

    <form className="sumate-form">
      <input type="text" placeholder="Tu emprendimiento..." />
      <input type="text" placeholder="Responsable..." />
      <input type="text" placeholder="Tu contacto..." />
      <button type="submit">ENVIAR SOLICITUD</button>
    </form>
  </motion.div>

</section>
<Ubicacion/>
      </main>

      {/* FOOTER */}
   
<footer className="site-footer">
  <img
    className="footer-background"
    src="/assets/fondo-estirado-08.webp"
    alt=""
  />

  <a className="brand brand-footer" href="#inicio">
    <img src={`${ASSETS}element-08.webp`} alt="Sabor Litoral" />
  </a>

  <p>Sabores que nos representan.</p>
  <p className="footer-location">
    Paraná, Entre Ríos, Argentina
  </p>

  
<nav className="footer-nav">
  <a href="#festival">Festival</a>
  <span>✳</span>
  <a href="#charlas">Charlas</a>
  <span>✳</span>
  <a href="#ubicacion">Ubicación</a>
  <span>✳</span>
  <a href="#emprendedores">Emprendedores</a>
</nav>

 

  <a className="instagram-handle" href="https://www.instagram.com/saborlitoral_parana/" target="_blank" rel="noreferrer">
    @saborlitoral_paraná
  </a>

  <p className="footer-copy">
    © 2026 Sabor Litoral. Todos los derechos reservados.
  </p>

  <a className="back-top" href="#inicio">↑</a>
</footer>

    </>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entradas" element={<Entradas />} />
        <Route path="/cronograma" element={<Cronograma />} />
      </Routes>
    </BrowserRouter>
  );
}