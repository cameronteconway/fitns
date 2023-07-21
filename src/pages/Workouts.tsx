import useShoppingCart from '../hooks/useShoppingCart';
import useWorkout from '../hooks/useWorkouts';
import { useState } from 'react';
import { capitalizeFirstLetter } from '../util/utils';
import { WorkoutsType } from '../context/WorkoutsProvider';

import Workout from '../components/Workout';
import Pagination from '../components/Pagination';

const Workouts = () => {
    const [bodyPart, setBodyPart] = useState('All');
    const [category, setCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const workoutsPerPage = 6;
    const { dispatch, REDUCER_ACTIONS, shoppingCart } = useShoppingCart();
    const { workouts } = useWorkout();

    // Filter Components depending on selected body-part or category
    const filterComponents = (array: WorkoutsType[]) => {
        return array.map((arrItems: WorkoutsType) => {
            const inCart: boolean = shoppingCart.some(
                (item) => item.id === arrItems.id
            );
            return (
                <Workout
                    workout={arrItems}
                    key={arrItems.id}
                    dispatch={dispatch}
                    REDUCER_ACTIONS={REDUCER_ACTIONS}
                    inCart={inCart}
                />
            );
        });
    };

    const filterBodyPart = (array: WorkoutsType[], filterString: string) =>
        array.filter((workout: WorkoutsType) => {
            return workout.bodyPart.includes(filterString);
        });

    const filterCategory = (array: WorkoutsType[], filterString: string) =>
        array.filter((workout: WorkoutsType) =>
            workout.category.includes(filterString)
        );

    let renderWorkouts!: JSX.Element[];
    const bodyPartArray: string[] = [];
    const categoryArray: string[] = [];
    if (workouts?.length) {
        // Filter based on bodyPart and category
        let filteredWorkouts = workouts;
        const filterString: string[] = [bodyPart, category];
        if (filterString[0] == 'All' && filterString[1] == 'All') {
            renderWorkouts = filterComponents(workouts);
        } else {
            if (filterString[0] !== 'All') {
                filteredWorkouts = filterBodyPart(
                    filteredWorkouts,
                    filterString[0]
                );
            }
            if (filterString[1] !== 'All') {
                filteredWorkouts = filterCategory(
                    filteredWorkouts,
                    filterString[1]
                );
            }

            renderWorkouts = filterComponents(filteredWorkouts);
        }

        // Get all available bodyPart and category items and store in arrays
        workouts.forEach((workout) => {
            workout.bodyPart.forEach((bodyPart) => {
                if (!bodyPartArray.includes(bodyPart)) {
                    bodyPartArray.push(bodyPart);
                }
            });
            workout.category.forEach((category) => {
                if (!categoryArray.includes(category)) {
                    categoryArray.push(category);
                }
            });
        });
    }

    // Filter handle
    const handleBodyPartSelection = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setBodyPart(e.target.value);
        // Rest the current page to view the bodyPart change from the beginning
        setCurrentPage(1);
    };

    const renderBodyPartSelection = bodyPartArray.map((bodyPart, index) => (
        <option key={index} value={bodyPart}>
            {capitalizeFirstLetter(bodyPart)}
        </option>
    ));

    const handleCategorySelection = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setCategory(e.target.value);
        // Rest the current page to view the category change from the beginning
        setCurrentPage(1);
    };

    const renderCategorySelection = categoryArray.map((category, index) => (
        <option key={index} value={category}>
            {capitalizeFirstLetter(category)}
        </option>
    ));

    // Pagination
    const totalWorkouts = renderWorkouts.length;

    // Rendered workouts split into 6
    const seperatedRenderedWorkouts = [];
    for (let i = 0; i < renderWorkouts.length; i += workoutsPerPage) {
        seperatedRenderedWorkouts.push(
            renderWorkouts.slice(i, i + workoutsPerPage)
        );
    }

    const previousPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (
            currentPage !== Math.ceil(renderWorkouts.length / workoutsPerPage)
        ) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className='py-10'>
            <span className='block pb-12 text-center text-5xl font-medium dark:text-white md:text-6xl'>
                Our workout catalogue.
            </span>
            <div className='mb-10 grid grid-cols-1 gap-y-4 md:grid-cols-3 md:gap-x-4 lg:gap-x-8'>
                <form className='relative'>
                    <label
                        className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                        htmlFor='filterBodyPart'
                    >
                        Choose body part:
                    </label>
                    <select
                        id='filterBodyPart'
                        className='block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                        style={{ appearance: 'none' }}
                        value={bodyPart}
                        onChange={handleBodyPartSelection}
                    >
                        <option value='All'>All</option>
                        {renderBodyPartSelection}
                    </select>
                    <i className='bi bi-chevron-down absolute right-4 top-[35px] text-xl text-gray-800 dark:text-white'></i>
                </form>

                <form className='relative'>
                    <label
                        className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                        htmlFor='filterCategory'
                    >
                        Choose category:
                    </label>
                    <select
                        id='filterCategory'
                        className='block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                        style={{ appearance: 'none' }}
                        value={category}
                        onChange={handleCategorySelection}
                    >
                        <option value='All'>All</option>
                        {renderCategorySelection}
                    </select>
                    <i className='bi bi-chevron-down absolute right-4 top-[35px] text-xl text-gray-800 dark:text-white'></i>
                </form>
            </div>
            <div className='grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-4 lg:gap-x-8'>
                {seperatedRenderedWorkouts[currentPage - 1]}
            </div>
            <Pagination
                totalWorkouts={totalWorkouts}
                workoutsPerPage={workoutsPerPage}
                previousPage={previousPage}
                nextPage={nextPage}
                seperatedRenderedWorkouts={seperatedRenderedWorkouts}
                currentPage={currentPage}
            />
        </div>
    );
};

export default Workouts;
