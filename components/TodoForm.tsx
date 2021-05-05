import React, { useState } from 'react';
import { Input } from 'antd';

interface TodoFormProps {
    addTodo: (text: string) => void;
}

const TodoForm = ({ addTodo }: TodoFormProps) => {
    const [value, setValue] = useState('');
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    const handleOnPressEnter = () => {
        if (!value) {
            return;
        }
        addTodo(value);
        setValue('');
    };

    return (
      <>
        <Input
          value={value}
          placeholder="Add new todo"
          allowClear
          onChange={handleOnChange}
          onPressEnter={handleOnPressEnter}
        />
      </>
    );
};

export default TodoForm;