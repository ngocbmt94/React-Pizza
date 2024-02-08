import Button from '../../UI-components/Button';
import { formatCurrency } from '../../heplers/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCurrentQuantityById } from '../carts/cartSlice';
import DeleteItem from '../carts/DeleteItem';
import UpdateItemQuantity from '../carts/UpdateItemQuantity';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newCartItem = {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newCartItem));
  }

  return (
    <li
      className={`boder group mx-auto my-5 w-[90%] scale-100 ${soldOut ? 'cursor-not-allowed' : 'cursor-pointer'} overflow-hidden rounded-lg border-slate-200 bg-white shadow-lg transition-all duration-300 hover:scale-[1.1]  md:w-3/4`}
    >
      <img
        className={`aspect-square w-full scale-100  rounded-t-lg object-cover transition-all duration-300 group-hover:scale-[1.05] ${soldOut ? 'grayscale' : ''}`}
        src={imageUrl}
        alt={name}
      />
      <div className="flex flex-col p-5 md:min-h-40">
        <p className="text-lg font-semibold capitalize  text-teals-700">
          {name}
        </p>
        <p className="mb-2 capitalize italic text-slate-500">
          {ingredients.join(', ')}
        </p>

        {!soldOut ? (
          <p className="text-lg font-semibold text-slate-800">
            {formatCurrency(unitPrice)}
          </p>
        ) : (
          <p className="text-lg font-semibold text-red-600">Sold out</p>
        )}
      </div>

      <div className="mx-4 mb-4 mt-auto">
        {isInCart && (
          <div className="flex">
            <UpdateItemQuantity pizzaId={id} />
            <DeleteItem pizzaId={id} />
          </div>
        )}
        {!soldOut && !isInCart && (
          <Button
            size="small"
            onClick={handleAddToCart}
            color={`${soldOut ? 'secondary' : 'default'}`}
          >
            Add To Cart
          </Button>
        )}
      </div>
    </li>
  );
}

export default MenuItem;
