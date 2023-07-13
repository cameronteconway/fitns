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
    };

    const renderCategorySelection = categoryArray.map((category, index) => (
        <option key={index} value={category}>
            {capitalizeFirstLetter(category)}
        </option>
    ));

    // renderWorkouts

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const workoutsPerPage = 6;
    const totalWorkouts = renderWorkouts.length;

    const indexOfLastPost = currentPage * workoutsPerPage;
    const indexOfFirstPost = indexOfLastPost - workoutsPerPage;
    const currentPosts = renderWorkouts.slice(
        indexOfFirstPost,
        indexOfLastPost
    );

    // Rendered workouts split into 6
    const seperatedRenderedWorkouts = [];
    for (let i = 0; i < renderWorkouts.length; i += workoutsPerPage) {
        seperatedRenderedWorkouts.push(
            renderWorkouts.slice(i, i + workoutsPerPage)
        );
    }

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

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
            <span className='block text-center pb-12 dark:text-white text-5xl md:text-6xl font-medium'>
                Our workout catalogue.
            </span>
            <div className='grid grid-cols-1 md:grid-cols-3 mb-10 md:gap-x-4 lg:gap-x-8 gap-y-8'>
                <form>
                    <label
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                        htmlFor='filterBodyPart'
                    >
                        Choose body part:
                    </label>
                    <select
                        id='filterBodyPart'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        style={{ appearance: 'none' }}
                        value={bodyPart}
                        onChange={handleBodyPartSelection}
                    >
                        <option value='All'>All</option>
                        {renderBodyPartSelection}
                    </select>
                </form>

                <form>
                    <label
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                        htmlFor='filterCategory'
                    >
                        Choose category:
                    </label>
                    <select
                        id='filterCategory'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        value={category}
                        onChange={handleCategorySelection}
                    >
                        <option value='All'>All</option>
                        {renderCategorySelection}
                    </select>
                </form>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-x-4 lg:gap-x-8 gap-y-8'>
                {seperatedRenderedWorkouts[currentPage - 1]}
            </div>
            <Pagination
                totalWorkouts={totalWorkouts}
                workoutsPerPage={workoutsPerPage}
                paginate={paginate}
                previousPage={previousPage}
                nextPage={nextPage}
            />
        </div>
    );
};

export default Workouts;
