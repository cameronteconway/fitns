import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = () => {
    return (
        <header>
            <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800'>
                <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
                    <a href='/' className='flex items-center relative'>
                        <span className='self-center absolute mt-1 text-4xl md:text-5xl font-semibold whitespace-nowrap font-logo text-grey-800 dark:text-white hover:text-red-600  dark:focus:text-gray-400'>
                            FitNs
                        </span>
                    </a>
                    <div className='flex items-center lg:order-2'>
                        <a
                            href='/workouts'
                            className='text-gray-800 mr-2 dark:text-gray-400 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 md:px-4 lg:px-5 py-2 lg:py-2.5 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white focus:outline-none dark:focus:ring-gray-800 dark:border-gray-600 border inline-flex relative items-center justify-center h-9'
                        >
                            About
                        </a>
                        <a
                            href='/workouts'
                            className='text-gray-800 mr-2 dark:text-gray-400 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 md:px-4 lg:px-5 py-2 lg:py-2.5 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white focus:outline-none dark:focus:ring-gray-800 dark:border-gray-600 border inline-flex relative items-center justify-center h-9'
                        >
                            Workouts
                        </a>
                        <a
                            href='/shopping-cart'
                            className='inline-flex relative items-center justify-center h-9 pl-8 pr-3 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-200 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                        >
                            <i className='mr-2 text-sm absolute top-1.5 right-9 bi bi-cart-fill'></i>
                            Cart
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
