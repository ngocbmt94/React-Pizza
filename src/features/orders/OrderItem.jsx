import { formatCurrency } from '../../heplers/helpers';
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3">
      <div className="flex items-center justify-between text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <span className="text-sm capitalize italic text-slate-500">
        ({isLoadingIngredients ? '...loadinng' : ingredients.join(', ')})
      </span>
    </li>
  );
}

export default OrderItem;
