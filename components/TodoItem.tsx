import * as React from 'react';
import { Button } from 'antd';
import { Todo } from '../interfaces';

interface TodoItemProps {
    todo: Todo;
    index: number;
    markTodo: (index: number) => void;
    removeTodo: (index: number) => void;
}

const TodoItem = ({ todo, index, markTodo, removeTodo }: TodoItemProps) => (
  <div className="todo">
    <span style={{ textDecoration: todo.isDone ? 'line-through' : '' }}>
      {todo.text}
    </span>
    <div>
      <Button onClick={() => markTodo(index)}>✓</Button>{' '}
      <Button danger onClick={() => removeTodo(index)}>✕</Button>
    </div>
  </div>
);

export default TodoItem;