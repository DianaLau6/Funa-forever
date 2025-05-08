import React from 'react';
import "../css/App.css"
import SupportSidebar from '../components/Soporte/SupportSidebar';
import TopRightBar from '../components/Soporte/TopRightBar';
import SupportHeader from '../components/Soporte/SupportHeader';
import TicketCard from '../components/Soporte/TicketCard';
import Support from '../components/Soporte/TickertGrid';

const Soporte = () => (
    <div className="app-container">
     <SupportSidebar />
     <div className='container2'>
    <TopRightBar />
    <SupportHeader />
    <Support />
     </div>

      {}
    </div>
  );

  export default Soporte;