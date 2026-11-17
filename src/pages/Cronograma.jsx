import "./Cronograma.css";
import Navbar from "../components/Navbar";

const actividades = [
  { hora: "11:00", texto: <>Apertura de puertas y acreditaciones</>, suave: true },
  { hora: "12:15", texto: <>Apertura de feria de emprendedores y patio gastronómico</>, suave: true },
  { hora: "13:15", texto: <><strong>Cocina en vivo</strong> por: Ángel Sánchez máximo exponente de la cocina litoralera</> },
  { hora: "14:15", texto: <>Almuerzo y degustaciones de productos regionales</> },
  { hora: "15:00", texto: <><strong>Charla:</strong> Conociendo el río Paraná y sus peces por la Dra. Carla Becchetti, investigadora independiente del CONICET</> },
  { hora: "16:00", texto: <><strong>Charla:</strong> Pesca sustentable y futuro de nuestros recursos por la Dra. Ana Pía Rabuffetti, investigadora especializada en pesquerías del Paraná</> },
  { hora: "17:00", texto: <>Talleres, juegos y actividades recreativas infantiles</>, suave: true },
  { hora: "19:00", texto: <><strong>Demostración gastronómica:</strong> empanadas y preparaciones tradicionales con pescado de río</> },
  { hora: "19:30", texto: <><strong>Apertura del escenario musical</strong> y presentación de artistas locales</> },
  { hora: "20:30", texto: <><b>Litoral Mitá</b> - Chamamé y música del litoral</> },
  { hora: "21:30", texto: <><b>De Costa a Costa</b> - Folclore y música entrerriana</> },
  { hora: "22:30", texto: <>Cierre del festival por el día</>, suave: true },
];

function Cronograma() {
  return (
    <>
      <Navbar />
      <main className="cronograma-page cronograma-dia1">
        <div className="cronograma-ondas cronograma-ondas-superior" />
        <div className="cronograma-contenido">
          <img src="../assets/titulo-cronograma.png" alt="" className="crono-dia1" />
          <div className="cronograma-subencabezado">
            <p>Enterate y estate al tanto de todo lo que va a ver en este día.</p>
            <div className="cronograma-tematica">Eje de la jornada: cocina de río, biodiversidad del Paraná y pesca responsable</div>
          </div>
          <table className="cronograma-tabla">
            <thead><tr><th>Horario</th><th>Actividad</th></tr></thead>
            <tbody>{actividades.map((actividad) => (
              <tr key={actividad.hora} className={actividad.suave ? "fila-suave" : ""}>
                <td>{actividad.hora}</td><td>{actividad.texto}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <div className="cronograma-ondas cronograma-ondas-debajo" />
      </main>
    </>
  );
}

export default Cronograma;
