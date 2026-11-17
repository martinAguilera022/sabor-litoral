import { useState } from "react";
import { Link } from "react-router-dom";
import "./Entradas.css";
import Navbar from "../components/Navbar";
function SelectorCantidad() {
  const [cantidad, setCantidad] = useState(0);

  return (
    <div className="selector-cantidad">
      <button
        className="cantidad-restar"
        onClick={() => setCantidad(Math.max(0, cantidad - 1))}
        aria-label="Restar entrada"
      >
        −
      </button>

      <span>{cantidad}</span>

      <button
        className="cantidad-sumar"
        onClick={() => setCantidad(cantidad + 1)}
        aria-label="Sumar entrada"
      >
        +
      </button>
    </div>
  );
}
function Entradas() {
  return (
   <div className="entradas-wrapper">
      <header className="entradas-navbar">
        <Navbar />
      </header>
    <main className="entradas-page">
       
<img
    src="/assets/hojas.webp"
    alt=""
    className="entradas-hojas entradas-hojas-superior"
  />

  <img
    src="/assets/hojas.webp"
    alt=""
    className="entradas-hojas entradas-hojas-inferior"
  />

      {/* ENCABEZADO */}
      <header className="entradas-header">
        <Link to="/" className="entradas-volver">
          ← VOLVER AL FESTIVAL
        </Link>
      </header>

      {/* INTRODUCCIÓN */}
      <section className="entradas-intro">
       <img
    src="/assets/compra-tus-entradas.webp"
    alt="Comprá tus entradas"
    className="entradas-titulo-imagen"
  />


        <p>
          Elegí tu experiencia y disfrutá de dos jornadas
          de sabores del Litoral.
        </p>

        <div className="entradas-aviso">
          <strong>Menores de 8 años: entrada gratuita</strong>
          <p>
            Presentando DNI o documento que acredite la edad.
          </p>
        </div>
      </section>

      {/* ENTRADAS POR DÍA */}
      <section className="entradas-opciones">

        {/* DÍA 1 */}
        <article className="entrada-card entrada-dia1">

         
          <img
            src="/assets/fondo-dia-1.webp"
            alt=""
            className="entrada-fondo"
          />

          <div className="entrada-card-contenido">

            <p className="entrada-fecha">
              10 de julio
            </p>

            <p className="entrada-descripcion">
              Cocina de río y pesca sustentable.
            </p>

            <div className="entrada-precio">
              <strong>$8.000</strong>
              <span>Por persona</span>
            </div>

            <div className="entrada-acciones">
              <SelectorCantidad />
              <button>COMPRAR</button>
            </div>

          </div>
        </article>

        {/* DÍA 2 */}
        <article className="entrada-card entrada-dia2">

     

          <img
            src="/assets/fondo-dia-2.webp"
            alt=""
            className="entrada-fondo"
          />

          <div className="entrada-card-contenido">

            <p className="entrada-fecha">
              11 de julio
            </p>

            <p className="entrada-descripcion">
              Cítricos, pastelería y productos regionales.
            </p>

            <div className="entrada-precio">
              <strong>$8.000</strong>
              <span>Por persona</span>
            </div>

            <div className="entrada-acciones">
              <SelectorCantidad />
              <button>COMPRAR</button>
            </div>

          </div>
        </article>

      </section>

      {/* PACK COMPLETO */}
     
<section className="entrada-pack">

  <img
    src="/assets/pack-completo.webp"
    alt=""
    className="pack-fondo"
  />

  <div className="pack-contenido">
   
    <strong>10 y 11 de Julio</strong>
    <strong className="acceso-festival">Acceso a los dos días del festival</strong>
    <p>Descubri la cocina del rio, la pesca sustentable, los sabores citricos y las tradiciones de nuestra región en una experiencia llena de gastronomia,cultura y encuentros</p>
  </div>

  <div >
    
  <div className="pack-compra">
  <div className="pack-precio">
    <strong>$14.000</strong>
    <span>Por persona | Ahorrás $2.000</span>
  </div>

  <div className="entrada-acciones pack-acciones">
    <SelectorCantidad />
    <button>COMPRAR</button>
  </div>
</div>
  </div>

</section>


     

    </main>
    </div>
  );
}

export default Entradas;
