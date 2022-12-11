import React from 'react';

const FullDetails = (props) => {
    const cart = props.cart;
    return (
        <div>
            <h2>this is card {cart.length}</h2>
        </div>
    );
};

export default FullDetails;