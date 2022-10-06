import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MovieList from './components/MovieList';
import MovieInfo from './components/MovieInfo';
import Search from './components/Search';

function App() {
  return (
    <div>
      <Router>
        <nav>
          <div>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/search">Search</Link>
            <p>Сорян за дизайн, bootstrap или ant-design слишком долго подключать</p>
          </div>
        </nav>
        <Routes>
          <Route path='/movies' element={<MovieList />}></Route>
          <Route path='/movies/:id' element={<MovieInfo />}></Route>
          <Route path='/search' element={<Search />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
