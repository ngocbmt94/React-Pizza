import { Form } from 'react-router-dom';
import Button from '../../UI-components/Button';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder({ orderId }) {
  // Form will not navigate away, it will simply submit a form, and then also re-validate the page.
  return (
    <Form method="PATCH" action={`/order/${orderId}`}>
      <Button size="small">Add priority</Button>
    </Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  const dataUpdate = { priority: true };

  await updateOrder(params.orderID, dataUpdate);
  return null;
}
