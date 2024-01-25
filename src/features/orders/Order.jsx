// Test ID: IIDSAT, 1SD8VK

import { useLoaderData } from 'react-router-dom';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../heplers/helpers';

import { getOrder } from '../../services/apiRestaurant';
import OrderItem from './OrderItem';

function Order() {
  const orderData = useLoaderData();
  console.log(orderData);

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    id,
    cart,
  } = orderData;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-8">
      <div className="justifty-start flex flex-wrap items-center gap-x-20">
        <h2 className="font-extrabold text-teals-800">{`Order #${orderData.id} status`}</h2>

        <div className="flex flex-wrap space-x-3">
          {priority && (
            <span className="rounded-full border border-red-500 bg-red-500/50 px-2 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-md">
              Priority
            </span>
          )}
          <span className="rounded-full border border-green-500 bg-green-500/50 px-2 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-md">
            {status} order
          </span>
        </div>
      </div>

      <div className="justifty-start flex flex-wrap items-center gap-x-20 rounded-lg border border-slate-300 bg-white p-5 shadow-lg">
        <p className="font-bold">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className="text-slate-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="max-w-lg divide-y  divide-slate-300 rounded-lg border border-slate-300 bg-white px-5 py-2 shadow-lg">
        {cart.map((item) => (
          <OrderItem item={item} key={item.id} />
        ))}
      </ul>

      <div className=" rounded-lg border border-slate-300 bg-white px-5 py-3 shadow-lg">
        <p className="py-1">Price pizza: {formatCurrency(orderPrice)} </p>
        {priority && (
          <p className="py-1">Price priority:{formatCurrency(priorityPrice)}</p>
        )}
        <p className="py-1 font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const orderData = await getOrder(params.orderID);
  return orderData;
}
export default Order;
