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
            <h3 className='mb-6 font-logo text-4xl font-medium text-gray-900 dark:text-white md:text-5xl'>
                Popular Workouts
            </h3>
            <div className='grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-4 lg:gap-x-8'>
                {renderPopularWorkouts}
            </div>
            <button
                type='button'
                onClick={setViewWorkouts}
                className='w-100 order-last my-4 ml-auto flex items-center space-x-3 rounded-lg border-2 px-4 py-2 hover:bg-gray-200 focus:outline-none dark:border-gray-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-800'
            >
                Find more workouts
                <i className='bi bi-arrow-right ml-2 text-xl'></i>
            </button>
        </div>
    );
};

export default PopularWorkouts;
