import { useState } from 'react';

import Layout from './components/Layout';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Workouts from './pages/Workouts';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    const [viewHome, setViewHome] = useState<boolean>(true);
    const [viewWorkouts, setViewWorkouts] = useState<boolean>(false);
    const [viewShoppingCart, setViewShoppingCart] = useState<boolean>(false);

    const handleViewHome = () => {
        setViewHome(true);
        setViewWorkouts(false);
        setViewShoppingCart(false);
        window.scrollTo(0, 0);
    };

    const handleViewWorkouts = () => {
        setViewHome(false);
        setViewWorkouts(true);
        setViewShoppingCart(false);
        window.scrollTo(0, 0);
    };

    const handleViewShoppingCards = () => {
        setViewHome(false);
        setViewWorkouts(false);
        setViewShoppingCart(true);
        window.scrollTo(0, 0);
    };

    let pageContent;
    viewHome
        ? (pageContent = <Home setViewWorkouts={handleViewWorkouts} />)
        : null;
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
            <Footer setViewHome={handleViewHome} />
        </>
    );
}

export default App;

// https://flowbite.com/docs/components/card/
// https://tailwinduikit.com/components/marketing/page_section/feature
// https://everfit.io/
// https://vercel.com/pricing
// https://www.digitalocean.com/pricing - workout
// https://www.trainerize.com/
