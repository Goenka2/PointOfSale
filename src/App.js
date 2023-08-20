import {Routes,Route,Navigate} from 'react-router-dom';
import LayoutComponent from './component/LayoutComponent';
import MainPage from './component/MainPage';
import Login from './Pages/Login';
import Register from './Pages/Register';

import RestHomePage from './Pages/RestaurantHome';

function App() {
  return (
    <div className="App">
         
    <Routes>
        <Route path='/' element={<Navigate replace to='/login'></Navigate>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/restaurantPage' element={<RestHomePage />}></Route>
    </Routes>
      
    </div>
  );
}

export default App;
