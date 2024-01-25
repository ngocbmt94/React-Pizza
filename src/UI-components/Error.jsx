import { useNavigate, useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {
  const error = useRouteError(); // get error message from React-router

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>%{error.data || error.message}%</p>
      <LinkButton to="/" arrow={true}>
        Go back
      </LinkButton>
    </div>
  );
}

export default Error;
