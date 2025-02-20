import React from 'react';
import Body from '../components/Body';
import Portfolio from './portfolio';
import About from './about';
import Contact from './contact';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Body title="Pearl C.">
      <p>Hi! My name is Pearl.</p>
			<Portfolio />
			<About />

			For more details, take a look at my <Link to="/resume">resume</Link>
			<Contact/>

    </Body>
  );
}  

export default Home;
