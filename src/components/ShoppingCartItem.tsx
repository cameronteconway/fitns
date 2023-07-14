import { ShoppingCartItemType } from '../context/ShoppingCartProvider';
import {
    ReducerAction,
    ReducerActionType,
} from '../context/ShoppingCartProvider';

type PropsType = {
    item: ShoppingCartItemType;
    dispatch: React.Dispatch<ReducerAction>;
    REDUCER_ACTIONS: ReducerActionType;
};

const ShoppingCartItem = ({ item, dispatch, REDUCER_ACTIONS }: PropsType) => {
    const removeShoppingCartItem = () => {
        dispatch({ type: REDUCER_ACTIONS.REMOVE, payload: item });
    };

    return (
        <li className='py-4 sm:py-6'>
            <div className='flex mb-4 justify-between'>
                <p className='text-xl font-medium text-gray-900 dark:text-white'>
                    {item.name}
                </p>
                <span className='block text-base font-semibold text-gray-900 dark:text-white'>
                    {new Intl.NumberFormat('en-GB', {
                        style: 'currency',
                        currency: 'GBP',
                    }).format(item.price)}
                </span>
            </div>
            <div className='flex justify-between '>
                <p className='text-md text-gray-500 dark:text-gray-400'>
                    {item.summary}
                </p>
                <button
                    onClick={removeShoppingCartItem}
                    className='block text-base font-semibold text-gray-900 dark:text-white'
                >
                    Remove
                </button>
            </div>
        </li>
    );
};

export default ShoppingCartItem;
