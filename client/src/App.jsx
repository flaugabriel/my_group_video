import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import NoMatch from './pages/noMatch';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './pages/home/index';
import RoomShow from './pages/rooms/show/index';
import './App.css'
import Invitation from './pages/invitation';

const API_URL = 'http://localhost:3030/api/v1/'

function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <div className="container-fluid main">
        <ToastContainer
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
              />
          <div className="row">
            <Sidebar/>
            <main className="col-md-9 ms-sm-auto col-lg-12">
              <Routes>
                <Route path="/" element={<Home urlApi={API_URL} />} />
                <Route path="/user_rooms/add_user/:id/invite/:code_access" element={<Invitation urlApi={API_URL} />} />
                <Route path="/rooms/:id" element={<RoomShow urlApi={API_URL} />} />
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