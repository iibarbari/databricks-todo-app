import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { TodoContext } from '../../contexts';

type Props = Overwrite<React.PropsWithoutRef<JSX.IntrinsicElements['tr']>, {
  todo: TTodo;
}>

export default function TodoListItem({ todo, ...props }: Props) {
  const { removeTodo, toggleTodo } = useContext(TodoContext);

  return (
    <tr {...props}>
      <td>{todo.id}</td>

      <td>{todo.title}</td>

      <td>
        <Form.Check
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          type="checkbox"
        />
      </td>

      <td>
        <Button
          onClick={() => removeTodo(todo.id)}
          size='sm'
          variant="outline-danger"
        >
          x
        </Button>
      </td>
    </tr>
  );
}
