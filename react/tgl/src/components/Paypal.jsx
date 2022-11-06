import { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useCarrito } from "./ShoppingCartContext.tsx";

const currency = "USD";
const style = {"layout":"vertical"};

const ButtonWrapper = ({ showSpinner }) => {
    const {cartItems} = useCarrito()

    const [storeItems, setItems] = useState([]);
    const formioItems = 'https://hyqizwlialyogdk.form.io/items/submission';

    function pullJson() {
        fetch(formioItems)
        .then(response => response.json())
        .then(data => {
            setItems(data);
        })
    }
  
    useEffect(() => {
      pullJson();
  
    }, [])

    const [total, setTotal] = useState(0);

    var monto = (
        cartItems.reduce((total, cartItem) => {
            const item = storeItems.find(i => i.data.id === cartItem.id)
            return total + (item?.data.precio || 0) * cartItem.cantidad * 1000
            }, 0)
    )

    function totalCompra(totalCompra) {
        monto = parseFloat((totalCompra/926).toFixed(2))
        setTotal(monto)
    }

    useEffect(() =>
        totalCompra(monto)
    )

    const [{ isPending }] = usePayPalScriptReducer();


    return (<>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[total, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: total,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function () {
                        // Your code here after capture the order
                    });
                }}
            />
        </>
    );
}

const Paypal = () =>{
	return (
		<div>
            <PayPalScriptProvider
                options={{
                    "client-id": "test",
                    components: "buttons",
                    currency: "USD",
                }}
            >
				<ButtonWrapper
                    currency={currency}
                    showSpinner={false}
                />
			</PayPalScriptProvider>
		</div>
	);
}

export default Paypal;