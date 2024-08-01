import React from 'react';
import StripeProvider from './StripeProvider';
import CheckoutForm from './CheckoutForm';

const App = () => (
  <StripeProvider>
    <CheckoutForm />
  </StripeProvider>
);

export default App;