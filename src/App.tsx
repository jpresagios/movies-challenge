import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import MovieContainer from './pages/movies/containers/MovieContainer';
import NavBar from './pages/common/NavBar';
import LoginContainer from './pages/auth/containers/LoginContainer';
import MovieDetail from './pages/movies/components/MovieDetail';
import RegisterContainer from './pages/auth/containers/RegisterContainer';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <Router>
      <div id="public-route">
        <NavBar />
        <Routes>
          <Route
            path="/movie/:id"
            element={
              <MovieDetail />
}
          />
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/signUp" element={<RegisterContainer />} />
          <Route
            path="/"
            element={(
              <PrivateRoute>
                <MovieContainer />
              </PrivateRoute>
                )}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
