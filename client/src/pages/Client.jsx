import React from 'react';
import HeaderClient from '../components/InicioCliente/headerclient';
import MainLayout from '../components/InicioCliente/MainLayout';
import RecommendedCourses from '../components/InicioCliente/RecommendedCourses';
import LatestUpdates from '../components/InicioCliente/LatestUpdates';


const Clientinicio = () => (
    <div className="">
      <HeaderClient />
      <MainLayout>
        
      <RecommendedCourses />
      <LatestUpdates />
      </MainLayout>

      {}
    </div>
  );

  export default Clientinicio;