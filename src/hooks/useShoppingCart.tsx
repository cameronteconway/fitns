import { useContext } from 'react';
import ShoppingCartContext from '../context/ShoppingCartProvider';
import { UseShoppingCartContextType } from '../context/ShoppingCartProvider';

const useShoppingCart = (): UseShoppingCartContextType => {
    return useContext(ShoppingCartContext);
};

export default useShoppingCart;
