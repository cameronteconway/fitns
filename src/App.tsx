import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';

import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Workouts from './pages/Workouts';
import Header from './components/Header';
import NotFound from './components/NotFound';

function App() {
    return (
        <Router>
            <Header />
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/shopping-cart' element={<ShoppingCart />} />
                    <Route path='/workouts' element={<Workouts />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
