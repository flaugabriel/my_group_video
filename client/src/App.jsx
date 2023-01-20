import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Topnav from './components/Topnav';
import NoMatch from './pages/noMatch';

const API_URL = 'http://localhost:3030/api/v1/'

function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Topnav />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Routes>
                <Route path="*" element={<NoMatch />} />
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;