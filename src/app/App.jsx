import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './App.scss';
import C from '../assets/C++.svg';
import figma from '../assets/Figma.svg';
import html from '../assets/Html5.svg';
import CSS from '../assets/CSS.svg';
import sql from '../assets/Database.svg';
import imgReact from '../assets/imgReact.svg';
import JS from '../assets/JS.svg';
import MySQL from '../assets/MySQL.svg';
import NodeJs from '../assets/NodeJs.svg';
import Sass from '../assets/Sass.svg';
import Python from '../assets/Python.svg';
import CSharp from '../assets/CSharp.svg';
import ilustracao from '../assets/Home_art.svg';
import foto from '../assets/Foto.jfif';
import ScrollReveal from 'scrollreveal';
import 'bootstrap-icons/font/bootstrap-icons.css';
import emailjs from '@emailjs/browser';
import mockupZaira from '../assets/mockupZaira.svg';


function App() {
  const [selecOption, setSelectOption] = useState('');
  const [menuAtivo, setMenuAtivo] = useState(true);

  const handleChange = (event) => {
    setSelectOption(event.target.value);
  };

  const verMenu = () => {
    setMenuAtivo(!menuAtivo);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const btn = document.getElementById("button");
    btn.value = "Enviando...";

    const serviceID = "service_1ikyq9u";
    const templateID = "template_6qzcpz1";

    // Inicializando a chave pública corretamente
    emailjs.init("POY0D4kcYDniflPrV");

    emailjs.sendForm(serviceID, templateID, event.target)
      .then(() => {
        btn.value = "Enviar Mensagem";
        alert("E-mail enviado com sucesso!");
        event.target.reset(); // Limpa os campos após envio
      }, (err) => {
        btn.value = "Enviar Mensagem";
        alert("Erro ao enviar: " + JSON.stringify(err));
      });
  };


  useEffect(() => {
    ScrollReveal().reveal('.description', {
      origin: 'left',
      distance: '50px',
      duration: 1000,
      delay: 300,
      easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.image img', {
      origin: 'right',
      distance: '50px',
      duration: 1000,
      delay: 300,
      easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.about', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 300,
      easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.my-image img', {
      origin: 'left',
      distance: '50px',
      duration: 1000,
      delay: 500,
      easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.tecnologias .iten', {
      interval: 200,
      scale: 0.85,
      duration: 800
    });

    ScrollReveal().reveal('.card', {
      interval: 200,
      origin: 'bottom',
      distance: '30px',
      duration: 1000
    });

    ScrollReveal().reveal('.form', {
      origin: 'left',
      distance: '50px',
      duration: 1000,
      delay: 500
    });
  }, []);

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuAtivo(false);
    }
  };


  return (
    <>
      <div className='container'>
        <section className="header">
          {menuAtivo ? (
            <i className="bi bi-x-lg" id="closed-menu" onClick={verMenu}></i>
          ) : (
            <i className="bi bi-list" id="list-menu" onClick={verMenu}></i>
          )}

          <header>
            <nav className={`navigation ${menuAtivo ? 'ativo' : 'hidden'}`}>
              <div className="links">
                <ul>
                  <li><Link to="inicio" smooth={true} duration={500} onClick={() => setMenuAtivo(false)}>Início</Link></li>
                  <li><Link to="sobre" smooth={true} duration={500} onClick={() => setMenuAtivo(false)}>Sobre</Link></li>
                  <li><Link to="habilidades" smooth={true} duration={500} onClick={() => setMenuAtivo(false)}>Habilidades</Link></li>
                  <li><Link to="meus-trabalhos" smooth={true} duration={500} onClick={() => setMenuAtivo(false)}>Portfólio</Link></li>
                </ul>
              </div>

              <div className="contact">
                <button>
                  <a><Link to="contato" smooth={true} duration={500} onClick={(e) => setMenuAtivo(false)}>Contate-me</Link></a>
                </button>
              </div>
            </nav>
          </header>
        </section>

        <section className='page1' id='inicio'>
          <div className='description'>
            <h4>Olá, me chamo Guilherme</h4>
            <h1>Sou <span>Desenvolvedor<br />Full-Stack</span></h1>
            <p>
              Comprometido em entregar soluções de alta qualidade,
              com foco em eficiência nos resultados.
            </p>

            <button className='work'>
              <a href="#meus-trabalhos">Conheça meu trabalho</a>
            </button>
          </div>

          <div className='image'>
            <img src={ilustracao} alt="Ilustração" />
          </div>
        </section>

        <section className='page2' id='sobre'>
          <div className='my-image'>
            <img src={foto} alt="Foto de Guilherme" />
          </div>

          <div className='about'>
            <h2>Sobre</h2>
            <p>
              Meu nome é Guilherme, sou <strong>Desenvolvedor Full-Stack</strong>, tenho 19 anos,
              estou no 5º período do curso de Ciência da Computação. Ao longo da
              minha jornada, venho adquirindo um conhecimento sólido em tecnologias
              como <strong>C#.NET</strong> e <strong>SQL Server</strong>.
              Tenho habilidades com React, Sass, JavaScript entre outras ferramentas modernas,
              e estou focado em continuar evoluindo para construir e gerenciar projetos de alta qualidade. Busco sempre a melhor experiência para o usuário e estou constantemente me atualizando para acompanhar as novas tendências,
              aplicando as melhores práticas de desenvolvimento.
            </p>
          </div>
        </section>

        <section className='page3' id='habilidades'>
          <h2>Habilidades</h2>

          <div className='tecnologias'>
            <div className='iten'>
              <img src={C} alt="C++" />
              <label>C++</label>
            </div>
            <div className='iten'>
              <img src={CSharp} alt="C#" />
              <label>CSharp</label>
            </div>
            <div className='iten'>
              <img src={Python} alt="Python" />
              <label>Python</label>
            </div>
            <div className='iten'>
              <img src={sql} alt="SQL Server" />
              <label>SQL Server</label>
            </div>
            <div className='iten'>
              <img src={MySQL} alt="MySQL" />
              <label>MySQL</label>
            </div>
            <div className='iten'>
              <img src={html} alt="HTML5" />
              <label>HTML5</label>
            </div>
            <div className='iten'>
              <img src={CSS} alt="CSS3" />
              <label>CSS3</label>
            </div>
            <div className='iten'>
              <img src={JS} alt="JavaScript" />
              <label>JavaScript</label>
            </div>
            <div className='iten'>
              <img src={imgReact} alt="React JS" />
              <label>React js</label>
            </div>
            <div className='iten'>
              <img src={NodeJs} alt="Node JS" />
              <label>Node JS</label>
            </div>
            <div className='iten'>
              <img src={Sass} alt="SASS" />
              <label>SASS</label>
            </div>
            <div className='iten'>
              <img src={figma} alt="Figma" />
              <label>Figma</label>
            </div>
          </div>
        </section>

        <section className='page4' id='meus-trabalhos'>
          <h2>Projetos</h2>
          <div className='projetos'>

            <div className='works'>
              <div className='card'>
                <div className='img'>
                  <img src={mockupZaira}></img>
                </div>
                <h3>ZAIRA</h3>
                <p>Este projeto é um portal de notícias focado no universo dos games, trazendo as últimas tendências, análises e novidades do setor. </p>
                <h4>Tecnologias utilizadas</h4>
                <p>React, Sass, Scrollreview, Bootstrap</p>
                <p><strong>Versão mobile do site esta em desenvolvimento !</strong></p>
                <button className="animated-button">
                  <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                  </svg>
                  <span className="text">
                    <a href="https://zaiira.netlify.app" target="_blank" rel="noopener noreferrer">
                      Ver projeto
                    </a>
                  </span>

                  <span className="circle"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                  </svg>
                </button>
              </div>
              <div className='card'>
                <div className='img'>
                  <img src={mockupZaira}></img>
                </div>
                <h3>ZAIRA</h3>
                <p>Este projeto é um portal de notícias focado no universo dos games, trazendo as últimas tendências, análises e novidades do setor. </p>
                <h4>Tecnologias utilizadas</h4>
                <p>React, Sass, Scrollreview, Bootstrap</p>
                <p><strong>Versão mobile do site esta em desenvolvimento !</strong></p>
                <button className="animated-button">
                  <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                  </svg>
                  <span className="text">
                    <a href="https://zaiira.netlify.app" target="_blank" rel="noopener noreferrer">
                      Ver projeto
                    </a>
                  </span>

                  <span className="circle"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                  </svg>
                </button>
              </div>
              <div className='card'>
                <div className='img'>
                  <img src={mockupZaira}></img>
                </div>
                <h3>ZAIRA</h3>
                <p>Este projeto é um portal de notícias focado no universo dos games, trazendo as últimas tendências, análises e novidades do setor. </p>
                <h4>Tecnologias utilizadas</h4>
                <p>React, Sass, Scrollreview, Bootstrap</p>
                <p><strong>Versão mobile do site esta em desenvolvimento !</strong></p>
                <button className="animated-button">
                  <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                  </svg>
                  <span className="text">
                    <a href="https://zaiira.netlify.app" target="_blank" rel="noopener noreferrer">
                      Ver projeto
                    </a>
                  </span>

                  <span className="circle"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                  </svg>
                </button>
              </div>
              <div className='card'>
                <div className='img'>
                  <img src={mockupZaira}></img>
                </div>
                <h3>ZAIRA</h3>
                <p>Este projeto é um portal de notícias focado no universo dos games, trazendo as últimas tendências, análises e novidades do setor. </p>
                <h4>Tecnologias utilizadas</h4>
                <p>React, Sass, Scrollreview, Bootstrap</p>
                <p><strong>Versão mobile do site esta em desenvolvimento !</strong></p>
                <button className="animated-button">
                  <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                  </svg>
                  <span className="text">
                    <a href="https://zaiira.netlify.app" target="_blank" rel="noopener noreferrer">
                      Ver projeto
                    </a>
                  </span>

                  <span className="circle"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                  </svg>
                </button>
              </div>
              <div className='card'>
                <div className='img'>
                  <img src={mockupZaira}></img>
                </div>
                <h3>ZAIRA</h3>
                <p>Este projeto é um portal de notícias focado no universo dos games, trazendo as últimas tendências, análises e novidades do setor. </p>
                <h4>Tecnologias utilizadas</h4>
                <p>React, Sass, Scrollreview, Bootstrap</p>
                <p><strong>Versão mobile do site esta em desenvolvimento !</strong></p>
                <button className="animated-button">
                  <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                  </svg>
                  <span className="text">
                    <a href="https://zaiira.netlify.app" target="_blank" rel="noopener noreferrer">
                      Ver projeto
                    </a>
                  </span>

                  <span className="circle"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                  </svg>
                </button>
              </div>
              <div className='card'>
                <div className='img'>
                  <img src={mockupZaira}></img>
                </div>
                <h3>ZAIRA</h3>
                <p>Este projeto é um portal de notícias focado no universo dos games, trazendo as últimas tendências, análises e novidades do setor. </p>
                <h4>Tecnologias utilizadas</h4>
                <p>React, Sass, Scrollreview, Bootstrap</p>
                <p><strong>Versão mobile do site esta em desenvolvimento !</strong></p>
                <button className="animated-button">
                  <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                  </svg>
                  <span className="text">
                    <a href="https://zaiira.netlify.app" target="_blank" rel="noopener noreferrer">
                      Ver projeto
                    </a>
                  </span>

                  <span className="circle"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                  </svg>
                </button>
              </div>
              <div className='card'>
                <div className='img'>
                  <img src={mockupZaira}></img>
                </div>
                <h3>ZAIRA</h3>
                <p>Este projeto é um portal de notícias focado no universo dos games, trazendo as últimas tendências, análises e novidades do setor. </p>
                <h4>Tecnologias utilizadas</h4>
                <p>React, Sass, Scrollreview, Bootstrap</p>
                <p><strong>Versão mobile do site esta em desenvolvimento !</strong></p>
                <button className="animated-button">
                  <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                  </svg>
                  <span className="text">
                    <a href="https://zaiira.netlify.app" target="_blank" rel="noopener noreferrer">
                      Ver projeto
                    </a>
                  </span>

                  <span className="circle"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                  </svg>
                </button>
              </div>
              {/* Mais cards aqui */}
            </div>
          </div>
        </section>

        <section className='page5' id='contato'>
          <h1>Precisa de ajuda com seu projeto ?</h1>
          <h2>Envie sua mensagem...</h2>

          <form onSubmit={handleFormSubmit}>
            <div className='inputs'>
              <div className='areas'>
                <label>Primeiro nome</label>
                <input type="text" name="firstName" required />
                <label>Segundo nome</label>
                <input type="text" name="lastName" required />
              </div>

              <div className='areas'>
                <label>Email</label>
                <input type="email" name="email" required />
                <label>Telefone</label>
                <input type="text" name="phone" />
              </div>
            </div>

            <select value={selecOption} onChange={handleChange} name='projeto'>
              <option value="" disabled>Sobre o que é seu novo projeto?</option>
              <option value="Pessoal">Pessoal</option>
              <option value="Site">Site</option>
              <option value="Blog">Blog</option>
              <option value="Portifólio">Portifólio</option>
              <option value="Ajuda">Ajuda com projetos pessoais</option>
            </select>

            <div className='menssage'>
              <textarea name="message" placeholder="Deixe sua mensagem..." required></textarea>
            </div>

            <button id="button" type="submit">Enviar Mensagem</button>
          </form>
        </section>
      </div>
    </>
  );
}

export default App;
