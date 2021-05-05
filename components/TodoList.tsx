import React, { useState } from 'react';
import { Card } from 'antd';
import { Todo } from '../interfaces';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const TodoList = () => {
    const [todoItems, setTodoItems] = useState<Todo[]>([]);

    const addTodo = (text: string) => {
        const newTodoItems = [...todoItems, { text, isDone: false }];
        setTodoItems(newTodoItems);
    }

    const markTodo = (index: number) => {
        const newTodoItems = [...todoItems];
        newTodoItems[index].isDone = true;
        setTodoItems(newTodoItems);
    }

    const removeTodo = (index: number) => {
        const newTodoItems = [...todoItems];
        newTodoItems.splice(index, 1);
        setTodoItems(newTodoItems);
    }

    return (
      <div className="app">
        <TodoForm addTodo={addTodo} />
        {todoItems.map((todoItem, index) => (
          <Card key={index}>
            <TodoItem
              index={index}
              todo={todoItem}
              markTodo={markTodo}
              removeTodo={removeTodo}
            />
          </Card>
        ))}
      </div>
    );
};

export default TodoList;