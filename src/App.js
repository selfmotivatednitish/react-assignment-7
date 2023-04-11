import { useState } from 'react';
import './App.css';
import Apps from './components/Apps';
import { RoleProvider } from './components/userContext';

function App() {

  const [value, setValue] = useState("support")

  let onChangeHandle = (event) => {
    setValue(event.target.value)
  }

  return (
    <div className="App">
      <select value={value} onChange={onChangeHandle}>
        <option value="support">Support</option>
        <option value="user">User</option>
      </select>
      <RoleProvider value={value}>
        <Apps />
      </RoleProvider>
    </div>
  );
}

export default App;
