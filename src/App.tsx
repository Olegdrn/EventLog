import React from 'react';
import { useState } from 'react';
// With context
// import { useContext, createContext } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import EventList from "./components/EventList";
import EventCard from "./components/EventCard";
import Header from './components/Header';
import { Card } from './types';

// export const MyContext = createContext<Card[]>([])

function App() {

  const [path, setPath] = useState('/');
  const [issues, setIssues] = useState<Card[]>([]);


  // console.log(issues)

  return (
    // <MyContext.Provider value={{
    //   issues, setIssues
    // }}>
    <div className="App">
      <BrowserRouter>
        <Header issues={issues} setIssues={setIssues} />
        <Routes>
          <Route path='/' element={<EventList issues={issues} setIssues={setIssues} />} />
        </Routes>
        <Routes>
          <Route path='/Cards' element={<EventCard issues={issues} setIssues={setIssues} />} />
        </Routes>
      </BrowserRouter>
    </div>
    // </MyContext.Provider>
  );
}

export default App;
