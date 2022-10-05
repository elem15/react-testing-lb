import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


const Search = ({ value, onChange, children }) => {
  return (
    <form>
      <label>{children}</label>
      <input placeholder='search' type='search' name='search' value={value} onChange={onChange} />
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
        Search
        <br/>
      </Search>
      <div>
        Search for: {search ? search : '...'}
      </div>
    </div>
  );
}

export default App;
