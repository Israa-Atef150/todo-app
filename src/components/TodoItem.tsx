import type { Todo } from '../types/Todo';
import './TodoItem.css';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <div className={`todo-item ${todo.completed ? 'done' : ''}`}>
      <span onClick={() => onToggle(todo.id)} className="title">
        {todo.title}
      </span>
      <button onClick={() => onDelete(todo.id)} className="delete-btn">
        ❌
      </button>
    </div>
  );
};

export default TodoItem;
