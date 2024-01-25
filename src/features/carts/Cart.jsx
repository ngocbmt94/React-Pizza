import { useNavigate } from 'react-router-dom';

import LinkButton from '../../UI-components/LinkButton';
import Button from '../../UI-components/Button';
import CartItem from './CartItem';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;
  const navigateFn = useNavigate();

  return (
    <>
      <LinkButton to="/menu" arrow={true}>
        Back to menu
      </LinkButton>
      <div className="mx-auto max-w-xl rounded-xl border border-slate-300 bg-white p-5 shadow-lg">
        <h2 className="mb-5 text-xl font-semibold text-teals-800">
          Your cart, %NAME%
        </h2>
        <ul className="mb-5 divide-y divide-slate-400">
          {cart.map((item) => (
            <CartItem item={item} key={item.pizzaId} />
          ))}
        </ul>
        <div className="space-y-5 md:space-x-5 md:space-y-0">
          <Button size="normal" onClick={() => navigateFn('/order/new')}>
            Order pizzas
          </Button>
          <Button size="normal" color="secondary">
            Clear cart{' '}
          </Button>
        </div>
      </div>
    </>
  );
}

export default Cart;
