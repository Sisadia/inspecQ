import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ToolsStack from '../components/ToolsStack';
import AboutUs from '../components/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs';
import Portfolio from '../components/Portfolio';
import Team from '../components/Team';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <ToolsStack />
      <AboutUs />
      {/* <Portfolio /> */}
      {/* <WhyChooseUs /> */}
      <Team />
      <Contact />
    </div>
  );
};

export default Home;