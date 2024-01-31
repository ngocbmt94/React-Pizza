import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '../../UI-components/Button';
import { createName } from './userSlice';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigateFn = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;
    dispatch(createName(username));
    navigateFn('/menu');
  }

  return (
    <form onSubmit={handleSubmit} className="my-8">
      <p>👋 Welcome! Please start by telling us your name:</p>
      <input
        className="input-search mb-10 md:w-96"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {username !== '' && (
        <div>
          <Button size="normal">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
