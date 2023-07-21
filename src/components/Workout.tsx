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
                <li className='mb-1 flex items-center space-x-1' key={index}>
                    <i className='bi bi-check flex-shrink-0 text-xl text-gray-800 dark:text-white'></i>
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
                className='mr-2 mt-1 inline-block max-w-max rounded border border-gray-600 bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-500 dark:text-gray-100'
                key={index}
            >
                {bodyPart}
            </li>
        )
    );

    const renderCategory = workout.category.map(
        (category: string, index: number) => (
            <li
                className='mr-2 mt-1 inline-block max-w-max rounded border border-gray-600 bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-500 dark:text-gray-100'
                key={index}
            >
                {category}
            </li>
        )
    );

    return (
        <div className='relative flex flex-col rounded-lg border-2 border-gray-200 px-6 py-7 shadow-[rgba(0,_0,_0,_0.25)_0px_0px_30px_-12px] dark:border-white dark:bg-gray-800 dark:shadow-[rgba(255,_250,_250,_0.25)_0px_0px_40px_-12px]'>
            {workout.popular ? (
                <span className='absolute -top-5 left-0 right-0 ml-auto mr-auto max-w-max rounded-full border-2 border-gray-900 bg-gray-900 px-3 py-2 text-center text-sm font-medium text-white dark:border-white dark:bg-white dark:text-gray-800'>
                    Popular
                </span>
            ) : null}
            <span>{workout.popular}</span>
            <span className='block text-3xl font-bold dark:text-white'>
                {workout.name}
            </span>
            <span className='mb-4 block text-2xl font-medium dark:text-white'>
                {new Intl.NumberFormat('en-GB', {
                    style: 'currency',
                    currency: 'GBP',
                }).format(workout.price)}
            </span>
            <p className='font-light dark:text-gray-400'>{workout.summary}</p>
            <span
                className='my-6 block h-0.5'
                style={{
                    background:
                        'repeating-linear-gradient(90deg,#cbd5e1 0 8px,#0000 0 18px)',
                }}
            ></span>

            <ul>{renderIncludes}</ul>

            <span className='mt-3 text-sm font-medium dark:text-gray-200'>
                Body Part
            </span>
            <ul>{renderBodyPart}</ul>
            <span className='mt-3 text-sm font-medium dark:text-gray-200'>
                Category
            </span>
            <ul className='mb-6'>{renderCategory}</ul>

            {inCart ? (
                <button
                    type='button'
                    disabled
                    className='relative mt-auto inline-flex justify-center rounded-md border-2 border-gray-300 px-3 py-2 font-medium disabled:opacity-50 dark:border-white dark:bg-transparent dark:text-white'
                >
                    Item already in cart
                </button>
            ) : (
                <button
                    type='button'
                    className='relative mt-auto inline-flex rounded-md border-2 border-gray-300 px-3 py-2 font-medium hover:border-gray-900 hover:bg-gray-900 hover:text-white dark:border-white dark:bg-transparent dark:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-gray-800'
                    onClick={onAddToShoppingCart}
                >
                    Add to cart
                    <i className='bi bi-plus-lg absolute bottom-1.5 right-3 text-xl'></i>
                </button>
            )}
        </div>
    );
};

export default Workout;
