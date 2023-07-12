import { WorkoutsType } from '../context/WorkoutsProvider';
import {
    ReducerAction,
    ReducerActionType,
} from '../context/ShoppingCartProvider';
import { ReactElement } from 'react';

type PropsType = {
    workout: WorkoutsType;
    dispatch: React.Dispatch<ReducerAction>;
    REDUCER_ACTIONS: ReducerActionType;
    inCart: boolean;
};

const Workout = ({
    workout,
    dispatch,
    REDUCER_ACTIONS,
    inCart,
}: PropsType): ReactElement => {
    const onAddToShoppingCart = () =>
        dispatch({
            type: REDUCER_ACTIONS.ADD,
            payload: { ...workout, quantity: 1 },
        });

    const renderIncludes = workout.includes.map(
        (workout: string, index: number) => {
            const test = workout.split(' - ')[0];
            return (
                <li className='flex items-center space-x-1 mb-1' key={index}>
                    <i className='flex-shrink-0 text-gray-800 dark:text-white bi bi-check text-xl'></i>
                    <span className='text-gray-900 dark:text-white'>
                        {test}
                    </span>
                </li>
            );
        }
    );

    const renderBodyPart = workout.bodyPart.map(
        (bodyPart: string, index: number) => (
            <li
                className='bg-gray-100 max-w-max mt-1 inline-block text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-500 dark:text-gray-100 border border-gray-600'
                key={index}
            >
                {bodyPart}
            </li>
        )
    );

    const renderCategory = workout.category.map(
        (category: string, index: number) => (
            <li
                className='bg-gray-100 max-w-max mt-1 inline-block text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-500 dark:text-gray-100 border border-gray-600'
                key={index}
            >
                {category}
            </li>
        )
    );

    return (
        <div className='border-2 dark:bg-gray-800 relative rounded-lg border-gray-200 dark:border-white py-7 px-6 flex flex-col shadow-[rgba(0,_0,_0,_0.25)_0px_0px_30px_-12px] dark:shadow-[rgba(255,_250,_250,_0.25)_0px_0px_40px_-12px]'>
            {workout.popular ? (
                <span className='absolute -top-5 dark:text-gray-800 font-medium text-sm border-2 text-white border-gray-900 bg-gray-900 dark:border-white dark:bg-white px-3 py-2 rounded-full ml-auto mr-auto left-0 right-0 text-center max-w-max'>
                    Popular
                </span>
            ) : null}
            <span>{workout.popular}</span>
            <span className='block dark:text-white font-bold text-3xl'>
                {workout.name}
            </span>
            <span className='block dark:text-white font-medium text-2xl mb-4'>
                {new Intl.NumberFormat('en-GB', {
                    style: 'currency',
                    currency: 'GBP',
                }).format(workout.price)}
            </span>
            <p className='dark:text-gray-400 font-light'>{workout.summary}</p>
            <span
                className='block h-0.5 my-6'
                style={{
                    background:
                        'repeating-linear-gradient(90deg,#cbd5e1 0 8px,#0000 0 18px)',
                }}
            ></span>

            <ul>{renderIncludes}</ul>

            <span className='text-sm font-medium dark:text-gray-200 mt-3'>
                Body Part
            </span>
            <ul>{renderBodyPart}</ul>
            <span className='text-sm font-medium dark:text-gray-200 mt-3'>
                Category
            </span>
            <ul className='mb-6'>{renderCategory}</ul>

            {inCart ? (
                <button
                    disabled
                    className='border-gray-300 inline-flex disabled:opacity-50 justify-center relative px-3 py-2 font-medium mt-auto border-2 rounded-md dark:border-white dark:text-white dark:bg-transparent'
                    onClick={onAddToShoppingCart}
                >
                    Item already in cart
                </button>
            ) : (
                <button
                    className='border-gray-300 inline-flex relative px-3 py-2 font-medium mt-auto border-2 rounded-md dark:border-white hover:bg-gray-900 hover:text-white hover:border-gray-900 dark:text-white dark:bg-transparent dark:hover:bg-white dark:hover:text-gray-800 dark:hover:border-white'
                    onClick={onAddToShoppingCart}
                >
                    Add to cart
                    <i className='right-3 bottom-1.5 text-xl absolute bi bi-plus-lg'></i>
                </button>
            )}
        </div>
    );
};

export default Workout;
