import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigateFn = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!query) return;

    navigateFn(`/order/${query}`);
    setQuery('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input-search"
        type="text"
        placeholder="Search order..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
