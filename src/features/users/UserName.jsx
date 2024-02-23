import { useSelector } from 'react-redux';
import { getUserName } from './userSlice';

function UserName() {
  const userName = useSelector(getUserName);

  if (!userName) return null;
  return (
    <div className="flex items-center">
      <span className="text-lg font-semibold capitalize tracking-widest text-white">
        {userName}
      </span>
    </div>
  );
}

export default UserName;
