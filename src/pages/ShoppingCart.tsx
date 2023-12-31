// https://tailwindui.com/components/ecommerce/components/shopping-carts
import useShoppingCart from '../hooks/useShoppingCart';
import { useState } from 'react';

import ShoppingCartItem from '../components/ShoppingCartItem';

const ShoppingCart = () => {
    const [submitted, setSubmitted] = useState<boolean>(false);
    const { dispatch, REDUCER_ACTIONS, totalPrice, shoppingCart } =
        useShoppingCart();

    const onSubmitOrder = () => {
        dispatch({ type: REDUCER_ACTIONS.SUBMIT });
        setSubmitted(true);
    };

    const renderShoppingCartList = shoppingCart.map((item) => (
        <ShoppingCartItem
            key={item.id}
            item={item}
            dispatch={dispatch}
            REDUCER_ACTIONS={REDUCER_ACTIONS}
        />
    ));

    let content;

    !submitted
        ? (content = (
              <div className='py-10'>
                  <span className='block pb-12 text-center text-5xl font-medium dark:text-white md:text-6xl'>
                      Shopping Cart.
                  </span>
                  <div className='mx-auto w-full max-w-3xl rounded-lg border border-gray-200 bg-white px-8 py-4 shadow-[rgba(0,_0,_0,_0.25)_0px_0px_30px_-12px] dark:border-gray-700 dark:bg-gray-800 dark:shadow-[rgba(255,_250,_250,_0.25)_0px_0px_30px_-12px]'>
                      <div className='flow-root'>
                          <ul
                              role='list'
                              className='divide-y divide-gray-200 dark:divide-gray-700 '
                          >
                              {renderShoppingCartList}
                              <li className='py-4 sm:py-6'>
                                  <div className='flex items-center space-x-4'>
                                      <div className='min-w-0 flex-1'>
                                          <p className='text-sm font-medium text-gray-900 dark:text-white'>
                                              Subtotal
                                          </p>
                                          <p className='text-sm text-gray-500 dark:text-gray-400'>
                                              Shipping and taxes will be
                                              calculated at checkout
                                          </p>
                                      </div>
                                      <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                                          {totalPrice}
                                      </div>
                                  </div>
                              </li>
                          </ul>
                          <div className='grid grid-cols-1 gap-y-2 md:grid-cols-2 md:gap-x-2 lg:gap-x-2'>
                              <button
                                  onClick={onSubmitOrder}
                                  type='button'
                                  className='mb-2 mr-2 inline-flex items-center justify-center rounded-lg bg-[#050708] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#050708]/80 focus:outline-none focus:ring-4 focus:ring-[#050708]/50 dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600'
                              >
                                  Pay with Apple Pay
                                  <svg
                                      className='-mr-1 ml-2 h-5 w-5'
                                      aria-hidden='true'
                                      focusable='false'
                                      data-prefix='fab'
                                      data-icon='apple'
                                      role='img'
                                      xmlns='http://www.w3.org/2000/svg'
                                      viewBox='0 0 384 512'
                                  >
                                      <path
                                          fill='currentColor'
                                          d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z'
                                      ></path>
                                  </svg>
                              </button>
                              <button
                                  onClick={onSubmitOrder}
                                  type='button'
                                  className='mb-2 mr-2 inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-800'
                              >
                                  <svg
                                      aria-hidden='true'
                                      className='-ml-1 mr-2 h-3 w-10'
                                      viewBox='0 0 660 203'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                  >
                                      <path
                                          d='M233.003 199.762L266.362 4.002H319.72L286.336 199.762H233.003V199.762ZM479.113 8.222C468.544 4.256 451.978 0 431.292 0C378.566 0 341.429 26.551 341.111 64.604C340.814 92.733 367.626 108.426 387.865 117.789C408.636 127.387 415.617 133.505 415.517 142.072C415.384 155.195 398.931 161.187 383.593 161.187C362.238 161.187 350.892 158.22 333.368 150.914L326.49 147.803L319.003 191.625C331.466 197.092 354.511 201.824 378.441 202.07C434.531 202.07 470.943 175.822 471.357 135.185C471.556 112.915 457.341 95.97 426.556 81.997C407.906 72.941 396.484 66.898 396.605 57.728C396.605 49.591 406.273 40.89 427.165 40.89C444.611 40.619 457.253 44.424 467.101 48.39L471.882 50.649L479.113 8.222V8.222ZM616.423 3.99899H575.193C562.421 3.99899 552.861 7.485 547.253 20.233L468.008 199.633H524.039C524.039 199.633 533.198 175.512 535.27 170.215C541.393 170.215 595.825 170.299 603.606 170.299C605.202 177.153 610.098 199.633 610.098 199.633H659.61L616.423 3.993V3.99899ZM551.006 130.409C555.42 119.13 572.266 75.685 572.266 75.685C571.952 76.206 576.647 64.351 579.34 57.001L582.946 73.879C582.946 73.879 593.163 120.608 595.299 130.406H551.006V130.409V130.409ZM187.706 3.99899L135.467 137.499L129.902 110.37C120.176 79.096 89.8774 45.213 56.0044 28.25L103.771 199.45L160.226 199.387L244.23 3.99699L187.706 3.996'
                                          fill='#0E4595'
                                      />
                                      <path
                                          d='M86.723 3.99219H0.682003L0 8.06519C66.939 24.2692 111.23 63.4282 129.62 110.485L110.911 20.5252C107.682 8.12918 98.314 4.42918 86.725 3.99718'
                                          fill='#F2AE14'
                                      />
                                  </svg>
                                  Pay with Visa
                              </button>
                              <button
                                  onClick={onSubmitOrder}
                                  type='button'
                                  className='mb-2 mr-2 inline-flex items-center justify-center rounded-lg bg-[#FF9119] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#FF9119]/80 focus:outline-none focus:ring-4 focus:ring-[#FF9119]/50 dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40'
                              >
                                  <svg
                                      className='-ml-1 mr-2 h-4 w-4'
                                      aria-hidden='true'
                                      focusable='false'
                                      data-prefix='fab'
                                      data-icon='bitcoin'
                                      role='img'
                                      xmlns='http://www.w3.org/2000/svg'
                                      viewBox='0 0 512 512'
                                  >
                                      <path
                                          fill='currentColor'
                                          d='M504 256c0 136.1-111 248-248 248S8 392.1 8 256 119 8 256 8s248 111 248 248zm-141.7-35.33c4.937-32.1-20.19-50.74-54.55-62.57l11.15-44.7-27.21-6.781-10.85 43.52c-7.154-1.783-14.5-3.464-21.8-5.13l10.93-43.81-27.2-6.781-11.15 44.69c-5.922-1.349-11.73-2.682-17.38-4.084l.031-.14-37.53-9.37-7.239 29.06s20.19 4.627 19.76 4.913c11.02 2.751 13.01 10.04 12.68 15.82l-12.7 50.92c.76 .194 1.744 .473 2.829 .907-.907-.225-1.876-.473-2.876-.713l-17.8 71.34c-1.349 3.348-4.767 8.37-12.47 6.464 .271 .395-19.78-4.937-19.78-4.937l-13.51 31.15 35.41 8.827c6.588 1.651 13.05 3.379 19.4 5.006l-11.26 45.21 27.18 6.781 11.15-44.73a1038 1038 0 0 0 21.69 5.627l-11.11 44.52 27.21 6.781 11.26-45.13c46.4 8.781 81.3 5.239 95.99-36.73 11.84-33.79-.589-53.28-25-65.99 17.78-4.098 31.17-15.79 34.75-39.95zm-62.18 87.18c-8.41 33.79-65.31 15.52-83.75 10.94l14.94-59.9c18.45 4.603 77.6 13.72 68.81 48.96zm8.417-87.67c-7.673 30.74-55.03 15.12-70.39 11.29l13.55-54.33c15.36 3.828 64.84 10.97 56.85 43.03z'
                                      ></path>
                                  </svg>
                                  Pay with Bitcoin
                              </button>
                              <button
                                  onClick={onSubmitOrder}
                                  type='button'
                                  className='mb-2 mr-2 inline-flex items-center justify-center rounded-lg bg-[#F7BE38] px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-[#F7BE38]/90 focus:outline-none focus:ring-4 focus:ring-[#F7BE38]/50 dark:focus:ring-[#F7BE38]/50'
                              >
                                  <svg
                                      className='-ml-1 mr-2 h-4 w-4'
                                      aria-hidden='true'
                                      focusable='false'
                                      data-prefix='fab'
                                      data-icon='paypal'
                                      role='img'
                                      xmlns='http://www.w3.org/2000/svg'
                                      viewBox='0 0 384 512'
                                  >
                                      <path
                                          fill='currentColor'
                                          d='M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z'
                                      ></path>
                                  </svg>
                                  Pay with PayPal
                              </button>

                              <button
                                  onClick={onSubmitOrder}
                                  type='button'
                                  className='mb-2 mr-2 inline-flex items-center justify-center rounded-lg bg-gray-100 px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-500'
                              >
                                  <svg
                                      className='-ml-1 mr-2 h-4 w-4 text-[#626890]'
                                      aria-hidden='true'
                                      focusable='false'
                                      data-prefix='fab'
                                      data-icon='ethereum'
                                      role='img'
                                      xmlns='http://www.w3.org/2000/svg'
                                      viewBox='0 0 320 512'
                                  >
                                      <path
                                          fill='currentColor'
                                          d='M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z'
                                      ></path>
                                  </svg>
                                  Pay with Ethereum
                              </button>
                              <button
                                  onClick={onSubmitOrder}
                                  type='button'
                                  className='mb-2 mr-2 inline-flex items-center justify-center rounded-lg bg-[#2557D6] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#2557D6]/90 focus:outline-none focus:ring-4 focus:ring-[#2557D6]/50 dark:focus:ring-[#2557D6]/50'
                              >
                                  <svg
                                      aria-hidden='true'
                                      className='-ml-1 mr-2 h-3 w-10'
                                      viewBox='0 0 256 64'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                  >
                                      <path
                                          d='M28.812 0L0 63.76H34.492L38.768 53.594H48.542L52.818 63.76H90.784V56.001L94.167 63.76H113.806L117.189 55.837V63.76H196.148L205.749 53.858L214.739 63.76L255.294 63.842L226.391 32.058L255.294 0H215.368L206.022 9.71899L197.315 0H111.418L104.042 16.457L96.493 0H62.073V7.495L58.244 0C58.244 0 28.812 0 28.812 0ZM35.486 9.05399H52.299L71.41 52.29V9.05399H89.828L104.589 40.054L118.193 9.05399H136.519V54.806H125.368L125.277 18.955L109.02 54.806H99.045L82.697 18.955V54.806H59.757L55.408 44.549H31.912L27.572 54.797H15.281C15.281 54.797 35.486 9.05399 35.486 9.05399ZM146.721 9.05399H192.063L205.931 24.034L220.246 9.05399H234.114L213.043 32.049L234.114 54.779H219.617L205.749 39.625L191.361 54.779H146.721V9.05399ZM43.665 16.795L35.924 35.067H51.397L43.665 16.795ZM157.918 18.527V26.879H182.654V36.188H157.918V45.306H185.663L198.555 31.876L186.21 18.519H157.918V18.527Z'
                                          fill='white'
                                      />
                                  </svg>
                                  Pay with American Express
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          ))
        : (content = (
              <div className='py-10'>
                  <span className='py-15 block text-center text-5xl font-medium dark:text-white md:text-6xl'>
                      Thank you for your purchase.
                  </span>
              </div>
          ));

    return content;
};

export default ShoppingCart;
