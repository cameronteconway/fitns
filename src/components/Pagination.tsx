type PropsType = {
    totalWorkouts: number;
    workoutsPerPage: number;
    paginate: (pageNumber: number) => void;
    previousPage: () => void;
    nextPage: () => void;
};

const Pagination = ({
    totalWorkouts,
    workoutsPerPage,
    paginate,
    previousPage,
    nextPage,
}: PropsType) => {
    // let toShow;
    // if(work)

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalWorkouts / workoutsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='flex flex-col mt-8 items-center'>
            <span className='text-sm text-gray-700 dark:text-gray-400'>
                Showing{' '}
                <span className='font-semibold text-gray-900 dark:text-white'>
                    1
                </span>{' '}
                to{' '}
                <span className='font-semibold text-gray-900 dark:text-white'>
                    6
                </span>{' '}
                of{' '}
                <span className='font-semibold text-gray-900 dark:text-white'>
                    {totalWorkouts}
                </span>{' '}
                workouts
            </span>
            <div className='inline-flex mt-2 xs:mt-0'>
                <button
                    onClick={previousPage}
                    className='flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                >
                    <svg
                        className='w-3.5 h-3.5 mr-2'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 14 10'
                    >
                        <path
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M13 5H1m0 0 4 4M1 5l4-4'
                        />
                    </svg>
                    Prev
                </button>
                <button
                    onClick={nextPage}
                    className='flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                >
                    Next
                    <svg
                        className='w-3.5 h-3.5 ml-2'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 14 10'
                    >
                        <path
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M1 5h12m0 0L9 1m4 4L9 9'
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Pagination;
