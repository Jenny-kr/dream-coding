import TodoList from './Components/TodoList/TodoList';
import './App.css';
import Nav from './Components/Header/Nav';
import { useState } from 'react';
import { DarkModeProvider } from './Components/Darkmode/DarkModeContext';

const filters = ['all', 'active', 'completed']
function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (

    <DarkModeProvider>
      <Nav 
      filters={filters} 
      filter={filter} 
      onFilterChange={setFilter}
      />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;
