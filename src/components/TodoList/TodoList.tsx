import React from 'react';

import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <section className="TodoList">
    {todos.map(el => (
      <TodoInfo todo={el} key={el.id} />
    ))}
  </section>
);