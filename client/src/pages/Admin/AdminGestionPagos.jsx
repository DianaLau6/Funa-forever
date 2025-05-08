import React from 'react';
import SidebarAdmin from '../../components/Admin/SidebarAdmin';
import HeaderBar from '../../components/Admin/Instructores/HeaderBar';
import '../../css/App.css';
import DashboardSummary from '../../components/Admin/Pagos/SummaryDashboard';
import SearchBar from '../../components/Admin/Pagos/SearchBar';
import TransactionList from '../../components/Admin/Pagos/TransactionList';

function AdminGestionPagos() {
  return (
    <div className="app-container">
      <SidebarAdmin />
      <div className='container'>
        <HeaderBar title="Pagos" date="01 - 25 March, 2025" />
        <DashboardSummary />
        <SearchBar onSearch={() => console.log("Buscando...")} />
        <TransactionList />

      </div>

    </div>
  );
}

  export default  AdminGestionPagos;