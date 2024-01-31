import { useSelector } from 'react-redux';
import CreateUser from '../features/users/CreateUser';
import LinkButton from '../UI-components/LinkButton';
import { getUserName } from '../features/users/userSlice';

function Home() {
  const userName = useSelector(getUserName);

  return (
    <div className="text-center">
      <h1 className="my-8 uppercase text-slate-900">
        The best pizza.
        <br />
        <span className="text-teals-600">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {!userName ? (
        <CreateUser />
      ) : (
        <LinkButton to="/menu" arrow={true}>
          Continue ordering, {userName}
        </LinkButton>
      )}
    </div>
  );
}

export default Home;
