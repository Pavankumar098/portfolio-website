import React from 'react';
import './../animations.css';
import bleepSound from '../assets/sounds/mixkit-high-tech-bleep-2521.wav';

function Header() {
  return (
    <header>
      <h1>Peddapalli Laxmi Pavan Kumar</h1>
      <nav>
        <ul>
          <li>
            <a 
              href="#about" 
              className="button-tech"
              onClick={() => new Audio(bleepSound).play()}
            >
              About
            </a>
          </li>

          <li>
            <a 
              href="#education" 
              className="button-tech"
              onClick={() => new Audio(bleepSound).play()}
            >
              Education
            </a>
          </li>

          <li>
            <a 
              href="#projects" 
              className="button-tech"
              onClick={() => new Audio(bleepSound).play()}
            >
              Projects
            </a>
          </li>

          <li>
            <a 
              href="#skills" 
              className="button-tech"
              onClick={() => new Audio(bleepSound).play()}
            >
              Skills
            </a>
          </li>

          <li>
            <a 
              href="#contact" 
              className="button-tech"
              onClick={() => new Audio(bleepSound).play()}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
