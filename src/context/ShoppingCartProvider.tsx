import { ReactElement, createContext, useMemo, useReducer } from 'react';

export type ShoppingCartItemType = {
    id: number;
    name: string;
    price: number;
    includes: string[];
    summary: string;
    quantity: number;
};

type ShoppingCartStateType = {
    shoppingCart: ShoppingCartItemType[];
};

// Initial state the ShoppingCartState is given
const initShoppingCartState: ShoppingCartStateType = { shoppingCart: [] };

// The actions for the shopping cart, referenced here so that I don't have to keep typing
// out the action type string and potentially make an error - easy to do
const REDUCER_ACTION_TYPE = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
    QUANTITY: 'QUANTITY',
    SUBMIT: 'SUBMIT',
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

// Payload is the data that your reducer will use to update the state
export type ReducerAction = {
    type: string;
    payload?: ShoppingCartItemType;
};

// Takes existing state, applies an action, and returns us a new state
const reducer = (
    state: ShoppingCartStateType,
    action: ReducerAction
): ShoppingCartStateType => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.ADD: {
            if (!action.payload) {
                throw new Error('action.payload missing in ADD action');
            }
            const { id, name, price, includes, summary } = action.payload;
            // Get all other items, except the item that is being added
            const filteredShoppingCart: ShoppingCartItemType[] =
                state.shoppingCart.filter((item) => item.id !== id);
            // Make sure that item being added exists, if it doesn't exist it would be undefined.
            const itemExists: ShoppingCartItemType | undefined =
                state.shoppingCart.find((item) => item.id === id);
            // If item exists add 1 to the quantity, else the item didn't exist so now is equal to 1.
            const quantity: number = itemExists ? itemExists.quantity + 1 : 1;
            return {
                ...state,
                shoppingCart: [
                    ...filteredShoppingCart,
                    {
                        id,
                        name,
                        price,
                        includes,
                        summary,
                        quantity,
                    },
                ],
            };
        }
        case REDUCER_ACTION_TYPE.REMOVE: {
            if (!action.payload) {
                throw new Error('action.payload missing in REMOVE action');
            }
            const { id } = action.payload;
            // Get all other items, except the item that is to be deleted
            const filteredShoppingCart: ShoppingCartItemType[] =
                state.shoppingCart.filter((item) => item.id !== id);
            return { ...state, shoppingCart: [...filteredShoppingCart] };
        }
        case REDUCER_ACTION_TYPE.QUANTITY: {
            if (!action.payload) {
                throw new Error('action.payload missing in QUANTITY action');
            }
            const { id, quantity } = action.payload;
            // Make sure that item being updated exists, if it doesn't exist it would be undefined.
            const itemExists: ShoppingCartItemType | undefined =
                state.shoppingCart.find((item) => item.id === id);

            if (!itemExists) {
                throw new Error('Item must exist in order to update quantity');
            }

            // Update the item with the new quantity
            const updatedItem: ShoppingCartItemType = {
                ...itemExists,
                quantity,
            };

            // Get all other items, except the item that is to be updated
            const filteredShoppingCart: ShoppingCartItemType[] =
                state.shoppingCart.filter((item) => item.id !== id);

            return {
                ...state,
                shoppingCart: [...filteredShoppingCart, updatedItem],
            };
        }
        case REDUCER_ACTION_TYPE.SUBMIT: {
            // There is no backend, so to percieve a submit,
            // just remove items from the shopping cart
            return { ...state, shoppingCart: [] };
        }
        default:
            throw new Error('Unidentified reducer action type');
    }
};

// Hold all state and logic as we use it
const useShoppingCartContext = (
    initShoppingCartState: ShoppingCartStateType
) => {
    // useReducer is similar to useState, it accepts a reducer and returns the current state assigned with a dispatch method.
    // dispatch provides actions to the reducer
    const [state, dispatch] = useReducer(reducer, initShoppingCartState);

    // Memmized value so on rerender we don't need to fetch the value of the object if it hasn't changed
    // Won't need to worry about REDUCER_ACTIONS causing a rerender
    const REDUCER_ACTIONS = useMemo(() => {
        return REDUCER_ACTION_TYPE;
    }, []);

    // Set itinital value to 0
    const totalItems: number = state.shoppingCart.reduce(
        (prevValue, shoppingCartItem) => {
            return prevValue + shoppingCartItem.quantity;
        },
        0
    );

    // Help to set currency value
    const totalPrice: string = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
    }).format(
        state.shoppingCart.reduce((prevValue, shoppingCartItem) => {
            return (
                prevValue + shoppingCartItem.quantity * shoppingCartItem.price
            );
        }, 0)
    );

    // Order the cart by id
    const shoppingCart = state.shoppingCart.sort((a, b) => {
        const itemA = a.id;
        const itemB = b.id;
        return itemA - itemB;
    });

    return { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, shoppingCart };
};

export type UseShoppingCartContextType = ReturnType<
    typeof useShoppingCartContext
>;

// Initial state to be passed into context
const initShoppingCartContextState: UseShoppingCartContextType = {
    dispatch: () => undefined,
    REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
    totalItems: 0,
    totalPrice: '',
    shoppingCart: [],
};

export const ShoppingCartContext = createContext<UseShoppingCartContextType>(
    initShoppingCartContextState
);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ShoppingCartProvider = ({
    children,
}: ChildrenType): ReactElement => {
    return (
        <ShoppingCartContext.Provider
            value={useShoppingCartContext(initShoppingCartState)}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};

export default ShoppingCartContext;
