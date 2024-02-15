import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import EmptyCart from './EmptyCart';
import LinkButton from '../../UI-components/LinkButton';
import Button from '../../UI-components/Button';
import CartItem from './CartItem';
import { clearAllCart, getCart } from './cartSlice';
import { getUserName } from '../users/userSlice';

function Cart() {
  const navigateFn = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const cart = useSelector(getCart);

  function handleClearAllCart() {
    dispatch(clearAllCart());
  }

  if (cart.length === 0) return <EmptyCart />;
  return (
    <div>
      <LinkButton to="/menu" arrow={true}>
        Back to menu
      </LinkButton>
      <div className="mx-auto max-w-xl rounded-xl border border-slate-300 bg-white p-5 shadow-lg">
        <h2 className="mb-5 text-xl font-semibold text-teals-800">
          Your cart, {userName}
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

          <Button size="normal" color="secondary" onClick={handleClearAllCart}>
            Clear cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
