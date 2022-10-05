import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const getUser = () => Promise.resolve({ id: 1, name: 'Elem' });

const Search = ({ value, onChange, children }) => {
  return (
    <form>
      <label htmlFor='search'>{children}</label>
      <input id='search' required placeholder='search' type='search' name='search' value={value} onChange={onChange} />
    </form>
  )
}
function App() {
  const [search, setSearch] = useState('');
  const [user, setUser] = useState('');
  const onChange = ({ target }) => {
    setSearch(target.value);
  }
  useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      setUser(user);
    }
    loadUser();
  },[])
  return (
    <div className="App">
      {user && <h2>Logged in as {user.name ? user.name : 'anonim'}</h2>}
      <Search value={search} onChange={onChange}>
        Search:
      </Search>
      <img className='image' style={{width: '300px'}} src='' alt='for search' />
      <div>
        Search for: {search ? search : '...'}
      </div>
    </div>
  );
}

export default App;
