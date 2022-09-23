import React, { useContext } from 'react';
import { any, oneOf, oneOfType, shape, string, number, func } from 'prop-types';


const CartContext = React.createContext();

export const CartProvider = ({value, children}) => {
    return <CartContext.Provider valud={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
    value: shape({
        currentUser: oneOfType([
            oneOf([null]),
            shape({
                title: string,
                products: string,
                totalPrice: number,
            }),
        ]),
        handleUpdateAmount: func,
    }),
    children: any,
};

export const useCart = () => {
    const value = useContext(CartContext);
    if (!value) {
        throw new Error('out of useCart or CartProvider');

    }

    return value;
}
