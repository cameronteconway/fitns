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

// https://www.youtube.com/watch?v=6Qqb2GBGgGc&ab_channel=DaveGray
// https://tailwindui.com/components/ecommerce/components/shopping-carts
// https://flowbite.com/docs/components/card/
// https://tailwinduikit.com/components/marketing/page_section/feature
// https://everfit.io/
// https://vercel.com/pricing
// https://www.digitalocean.com/pricing - workout
// https://www.trainerize.com/
