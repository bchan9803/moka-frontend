import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Layout from './pages/Layout';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import AddRecipe from './pages/AddRecipe';
import Recipes from './pages/Recipes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />

            <Route path='recipes' element={<Recipes />} />

            {/* publish recipe */}
            <Route path='add-recipe' element={<AddRecipe />} />

            {/* Not found page */}
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
