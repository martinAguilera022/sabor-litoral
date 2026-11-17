
import "./Cronograma.css";
import Navbar from "../components/Navbar";
const actividades = [
  {
    hora: "11:00",
    texto: <>Apertura de puertas y acreditaciones</>,
    suave: true,
  },
  {
    hora: "12:00",
    texto: <>Apertura de feria de emprendedores y patio gastronómico</>,
    suave: true,
  },
  {
    hora: "12:15",
    texto: <><strong>Pastelería en vivo:</strong> postres y preparaciones con naranja, mandarina y limón por Ángelo Pedrazzoli</>,
  },
  {
    hora: "13:15",
    texto: <>Almuerzo y degustaciones de productos regionales</>,
  },
  {
    hora: "14:15",
    texto: <><strong>Charla:</strong> Entre Ríos, tierra de cítricos. Especialistas de INTA Concordia</>,
  },
  {
    hora: "15:00",
    texto: <><strong>Encuentro con productores:</strong> producción, variedades y comercialización citrícola. Invitados de FECIER</>,
  },
  {
    hora: "16:00",
    texto: <>Talleres, juegos y actividades recreativas infantiles</>,
    suave: true,
  },
  {
    hora: "17:00",
    texto: <><strong>Demostración gastronómica:</strong> budines, tortas, exprimidos y preparaciones tradicionales con cítricos entrerrianos</>,
  },
  {
    hora: "18:00",
    texto: <>Feria, degustaciones y encuentro con emprendedores</>,
  },
  {
    hora: "19:00",
    texto: <><strong>Apertura del escenario musical</strong> y presentación de artistas locales</>,
  },
  {
    hora: "19:30",
    texto: <><b>Maru Figueroa</b> – Música del litoral y chamamé</>,
  },
  {
    hora: "20:30",
    texto: <><b>De Costa a Costa</b> – Folclore y música entrerriana</>,
  },
  {
    hora: "21:30",
    texto: <><b>Facundo Torresán</b> – Chamamé y música entrerriana</>,
  },
  {
    hora: "22:30",
    texto: <>Gran cierre musical y despedida de Sabor Litoral</>,
    suave: true,
  },
];

function Cronograma2() {
  return (
    <>
      <header>
        <Navbar />
      </header>

  <main className="cronograma-page cronograma-dia2">
        <div className="cronograma-ondas cronograma-ondas-superior" />

        <div className="cronograma-contenido">
            <img
            src="/assets/cronograma dia dos.png"
            alt="Cronograma Día 2"
            className="cronograma-titulo"
          />

          <div className="cronograma-subencabezado">
            <p>
              Enterate y estate al tanto de todo lo que va a ver en este día.
            </p>

            <div className="cronograma-tematica">
              Eje de la jornada: producción citrícola entrerriana, cocina regional y sabores de nuestra tierra.
            </div>
          </div>

          <table className="cronograma-tabla">
            <thead>
              <tr>
                <th>Horario</th>
                <th>Actividad</th>
              </tr>
            </thead>

            <tbody>
              {actividades.map((actividad) => (
                <tr
                  key={actividad.hora}
                  className={actividad.suave ? "fila-suave" : ""}
                >
                  <td>{actividad.hora}</td>
                  <td>{actividad.texto}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="cronograma-ondas cronograma-ondas-debajo" />
      </main>
    </>
  );
}

export default Cronograma2;
