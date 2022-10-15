import React from 'react'
// import { useEffect } from 'react';
// import { useRef } from 'react';

// export default function PayPal() {
//     const paypal = useRef()
//     useEffect(() => {
//         window.paypal.Buttons({
//             createOrder: (data, actions, err) => {
//                 return actions.order.create({
//                     intent: "CAPTURE",
//                     purchase_units: [
//                         {
//                             description: "Compra de productos",
//                             amount: {
//                                 currency_code: "USD",
//                                 value: 10.00
//                             }
//                         }
//                     ]
//                 })
//             },
//             onApprove: async (data, actions) => {
//                 const order = await actions.order.capture();
//                 console.log(order);
//             },
//             onError: (err) => {
//                 console.log(err);
//             }
//         })
//         .render(paypal.current);
//     }, []);
//   return (
//     <div ref={paypal}></div>
//   )
// }
import { PayPalButtons } from '@paypal/react-paypal-js';

const Paypal = () => {
    return <PayPalButtons/>
}

export default Paypal;