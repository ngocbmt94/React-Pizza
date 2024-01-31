import { useSelector } from 'react-redux';
import { getUserName } from './userSlice';

function UserName() {
  const userName = useSelector(getUserName);

  if (!userName) return null;
  return (
    <div className="flex items-center">
      <img
        className="mx-5 h-10 w-10 rounded-full border-2 border-white"
        alt="user"
        src="../../public/user.png"
      />
      <span className="font-semibold capitalize tracking-widest text-white">
        {userName}
      </span>
    </div>
  );
}

export default UserName;
