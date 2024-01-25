import { useState } from 'react';

import Button from '../../UI-components/Button';

function CreateUser() {
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
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
