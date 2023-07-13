// https://tailwindui.com/components/ecommerce/components/shopping-carts
import useShoppingCart from '../hooks/useShoppingCart';
import { useState } from 'react';

import ShoppingCartItem from '../components/ShoppingCartItem';

const ShoppingCart = () => {
    const [confirm, setConfirm] = useState<boolean>(false);
    const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, shoppingCart } =
        useShoppingCart();

    const onSubmitOrder = () => {
        dispatch({ type: REDUCER_ACTIONS.SUBMIT });
        setConfirm(true);
    };

    console.log(totalPrice);

    const renderShoppingCartList = shoppingCart.map((item) => (
        <ShoppingCartItem
            key={item.id}
            item={item}
            dispatch={dispatch}
            REDUCER_ACTIONS={REDUCER_ACTIONS}
        />
    ));

    return (
        <div className='py-10'>
            <span className='block text-center pb-12 dark:text-white text-5xl md:text-6xl font-medium'>
                Shopping Cart.
            </span>
            <div className='w-full mx-auto max-w-3xl py-4 px-8 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700'>
                <div className='flow-root'>
                    <ul
                        role='list'
                        className='divide-y divide-gray-200 dark:divide-gray-700'
                    >
                        {renderShoppingCartList}
                        <li className='py-4 sm:py-6'>
                            <div className='flex items-center space-x-4'>
                                <div className='flex-1 min-w-0'>
                                    <p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
                                        Subtotal
                                    </p>
                                    <p className='text-sm text-gray-500 truncate dark:text-gray-400'>
                                        Shipping and taxes will be calculated at
                                        checkout
                                    </p>
                                </div>
                                <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                                    {totalPrice}
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className='w-100'>
                        <button className='mb-4 w-100 text-gray-800 dark:text-gray-400 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 md:px-4 lg:px-5 py-2 lg:py-2.5 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white focus:outline-none dark:focus:ring-gray-800 dark:border-gray-600 border items-center justify-center'>
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
