import React from 'react';
import { Link } from 'react-scroll';
import Home from './home';
import About from './about';
import Projects from './Projects';
import ContactMe from './contact';

const Homepage = () => {
    return (
        <div>
            <Link to="home" smooth={true} duration={500}>

            </Link>
            <Link to="about" smooth={true} duration={500}>

            </Link>
            <Link to="projects" smooth={true} duration={500}>

            </Link>
            <Link to="contact" smooth={true} duration={500}>

            </Link>

            <Home />
            <About id="about" />
            <Projects id="projects" />
            <ContactMe id="contact" />
        </div>
    );
};

export default Homepage;