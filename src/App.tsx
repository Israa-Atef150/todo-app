import { useState, useEffect } from 'react';
import TodoItem from './components/TodoItem';
import type { Todo } from './types/Todo';
import './App.css';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState('');

  // ✅ تحميل المهام من LocalStorage عند فتح الصفحة
  useEffect(() => {
    const saved = localStorage.getItem('todos');
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []);

  // ✅ حفظ المهام كل ما تتغير
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleToggle = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleAddTask = () => {
    if (newTask.trim() === '') return;

    const newTodo: Todo = {
      id: Date.now(),
      title: newTask,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setNewTask('');
  };

  const handleDelete = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <div className="app">
      <h2>✨ To Do List</h2>
      <div className="add-task">
        <input
          type="text"
          placeholder="Add new task..."
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <div className="todo-list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
