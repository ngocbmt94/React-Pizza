import DeleteItem from './DeleteItem';
import { formatCurrency } from '../../heplers/helpers';
import UpdateItemQuantity from './UpdateItemQuantity';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-2 md:flex md:items-center md:justify-between md:px-4 ">
      <p>
        <span className="font-bold text-teals-800">{quantity}</span>&times;{' '}
        {name}
      </p>
      <div className="mt-1 flex items-center justify-between md:mt-0 md:space-x-5">
        <p className="text-sm font-extrabold">{formatCurrency(totalPrice)}</p>
        <div className="flex items-center">
          <UpdateItemQuantity pizzaId={pizzaId} />
          <DeleteItem pizzaId={pizzaId} />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
