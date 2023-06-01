import "./App.css";
import Habilidades from "./components/Habilidades.jsx";
import Scroll from "./components/Scroll.jsx";
import {skills} from './db/skill.js'


function App() {

  return (
    <main className="container">
      {/* Seccion de inicio */}
      <section className="inicio" id="inicio">
        <h1>Gabriel Quiroz</h1>
        <nav>
          <a href="#inicio" className="opcion inf der">
            Inicio
          </a>
          <a href="#habilidades" className="opcion inf der">
            Habilidades
          </a>
          <a href="#portafolio" className="opcion inf der">
            Portafolio
          </a>
          <a href="#contacto" className="opcion inf der">
            Contacto
          </a>
        </nav>
        <div className="nav-responsive" id="nav-responsive">
          <a href="#inicio" className="opcion inf der">
            <i className="fa-solid fa-house"></i>
          </a>
          <a href="#habilidades" className="opcion inf der">
            <i className="fa-solid fa-hammer"></i>
          </a>
          <a href="#portafolio" className="opcion inf der">
            <i className="fa-solid fa-briefcase"></i>
          </a>
          <a href="#contacto" className="opcion inf der">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
        <div className="fila">
          <div className="col inf der">
            <div className="info">
              <h2>
                Bienvenido,
                Soy <span className="analista">Analista Programador.</span>
              </h2>
              <p>y en este espacio encontraras las tecnologías que he utilizado, y proyectos que actualmente tengo en GitHub.</p>
              <div className="redes">
                <a href="https://www.linkedin.com/in/gabriel-quiroz-dev">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/GabrielQuiroz1995">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.instagram.com/gquiroz1995/">
                  <i className="fa-brands fa-square-instagram"></i>
                </a>
              </div>
              <a href="../img/cv.docx" download className="btn-descargar sup">
                Descargar CV <i className="fa-solid fa-circle-down"></i>
              </a>
            </div>
          </div>
          <div className="col inf">
            <img src="../img/portada.jpeg" alt="" />
          </div>
        </div>
      </section>
      <span className="glitch-effect" data-text="Texto Glitch"></span>
      {/* Seccion  Habilidades */}
      <div className="habilidades" id="habilidades">
        <h2 className="titulo-seccion inf">Habilidades</h2>
        <div className="fila">
          {skills.map((skill) => {
            const { habilidad, detalle, porcentaje } = skill;
            return (
              <Habilidades
                key={habilidad}
                habilidad={habilidad}
                detalle={detalle}
                porcentaje={porcentaje}
              ></Habilidades>
            );
          })}
        </div>
      </div>
      {/* Seccion Blog */}
      <section id="portafolio" className="blog">
        <h2 className="titulo-seccion inf">Portafolio</h2>
        <div className="fila">
          <div className="col inf der green">
            <header>
              <h3>Carro de Compras - JS</h3>
            </header>
            <p>
              Tecnologias Html5, CSS, JavaScript. Manipulacion del DOM,
              funciones, responsividad
            </p>
            <img src="/src/assets/img/proy1.png" alt="" />
            <a
              href="https://gabrielquiroz1995.github.io/carritoJS/"
              className="btn-leer sup der"
            >
              Visitar Web <i className="fa-regular fa-circle-right"></i>
            </a>
          </div>
          <div className="col inf green">
            <header>
              <h3>Encriptador</h3>
            </header>
            <p>
              Proyecto de Alura-Oracle, se utilizan ciclos, condicionales y
              manejo de DOM
            </p>
            <img src="/src/assets/img/proy2.png" alt="" />
            <a
              href="https://gabrielquiroz1995.github.io/encriptar-alura/"
              className="btn-leer sup der"
            >
              Visitar Web <i className="fa-regular fa-circle-right"></i>
            </a>
          </div>
        </div>
        <div className="fila">
          <div className="col inf der green">
            <header>
              <h3>Red Social</h3>
            </header>
            <p>
              Tecnologias ReactJS, NodeJS, Express, Mongoodb, JWT.
              <br />
              Creacion de Front y Back, consumo de API, Almacenamiento de datos,
              manejo de hooks, utilizacion de Redux.
              Aplicacion que requiere hostin por lo tanto solo esta en el repositorio de github
            </p>
            <img src="/src/assets/img/proy3.png" alt="" />
            <a href="https://github.com/GabrielQuiroz1995/red-social-front" className="btn-leer sup der">
              Ir a GitHub <i className="fa-regular fa-circle-right"></i>
            </a>
          </div>
        </div>
      </section>
      {/* Seccion de contacto */}
      <section className="contacto" id="contacto">
        <form
          action="https://formsubmit.co/gabrielquiroz1995@gmail.com"
          method="POST"
        >
          <h2 className="titulo-seccion inf">Contacto</h2>
          <div className="fila">
            <div className="col info">
              <h2>
                Hablemos <br /> ahora mismo!
              </h2>
            </div>
            <div className="col">
              <div className="entrada">
                <label>Correo</label>
                <input type="text" name="email" required />
              </div>
              <div className="entrada">
                <label>Consulta</label>
                <textarea
                  name="detalle"
                  id=""
                  cols="30"
                  rows="10"
                  required
                ></textarea>
              </div>
              <button className="btn-enviar" type="submit">
                Enviar
              </button>
            </div>
          </div>
        </form>
      </section>
      <Scroll></Scroll>
    </main>
  );
}

export default App;
