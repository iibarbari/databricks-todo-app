import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { TodoContext } from '../../contexts';
import TodoListItem from '../TodoListItem';

type Props = React.PropsWithoutRef<JSX.IntrinsicElements['table']>

export default function TodoList({ ...props }: Props) {
  const { todos, isLoading, isError } = useContext(TodoContext);

  return isLoading ? <p>Loading...</p> : (
    <>
      {isError ? <p>{isError}</p> : (
        <Table {...props}>
          <thead>
            <tr>
              <th>
                <code>userId</code>
              </th>

              <th>
                <code>title</code>
              </th>

              <th>
                <code>completed</code>
              </th>

              <th />
            </tr>
          </thead>

          <tbody>
            {todos.map(todo => (
              <TodoListItem key={todo.id} todo={todo} />
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
}
