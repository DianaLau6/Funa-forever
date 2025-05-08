import React from 'react';
import Sidebar from '../components/Comentarios/sidebar';
import ReviewsHeader from '../components/Comentarios/ReviewsHeader';
import "../css/App.css"
import ReviewList from '../components/Comentarios/ReviewList';

const Comentarios = () => (
    <div className="app-container">
     <Sidebar />
     <div className='container'>
      <ReviewsHeader />
      <ReviewList />
    
     </div>

      {}
    </div>
  );

  export default Comentarios;