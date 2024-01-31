import { useSelector } from 'react-redux';
import LinkButton from '../../UI-components/LinkButton';
import { getTotalQuantityPizza, getTotalPrice } from './cartSlice';
import { formatCurrency } from '../../heplers/helpers';

function CartOverview() {
  // const { totalPrice, totalQuantityPizza } = useSelector((state) =>
  //   state.cart.cart.reduce(
  //     (accumulator, currentValue) => {
  //       return {
  //         totalPrice: accumulator.totalPrice + currentValue.totalPrice,
  //         totalQuantityPizza:
  //           accumulator.totalQuantityPizza + currentValue.quantity,
  //       };
  //     },
  //     { totalPrice: 0, totalQuantityPizza: 0 },
  //   ),
  // );

  const totalPrice = useSelector(getTotalPrice);
  const totalQuantityPizza = useSelector(getTotalQuantityPizza);

  if (!totalQuantityPizza) return null;
  return (
    <div className="flex flex-col bg-slate-800 px-6 py-4 text-slate-100 md:flex-row md:justify-between">
      <p className="space-x-6 font-semibold tracking-widest">
        <span>{totalQuantityPizza} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <LinkButton to="/cart" arrow={true} color="white">
        Open cart
      </LinkButton>
    </div>
  );
}

export default CartOverview;
