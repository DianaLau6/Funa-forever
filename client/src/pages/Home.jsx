import React from 'react';
import Header from '../components/Header/header';
import HeroSection from '../components/HeroSection/HeroSection';
import GridCourses from '../components/CourseGrid/CourseGrid';
import '../css/App.css';
import ExpertsSection from '../components/Profesores/ExpertSection';
import TestimonialSlider from '../components/Testimonios/TestimonialSlider';
import Footer from '../components/Footer';


const HomePage = () => (
    <div className='home'>
      <Header />
      <HeroSection />

      <GridCourses />
      <ExpertsSection />
      <TestimonialSlider />
      <Footer />
      {}
    </div>
  );

  export default HomePage;