import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import NoMatch from './pages/noMatch';
import Home from './pages/home/index';
import './App.css'

const API_URL = 'http://localhost:3030/api/v1/'

function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <div className="container-fluid main">
          <div className="row">
            <Sidebar/>
            <main className="col-md-9 ms-sm-auto col-lg-12">
              <Routes>
                <Route path="/" element={<Home urlApi={API_URL} />} />
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