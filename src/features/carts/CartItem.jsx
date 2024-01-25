import Button from '../../UI-components/Button';
import { formatCurrency } from '../../heplers/helpers';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-2 md:flex md:items-center md:justify-between md:px-4 ">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="mt-1 flex items-center justify-between md:mt-0 md:space-x-5">
        <p className="text-sm font-extrabold">{formatCurrency(totalPrice)}</p>
        <Button size="small" color="secondary">
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
