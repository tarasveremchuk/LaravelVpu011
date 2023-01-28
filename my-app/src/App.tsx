import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/home';
import LoginPage from './components/auth/login';
import RegisterPage from './components/auth/register';
import DefaultLayout from './components/containers/default';
import AddProductPage from './components/add_product';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout/>}>
          <Route index element={<HomePage/>}/>{/*Роутинг на головну*/}
          <Route path="login" element={<LoginPage/>}/>{/*Роутинг на логін*/}
          <Route path="register" element={<RegisterPage/>}/>{/*Роутинг на реєстрацію*/}
          <Route path="add_product" element={<AddProductPage/>}/>{/*Роутинг на додавання продукту*/}
        </Route>
      </Routes>
    </>
  );
};

export default App;
