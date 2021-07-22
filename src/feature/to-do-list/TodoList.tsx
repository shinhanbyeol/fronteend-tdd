import React from 'react';

interface props {
  todoList: string[];
  addEndDo: (idx: number) => void;
  removeDo: (idx: number) => void;
}

const TodoList: React.FunctionComponent<props> = ({
  todoList,
  addEndDo,
  removeDo,
}: props) => {
  const rendedList =
    todoList.length > 0
      ? todoList.map((todo, index) => {
          return (
            <li key={`todo-${index}`}>
              {todo}
              <button onClick={() => addEndDo(index)}>Done!!</button>
              <button onClick={() => removeDo(index)}>x</button>
            </li>
          );
        })
      : null;
  return <ul>{rendedList}</ul>;
};

export default TodoList;
