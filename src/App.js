import { TodoTitle } from './TodoTitle';
import { TodoSearch } from './TodoSearch';
import { TodoCreateButton } from './TodoCreateButton';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import React from 'react';

const defaultTodos = [
  { Text: "Tomar el curso de react", completd: true },
  { Text: "Tomar el curso de spring", completd: false },
  { Text: "Tomar el curso de mysql", completd: false },
  { Text: "Tomar el curso de mysql", completd: false }];

function App() {
  return (
    <React.Fragment>

      < TodoTitle completed={16} total={49} />
      < TodoSearch />

      < TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.Text} Text={todo.Text}/>
        ))}
      </TodoList>

      <TodoCreateButton />
    </React.Fragment>
  );
}

export default App;
