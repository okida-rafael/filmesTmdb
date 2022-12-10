import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Movie from './pages/Movie';
import Search from './pages/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route element={<App />}>     
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="search" element={<Search />} />
      </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

