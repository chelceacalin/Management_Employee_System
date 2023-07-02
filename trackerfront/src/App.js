import React from 'react';
import Employeelist from './components/Employees/Employeelist';
import AddEmployee from './components/Employees/AddEmployee';
import UpdateEmployee from './components/Employees/UpdateEmployee';
import Home from './components/Home/Home';
import Inbox from './components/Inbox/Inbox';
import Sidebar from './components/Sidebar/Sidebar';
import { RouteTrackerProvider } from './components/RouteProvider/RouteTracker';
import LogIn from './components/Authentication/LogIn';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <Router>
      <RouteTrackerProvider>
        <MainContent />
      </RouteTrackerProvider>
    </Router>
  );
}

function MainContent() {
  const location = useLocation();

  return (
    <div style={{ display: 'flex' }}>
      {location.pathname !== '/' && <Sidebar />} {/* Render the Sidebar only if the current path is not the login route */}
      <div style={{ flex: '1' }}>
        <Routes>
          <Route index path="/" element={<LogIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/employeeList" element={<Employeelist />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/updateEmployee/:id" element={<UpdateEmployee />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;