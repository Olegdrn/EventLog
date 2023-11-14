import React from 'react';
import { useContext, createContext, useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import './App.css';
import EventList from "./components/EventList";
import EventCard from "./components/EventCard";
import Header from './components/Header';
import Pagination from './components/Pagination';

export const MyContext = createContext({})

function App() {

  return (
    <MyContext.Provider value={{
    }}>
      <div className="App">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<EventList />} />
          </Routes>
          <Routes>
            <Route path='/Cards' element={<EventCard />} />
          </Routes>
        </BrowserRouter>
        <Pagination />
      </div>
    </MyContext.Provider>
  );
}

export default App;
