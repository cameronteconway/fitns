import { useState } from 'react';

import Layout from './components/Layout';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Workouts from './pages/Workouts';
import Header from './components/Header';

function App() {
    const [viewHome, setViewHome] = useState<boolean>(true);
    const [viewWorkouts, setViewWorkouts] = useState<boolean>(false);
    const [viewShoppingCart, setViewShoppingCart] = useState<boolean>(false);

    const handleViewHome = () => {
        setViewHome(true);
        setViewWorkouts(false);
        setViewShoppingCart(false);
    };

    const handleViewWorkouts = () => {
        setViewHome(false);
        setViewWorkouts(true);
        setViewShoppingCart(false);
    };

    const handleViewShoppingCards = () => {
        setViewHome(false);
        setViewWorkouts(false);
        setViewShoppingCart(true);
    };

    let pageContent;
    viewHome ? (pageContent = <Home />) : null;
    viewWorkouts ? (pageContent = <Workouts />) : null;
    viewShoppingCart ? (pageContent = <ShoppingCart />) : null;

    return (
        <>
            <Header
                setViewHome={handleViewHome}
                setViewWorkouts={handleViewWorkouts}
                setViewShoppingCart={handleViewShoppingCards}
            />
            <Layout>{pageContent}</Layout>
        </>
    );
}

export default App;

// https://youtu.be/6Qqb2GBGgGc?t=2362
// https://tailwindui.com/components/ecommerce/components/shopping-carts
// https://flowbite.com/docs/components/card/
// https://tailwinduikit.com/components/marketing/page_section/feature
// https://everfit.io/
// https://vercel.com/pricing
// https://www.digitalocean.com/pricing - workout
// https://www.trainerize.com/
