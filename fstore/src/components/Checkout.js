import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { BsBag } from 'react-icons/bs';

const Checkout = () => {
  const { total, clearCart } = useContext(CartContext);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  const handleConfirmPayment = () => {
    setPaymentConfirmed(true);
    clearCart();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <BsBag style={{ fontSize: '2rem', marginRight: '10px' }} />
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Your Total: ${parseFloat(total).toFixed(2)}</h2>
      </div>
      {!paymentConfirmed ? (
        <button onClick={handleConfirmPayment} className='bg-primary py-4 px-8 text-white mb-4'>Confirm Payment</button>
      ) : (
        <p>Payment has been successfully confirmed!</p>
      )}
      <Link to='/' className='bg-primary py-4 px-8 text-white'>Back to Home</Link>
    </div>
  );
};

export default Checkout;