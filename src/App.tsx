import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { AboutPage } from './pages/AboutPage';
import { Provider } from 'react-redux';
import { store } from './stores';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route element={<MainPage />} path="/" />
          <Route element={<AboutPage />} path="/about" />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
