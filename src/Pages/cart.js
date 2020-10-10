import React from 'react';
import { Link } from 'react-router-dom';
import EmptyCart from '../Components/EmptyCart';
import CartItem from '../Components/CartItem';
// Context:
import { useStateValue } from '../Context/CartContext';

// Main:
const Cart = () => {
  let user = false;
  //Context:
  const [{ basket }] = useStateValue();

  // Total Price:
  const newTotal = basket.reduce(
    (amount, item) => item.price * item.amount + amount,
    0
  );

  //Empty Cart?:
  if (basket?.length === 0) {
    return <EmptyCart></EmptyCart>;
  }
  return (
    <section className='section cart-sect'>
      <div className='section-center'>
        <div className='section-title'>
          <h2>Your Cart</h2>
        </div>
        <Link to ="/menu"><p className="return-menu">View Menu</p></Link>
        {basket?.map((item) => {
          return <CartItem key={item.id} {...item}></CartItem>;
        })}
        <h2 className='cart-page-total'>total: $ {newTotal}</h2>
        {user ? (
          <Link to='/checkout' className='btn-primary btn-checkout'>
            Checkout
          </Link>
        ) : (
          <Link to='/login' className='btn-primary btn-checkout'>
            Login
          </Link>
        )}
      </div>
    </section>
  );
};

export default Cart;
