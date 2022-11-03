import { PayPalButtons } from '@paypal/react-paypal-js';
import { useState } from 'react';

const Paypal = (props) => {
    const {product} = props;

    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);

    const handleApproval = orderID => {
        setPaidFor(true);
    }

    if(paidFor) {
        alert('Gracias por su compra!');
    }
    if(error) {
        alert(error);
    }

    return <PayPalButtons
        createOrder={(data, actions) => {
            return actions.order.create({ 
                purchase_units: [
                    {description: product.description, 
                    amount: {value: product.price}}
                ]
            })
        }}
        onApprove={async(data, actions) => {
            const order = await actions.order.capture();
            console.log(order);

            handleApproval(data.orderID);
        }}
        onError={err => {
            setError(err);
            console.error(err);
        }}
    />
}

export default Paypal;