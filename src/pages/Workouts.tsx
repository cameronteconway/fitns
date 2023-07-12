import useShoppingCart from '../hooks/useShoppingCart';
import useWorkout from '../hooks/useWorkouts';
import { UseWorkoutsContextType } from '../context/WorkoutsProvider';

import Workout from '../components/Workout';

const Workouts = () => {
    const { dispatch, REDUCER_ACTIONS, shoppingCart } = useShoppingCart();
    const { workouts } = useWorkout();

    let renderWorkouts;
    if (workouts?.length) {
        renderWorkouts = workouts.map((workout) => {
            const inCart: boolean = shoppingCart.some(
                (item) => item.id === workout.id
            );
            return (
                <Workout
                    workout={workout}
                    key={workout.id}
                    dispatch={dispatch}
                    REDUCER_ACTIONS={REDUCER_ACTIONS}
                    inCart={inCart}
                />
            );
        });
    }

    console.log(workouts);

    return (
        <div className='py-10'>
            <span className='block text-center pb-12 dark:text-white text-5xl md:text-6xl font-medium'>
                Our workout catalogue.
            </span>
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-x-4 lg:gap-x-8 gap-y-8'>
                {renderWorkouts}
            </div>
        </div>
    );
};

export default Workouts;
