import React from 'react';
import Banner from '../Components/portfolio/Banner';
import Plan from '../Components/portfolio/Plan';
import Workout from '../Components/portfolio/Workout';
import Slide4 from "../Components/portfolio/Slide4";
import Command from '../Components/portfolio/Command';
import Contact from '../Components/portfolio/Contact';

export default function portfolio() {

  return (
    <section className='snap-mandatory snap-y '>
      <Banner />
      <Plan />
      <Workout />
      <Slide4 />
      <Command />
      <Contact />
    </section>
  )
}
