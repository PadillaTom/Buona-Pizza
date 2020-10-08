import React from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import EmptyCart from '../Components/EmptyCart';
import CartItem from '../Components/CartItem';

const Cart = () => {
  let user = false;
  // Context:
  const { cart, total } = React.useContext(CartContext);

  // Empty Cart?:
  if (cart.length === 0) {
    return <EmptyCart></EmptyCart>;
  }
  return (
    <section className='section cart-sect'>
      <div className='section-center'>
        <div className='section-title'>
          <h2>Your Cart</h2>
        </div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item}></CartItem>;
        })}
        <h2>total: $ {total}</h2>
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
