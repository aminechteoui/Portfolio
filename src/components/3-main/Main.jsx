import React, { useState } from 'react';
import './main.css';

// Liste des projets avec catégories
const myProjects = [
  { id: 1, title: "Landing page 1", category: "css" },
  { id: 2, title: "Interactive App", category: "javascript" },
  { id: 3, title: "React Dashboard", category: "react" },
  { id: 4, title: "Node API", category: "node" },
  { id: 5, title: "Portfolio", category: "css" },
  { id: 6, title: "E-commerce App", category: "react" },
  { id: 6, title: "E-commerceshop App", category: "react" },

];

export default function Main() {
  const [currentActive, setcurrentActive] = useState("all");

  // Filtrage des projets
  const filteredProjects = currentActive === "all"
    ? myProjects
    : myProjects.filter(project => project.category === currentActive);

  return (
    <main className='flex'>
      {/* Section gauche - Boutons de filtrage */}
      <section className='left-section flex'>
        <button
          onClick={() => setcurrentActive("all")}
          className={currentActive === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => setcurrentActive("css")}
          className={currentActive === "css" ? "active" : null}
        >
          Html & Css
        </button>
        <button
          onClick={() => setcurrentActive("javascript")}
          className={currentActive === "javascript" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => setcurrentActive("react")}
          className={currentActive === "react" ? "active" : null}
        >
          React & MUI
        </button>
        <button
          onClick={() => setcurrentActive("node")}
          className={currentActive === "node" ? "active" : null}
        >
          Node & Express
        </button>
      </section>

      {/* Section droite - Affichage des projets */}
      <section className='right-section flex'>
        {filteredProjects.map((project) => (
          <article key={project.id} className='card'>
            <img width={266} src="./1.jpg" alt="" />
            <div style={{ width: "266px" }} className="box">
              <h1 className='title'>{project.title}</h1>
              <p className='sub-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className="flex icons">
                <div style={{ gap: "11px" }} className='flex'>
                  <div className="icon-link"></div>
                  <div className="icon-github"></div>
                </div>
                <a className='link flex' href="">more
                  <span style={{ alignSelf: "end" }} className='icon-arrow-right'></span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}


