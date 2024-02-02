import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';

import { createOrder } from '../../services/apiRestaurant';
import Button from '../../UI-components/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAddressDefaultUser,
  getUserName,
  fetchAddress,
  getStatusAddress,
  getIsHasPostion,
  getErrorAddress,
} from '../users/userSlice';
import { clearAllCart, getCart, getTotalPrice } from '../carts/cartSlice';
import EmptyCart from '../carts/EmptyCart';
import { store } from '../../store';
import { formatCurrency } from '../../heplers/helpers';
import { useState } from 'react';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getCart);
  const navigation = useNavigation();
  const isSubmiting = navigation.state === 'submitting';
  const errors = useActionData();
  const userName = useSelector(getUserName);
  const totalPrice = useSelector(getTotalPrice);
  const priorityPrice = withPriority ? totalPrice * 0.2 : 0;
  const total = totalPrice + priorityPrice;
  const addressDefaultUser = useSelector(getAddressDefaultUser);
  const statusAddress = useSelector(getStatusAddress);
  const isLoadingAddress = statusAddress === 'loading';
  const isErrorAddres = statusAddress === 'error';
  const errorAddress = useSelector(getErrorAddress);

  const isHasPosition = useSelector(getIsHasPostion);

  const dispatch = useDispatch();

  if (cart.length === 0) return <EmptyCart />;
  return (
    <div className="mx-auto max-w-3xl rounded-2xl border border-slate-300 bg-white p-10 shadow-lg">
      <h2 className="mb-5 text-center text-2xl font-extrabold text-teals-800">
        Ready to order? Let's go!
      </h2>

      <Form method="POST" action="/order/new">
        <div className="mb-5 flex flex-col md:flex-row md:items-center">
          <label className="text-sm font-bold md:basis-32">First Name</label>
          <input
            type="text"
            name="customer"
            className="input-field md:grow"
            defaultValue={userName}
            required
          />
        </div>

        <div className={`mb-5 flex flex-col md:flex-row md:items-center `}>
          <label className="text-sm font-bold md:basis-32">Phone number</label>
          <div className="grow">
            <input
              type="tel"
              name="phone"
              className={`input-field w-full ${errors?.phone ? 'border-red-600' : ''}`}
              required
            />
            <small className="mb-5 text-red-600">{errors?.phone}</small>
          </div>
        </div>

        <div className="mb-5 flex flex-col md:flex-row md:items-center">
          <label className="text-sm font-bold md:basis-32">Address</label>
          <div className="grow">
            <div className="flex items-center">
              <input
                type="text"
                name="address"
                className={`input-field mr-3 grow ${isErrorAddres ? 'border-red-600' : ''}`}
                defaultValue={addressDefaultUser}
                required
              />
              {!isHasPosition.latitude && !isHasPosition.longitude && (
                <Button
                  disabled={isLoadingAddress}
                  size="small"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(fetchAddress());
                  }}
                >
                  {isLoadingAddress ? '...loading' : 'get position'}
                </Button>
              )}
            </div>
            {isErrorAddres && (
              <small className="mb-5 w-full text-red-600">{errorAddress}</small>
            )}
          </div>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="mr-2 h-6 w-6 rounded border-stone-200 accent-teals-800 "
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-bold">
            Want to yo give your order priority?
          </label>
        </div>

        <div className="mt-10 text-center">
          {/* add cart value into data of action when submit form */}
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              isHasPosition.longitude && isHasPosition.latitude
                ? JSON.stringify(isHasPosition)
                : ''
            }
          />
          {/* no submit when loading address  */}
          <Button size="normal" disabled={isSubmiting || isLoadingAddress}>
            {!isSubmiting
              ? `Order now from ${formatCurrency(total)}`
              : 'SUBMITING...'}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  // get data from form submit
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    priority: Boolean(data.priority),
    cart: JSON.parse(data.cart),
    position: JSON.parse(data.position),
  };

  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone = 'Please add correct phone number';
    return errors;
  }

  // send order to API
  const newOrder = await createOrder(order);

  store.dispatch(clearAllCart()); // clear cart to hide cartOverview component

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
