import logo from './logo.svg';
import "/node_modules/slick-carousel/slick/slick-theme.css";
import "/node_modules/slick-carousel/slick/slick.css";
import './App.css';
import HomePage from './Components/Pages/HomePage/HomePage';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Error from './Components/Pages/ErrorPage';
import ElectronicBikes from './Components/Pages/ProductPage/ElectronicsBike';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/electronicbikes' element={<ElectronicBikes/>}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>

    </BrowserRouter>
    // <HomePage/>
  );
}

export default App;
