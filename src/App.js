import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


const Search = ({ value, onChange, children }) => {
  return (
    <form>
      <label htmlFor='search'>{children}</label>
      <input id='search' placeholder='search' type='search' name='search' value={value} onChange={onChange} />
    </form>
  )
}
function App() {
  const [search, setSearch] = useState('');
  const onChange = ({ target }) => {
    setSearch(target.value);
  }
  return (
    <div className="App">
      <Search value={search} onChange={onChange}>
        Search:
      </Search>
      <img src='' alt='for search' />
      <div>
        Search for: {search ? search : '...'}
      </div>
    </div>
  );
}

export default App;
