import useWorkout from '../hooks/useWorkouts';
import PopularWorkout from './PopularWorkout';

type PropsType = {
    setViewWorkouts: () => void;
};

const PopularWorkouts = ({ setViewWorkouts }: PropsType) => {
    const { workouts } = useWorkout();

    const popularWorkouts = workouts.filter(
        (workout) => workout.popular === true
    );

    const renderPopularWorkouts = popularWorkouts.map((workout) => (
        <PopularWorkout key={workout.id} workout={workout} />
    ));

    return (
        <div className='py-10'>
            <h3 className='mb-8 font-logo text-5xl text-gray-900 dark:text-white'>
                Popular Workouts
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-x-4 lg:gap-x-8 gap-y-8'>
                {renderPopularWorkouts}
            </div>
            <button
                type='button'
                onClick={setViewWorkouts}
                className='my-4 ml-auto order-last flex items-center space-x-3 rounded-lg py-2 px-4 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:text-white w-100 border-2 focus:outline-none dark:focus:ring-gray-800 dark:border-gray-600'
            >
                Find more workouts
                <i className='ml-2 text-xl bi bi-arrow-right'></i>
            </button>
        </div>
    );
};

export default PopularWorkouts;
