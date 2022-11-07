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

    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);

    const handleApproval = orderID => {
        setPaidFor(true);
    }

    if(paidFor) {
        alert('Gracias por su compra!');
    }
    if(error) {
        alert('Hubo un error con su compra, por favor intente de nuevo');
    }

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
                                description: "TGL Products",
                                amount: {
                                    currency_code: currency,
                                    value: total,
                                },
                            },
                        ],
                    })
                    .then((orderId) => {
                        return orderId;
                    });
            }}
            onApprove={function (data, actions) {
                return actions.order.capture().then(function () {
                    handleApproval(data.orderID);
                });
            }}
            onError={function (err) {
                setError(err);
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
                    "client-id": "AW3NwNUKH01AfY20t6Xgfde1RDryvi5cOFhQtP1cBM77jsqx2l5XsUc3WtePJlYJFoZjyn0e_SlrCGnS",
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