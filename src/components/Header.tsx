import useShoppingCart from '../hooks/useShoppingCart';
import 'bootstrap-icons/font/bootstrap-icons.css';

type PropsType = {
    setViewHome: () => void;
    setViewWorkouts: () => void;
    setViewShoppingCart: () => void;
};

const Header = ({
    setViewHome,
    setViewWorkouts,
    setViewShoppingCart,
}: PropsType) => {
    const { totalItems } = useShoppingCart();

    return (
        <header>
            <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800'>
                <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
                    <button
                        type='button'
                        onClick={setViewHome}
                        className='flex items-center relative'
                    >
                        <span className='self-center absolute mt-1 text-4xl md:text-5xl font-semibold whitespace-nowrap font-logo text-grey-800 dark:text-white hover:text-red-600  dark:focus:text-gray-400'>
                            FitNs
                        </span>
                    </button>
                    <div className='flex items-center lg:order-2'>
                        <button
                            type='button'
                            onClick={setViewWorkouts}
                            className='text-gray-800 mr-2 dark:text-gray-400 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 md:px-4 lg:px-5 py-2 lg:py-2.5 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white focus:outline-none dark:focus:ring-gray-800 dark:border-gray-600 border inline-flex relative items-center justify-center h-9'
                        >
                            Workouts
                        </button>
                        <button
                            type='button'
                            onClick={setViewShoppingCart}
                            className='inline-flex relative items-center justify-center h-9 pl-9 pr-4 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-200 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                        >
                            <i className='mr-2 text-sm absolute top-1.5 right-10 bi bi-cart-fill'></i>
                            Cart
                            {totalItems > 0 ? (
                                <div className='absolute inline-flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-red-500'>
                                    {totalItems}
                                </div>
                            ) : null}
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
