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
            <nav className='border-gray-200 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6'>
                <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between'>
                    <button
                        type='button'
                        onClick={setViewHome}
                        className='relative flex items-center'
                    >
                        <span className='text-grey-800 absolute mt-1 self-center whitespace-nowrap font-logo text-4xl font-semibold hover:text-red-600 dark:text-white dark:focus:text-gray-400  md:text-5xl'>
                            FitNs
                        </span>
                    </button>
                    <div className='flex items-center lg:order-2'>
                        <button
                            type='button'
                            onClick={setViewWorkouts}
                            className='relative mr-2 inline-flex h-9 items-center justify-center rounded-lg border px-2 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-800 md:px-4 lg:px-5 lg:py-2.5'
                        >
                            Workouts
                        </button>
                        <button
                            type='button'
                            onClick={setViewShoppingCart}
                            className='relative inline-flex h-9 items-center justify-center rounded-lg border border-gray-200 bg-white pl-9 pr-4 text-xs font-medium text-gray-900 hover:bg-gray-200 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-500'
                        >
                            <i className='bi bi-cart-fill absolute right-10 top-1.5 mr-2 text-sm'></i>
                            Cart
                            {totalItems > 0 ? (
                                <div className='absolute -right-2 -top-2 inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-red-500 text-xs text-white dark:border-red-500'>
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
