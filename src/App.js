import './App.css';
import { TodoTitle } from './TodoTitle';
import {TodoSearch} from './TodoSearch';
import {TodoCreateButton} from './TodoCreateButton';
import {TodoList} from './TodoList';
import { TodoItem } from './TodoItem';
function App() {
  return (
    <div className="App">

      < TodoTitle />
      < TodoSearch />

      < TodoList>

        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <TodoCreateButton/>
    </div>
  );
}

export default App;
