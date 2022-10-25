import Paypal from './Paypal';
import Json from './Json';

function Cart() {
    return (
        <>
        <Json/>

        <div className='paypal-button-container d-flex justify-content-center'>
            <Paypal />
        </div>
        </>
    );
}

export default Cart;