type PropsType = {
    totalWorkouts: number;
    workoutsPerPage: number;
    previousPage: () => void;
    nextPage: () => void;
    seperatedRenderedWorkouts: JSX.Element[][];
    currentPage: number;
};

const Pagination = ({
    totalWorkouts,
    workoutsPerPage,
    previousPage,
    nextPage,
    seperatedRenderedWorkouts,
    currentPage,
}: PropsType) => {
    // Pagination logic
    let toShow: number;
    let firstShown: number;

    if (seperatedRenderedWorkouts[currentPage - 1].length < workoutsPerPage) {
        const totalSeen = (currentPage - 1) * 6;
        toShow = totalWorkouts;
        firstShown = totalSeen + 1;
    } else {
        if (seperatedRenderedWorkouts[currentPage - 1].length !== 6) {
            const totalSeen = (currentPage - 1) * 6;
            toShow =
                totalSeen + seperatedRenderedWorkouts[currentPage - 1].length;
            firstShown = totalSeen + 1;
        } else {
            const totalSeen = (currentPage - 1) * 6;
            toShow =
                totalSeen + seperatedRenderedWorkouts[currentPage - 1].length;
            firstShown = totalSeen + 1;
        }
    }

    const buttonClassPrev = `flex bg-white text-gray-900 items-center justify-center px-4 h-10 text-base font-medium bg-gray-800 rounded-l hover:bg-gray-200 focus:bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
        currentPage == 1
            ? 'opacity-25 pointer-events-none focus:outline-none'
            : null
    }`;
    const buttonClassNext = `flex bg-white text-gray-900 items-center justify-center px-4 h-10 text-base font-medium bg-gray-800 border-l hover:bg-gray-200 focus:bg-gray-200 border-0 border-gray-700 rounded-r dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
        seperatedRenderedWorkouts.length == currentPage
            ? 'opacity-25 pointer-events-none focus:outline-none'
            : null
    }`;

    return (
        <div className='mt-8 flex flex-col items-center'>
            <span className='text-sm text-gray-700 dark:text-gray-400'>
                Showing{' '}
                <span className='font-semibold text-gray-900 dark:text-white'>
                    {firstShown}
                </span>{' '}
                to{' '}
                <span className='font-semibold text-gray-900 dark:text-white'>
                    {toShow}
                </span>{' '}
                of{' '}
                <span className='font-semibold text-gray-900 dark:text-white'>
                    {totalWorkouts}
                </span>{' '}
                workouts
            </span>
            <div className='xs:mt-0 mt-2 inline-flex'>
                <button
                    type='button'
                    onClick={previousPage}
                    className={buttonClassPrev}
                    tabIndex={currentPage == 1 ? -1 : 0}
                >
                    <svg
                        className='mr-2 h-3.5 w-3.5'
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
                    type='button'
                    onClick={nextPage}
                    className={buttonClassNext}
                    tabIndex={
                        seperatedRenderedWorkouts.length == currentPage ? -1 : 0
                    }
                >
                    Next
                    <svg
                        className='ml-2 h-3.5 w-3.5'
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
