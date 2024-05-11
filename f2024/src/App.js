import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import Main  from './Main/Main'
import Notice from './Page/Notice';
import Performance from './Page/Performance';
import Map from './Page/Map';
import BoothInfo from './Page/BoothInfo';





function App() {
  const location = useLocation();

  return (
    
    <div className="App">
      
      <TransitionGroup className="transition-group">
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={<Main />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/map" element={<Map />} />
            <Route path="/booth-info" element={<BoothInfo />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
